
import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, Square, Play, Repeat } from "lucide-react";
import { toast } from "sonner";

const Speaking = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  const speakingExercise = {
    title: "Pronunciation Practice",
    instruction: "Đọc to đoạn văn sau và ghi âm. Sau đó, nghe lại và so sánh với phát âm mẫu.",
    text: "The weather is beautiful today. I think I will go for a walk in the park. Maybe I'll bring a book and read under a tree.",
    model_audio: "https://thepracticaldev.s3.amazonaws.com/i/0jujff6r8i5dw2g1gyt2.mp3", // Sample audio URL
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      toast.info("Đang ghi âm...", { duration: 2000 });
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast.error("Không thể truy cập microphone. Vui lòng cho phép quyền truy cập.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      toast.success("Đã ghi âm xong!");
    }
  };

  const playRecording = () => {
    if (recordedAudio && audioPlayerRef.current) {
      if (isPlaying) {
        audioPlayerRef.current.pause();
      } else {
        audioPlayerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playModelAudio = () => {
    const audio = new Audio(speakingExercise.model_audio);
    audio.play();
  };

  const resetRecording = () => {
    setRecordedAudio(null);
    setIsPlaying(false);
    audioChunksRef.current = [];
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading font-bold mb-8">Luyện kỹ năng nói tiếng Anh</h1>

        <Tabs defaultValue="practice">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="practice">Luyện tập phát âm</TabsTrigger>
            <TabsTrigger value="conversation">Hội thoại mẫu</TabsTrigger>
          </TabsList>

          <TabsContent value="practice">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{speakingExercise.title}</CardTitle>
                    <CardDescription>{speakingExercise.instruction}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Text to pronounce */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <p className="text-lg leading-relaxed">{speakingExercise.text}</p>
                    </div>

                    {/* Model Audio */}
                    <div>
                      <h3 className="text-md font-medium mb-2">Nghe mẫu:</h3>
                      <Button 
                        onClick={playModelAudio} 
                        variant="outline" 
                        className="flex items-center gap-2"
                      >
                        <Play size={16} /> Phát âm mẫu
                      </Button>
                    </div>

                    {/* Recording Controls */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <h3 className="text-md font-medium mb-4">Ghi âm của bạn:</h3>
                      
                      <div className="flex flex-col items-center gap-4">
                        {isRecording ? (
                          <Button 
                            onClick={stopRecording} 
                            variant="destructive"
                            size="lg"
                            className="rounded-full h-16 w-16"
                          >
                            <Square size={24} />
                          </Button>
                        ) : (
                          <Button 
                            onClick={startRecording} 
                            variant="default"
                            size="lg"
                            className="rounded-full h-16 w-16 bg-english-red hover:bg-red-600"
                          >
                            <Mic size={24} />
                          </Button>
                        )}
                        <p className="text-sm text-gray-500">
                          {isRecording ? "Nhấn để dừng ghi âm" : "Nhấn để bắt đầu ghi âm"}
                        </p>
                      </div>

                      {recordedAudio && (
                        <div className="mt-6">
                          <h3 className="text-md font-medium mb-2">Nghe lại:</h3>
                          <audio ref={audioPlayerRef} src={recordedAudio} onEnded={() => setIsPlaying(false)} />
                          <div className="flex items-center justify-center gap-4">
                            <Button 
                              onClick={playRecording}
                              variant="outline"
                            >
                              {isPlaying ? "Dừng" : "Phát"}
                            </Button>
                            <Button 
                              onClick={resetRecording} 
                              variant="ghost"
                            >
                              <Repeat size={16} />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      onClick={() => toast.info("Đã lưu bài tập này lại để xem sau!")} 
                      className="w-full"
                    >
                      Lưu bài tập này
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Hướng dẫn luyện phát âm</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>1. Đọc kỹ đoạn văn trước khi phát âm</p>
                    <p>2. Nghe mẫu để nắm bắt cách phát âm chuẩn</p>
                    <p>3. Ghi âm giọng nói của bạn</p>
                    <p>4. Nghe lại và so sánh với mẫu</p>
                    <p>5. Lặp lại quá trình cho đến khi hài lòng</p>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Mẹo phát âm chuẩn</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">• Tập trung vào âm tiết được nhấn mạnh</p>
                    <p className="text-sm">• Chú ý đến ngữ điệu và trọng âm câu</p>
                    <p className="text-sm">• Thực hành phân biệt các cặp âm dễ nhầm lẫn</p>
                    <p className="text-sm">• Ghi âm và nghe lại giọng nói của bạn thường xuyên</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="conversation">
            <div className="text-center py-10">
              <h3 className="text-xl mb-4">Phần hội thoại mẫu sẽ sớm được cập nhật</h3>
              <p className="text-gray-600">Chúng tôi đang phát triển các bài tập hội thoại mẫu theo các chủ đề khác nhau.</p>
              <p className="text-gray-600 mt-2">Vui lòng quay lại sau!</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Speaking;
