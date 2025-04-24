
import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Play, Pause, RotateCcw } from "lucide-react";
import { toast } from "sonner";

const Listening = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioUrl = "https://thepracticaldev.s3.amazonaws.com/i/0jujff6r8i5dw2g1gyt2.mp3"; // Sample audio URL
  
  // Sample listening exercise
  const listeningExercise = {
    title: "Basic Conversation",
    instruction: "Nghe đoạn hội thoại và trả lời câu hỏi",
    question: "Where does the conversation take place?",
    options: [
      { id: "a", text: "At a restaurant" },
      { id: "b", text: "At a coffee shop" },
      { id: "c", text: "At a library" },
      { id: "d", text: "At a train station" },
    ],
    correctAnswer: "b"
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      toast.error("Vui lòng chọn một câu trả lời");
      return;
    }

    setIsSubmitted(true);
    
    if (selectedAnswer === listeningExercise.correctAnswer) {
      toast.success("Chính xác! Bạn đã trả lời đúng.");
    } else {
      toast.error("Chưa đúng. Hãy thử lại!");
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setIsSubmitted(false);
    resetAudio();
    // Here you would typically load the next question
    toast.info("Chuyển đến câu hỏi tiếp theo...");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading font-bold mb-8">Luyện kỹ năng nghe tiếng Anh</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{listeningExercise.title}</CardTitle>
                <CardDescription>{listeningExercise.instruction}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Audio Player */}
                <div className="bg-gray-100 p-6 rounded-lg">
                  <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} />
                  <div className="flex items-center justify-center gap-4">
                    <Button 
                      onClick={togglePlay}
                      size="icon"
                      variant="outline"
                      className="h-12 w-12 rounded-full"
                    >
                      {isPlaying ? <Pause /> : <Play />}
                    </Button>
                    <Button 
                      onClick={resetAudio} 
                      size="icon" 
                      variant="ghost"
                      className="h-10 w-10 rounded-full"
                    >
                      <RotateCcw size={18} />
                    </Button>
                  </div>
                </div>

                {/* Question */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    {listeningExercise.question}
                  </h3>

                  <RadioGroup
                    value={selectedAnswer}
                    onValueChange={setSelectedAnswer}
                    className="space-y-3"
                    disabled={isSubmitted}
                  >
                    {listeningExercise.options.map((option) => (
                      <div 
                        key={option.id}
                        className={`flex items-center space-x-2 p-3 rounded-md border ${
                          isSubmitted && option.id === listeningExercise.correctAnswer
                            ? "border-green-500 bg-green-50"
                            : isSubmitted && option.id === selectedAnswer
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200"
                        }`}
                      >
                        <RadioGroupItem
                          id={option.id}
                          value={option.id}
                          className="h-4 w-4 text-english-blue focus:ring-english-blue"
                        />
                        <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                          {option.text}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter>
                {!isSubmitted ? (
                  <Button onClick={handleSubmit} className="w-full">
                    Kiểm tra
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion} className="w-full">
                    Câu hỏi tiếp theo
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Hướng dẫn</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>1. Nghe đoạn hội thoại bằng cách nhấn nút play</p>
                <p>2. Bạn có thể nghe lại nhiều lần nếu cần</p>
                <p>3. Đọc câu hỏi và các lựa chọn</p>
                <p>4. Chọn đáp án đúng và nhấn Kiểm tra</p>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Mẹo nghe hiệu quả</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">• Tập trung vào từ khóa và thông tin chính</p>
                <p className="text-sm">• Chú ý đến giọng điệu và ngữ cảnh</p>
                <p className="text-sm">• Cố gắng hiểu ý chính trước khi quan tâm đến chi tiết</p>
                <p className="text-sm">• Luyện tập thường xuyên với nhiều loại ngữ liệu khác nhau</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listening;
