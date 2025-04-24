
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

const Reading = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const readingPassage = {
    title: "A Day at the Zoo",
    content: `Last weekend, I visited the city zoo with my family. We arrived early in the morning to avoid the crowds. The weather was perfect - sunny but not too hot.

First, we went to see the elephants. They were eating breakfast when we arrived. The baby elephant was playing with water from a small pond. It was very cute!

Next, we visited the monkey area. The monkeys were very active and funny. They were jumping from tree to tree and making loud noises. Some were grooming each other while others were looking for food.

After that, we took a break for lunch. We had packed sandwiches and fruit. We sat near the bird enclosure and watched colorful parrots while eating our food.

In the afternoon, we saw lions, tigers, and bears. The lions were sleeping in the sun, but the tigers were pacing around their enclosure. The bears were swimming in their pool to stay cool.

Before leaving, we visited the gift shop and bought some souvenirs. I got a small stuffed penguin to remember our fun day. We left the zoo at 4:00 PM, feeling tired but happy.`,
    
    questions: [
      {
        id: "q1",
        text: "When did the author visit the zoo?",
        options: [
          { id: "a", text: "During the week" },
          { id: "b", text: "Last weekend" },
          { id: "c", text: "Last month" },
          { id: "d", text: "During a holiday" }
        ],
        correctAnswer: "b"
      },
      {
        id: "q2",
        text: "What was the baby elephant doing?",
        options: [
          { id: "a", text: "Sleeping" },
          { id: "b", text: "Eating breakfast" },
          { id: "c", text: "Playing with water" },
          { id: "d", text: "Following its mother" }
        ],
        correctAnswer: "c"
      },
      {
        id: "q3",
        text: "What were the lions doing when the author saw them?",
        options: [
          { id: "a", text: "Eating meat" },
          { id: "b", text: "Running around" },
          { id: "c", text: "Making loud noises" },
          { id: "d", text: "Sleeping in the sun" }
        ],
        correctAnswer: "d"
      },
      {
        id: "q4",
        text: "What did the author buy from the gift shop?",
        options: [
          { id: "a", text: "A stuffed penguin" },
          { id: "b", text: "A toy elephant" },
          { id: "c", text: "A book about animals" },
          { id: "d", text: "A tiger poster" }
        ],
        correctAnswer: "a"
      }
    ]
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length < readingPassage.questions.length) {
      toast.error("Vui lòng trả lời tất cả các câu hỏi");
      return;
    }

    setIsSubmitted(true);
    
    // Calculate score
    let correctCount = 0;
    readingPassage.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });

    toast.success(`Điểm của bạn: ${correctCount}/${readingPassage.questions.length}`);
  };

  const resetExercise = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading font-bold mb-8">Luyện kỹ năng đọc tiếng Anh</h1>

        <Tabs defaultValue="exercise">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="exercise">Bài tập đọc hiểu</TabsTrigger>
            <TabsTrigger value="tips">Mẹo đọc hiệu quả</TabsTrigger>
          </TabsList>

          <TabsContent value="exercise">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{readingPassage.title}</CardTitle>
                    <CardDescription>Đọc đoạn văn và trả lời các câu hỏi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <p className="whitespace-pre-line text-lg leading-relaxed">{readingPassage.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Câu hỏi</CardTitle>
                    <CardDescription>Chọn câu trả lời đúng nhất</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {readingPassage.questions.map((question, index) => (
                      <div key={question.id} className="space-y-3">
                        <h3 className="font-medium">
                          {index + 1}. {question.text}
                        </h3>
                        <RadioGroup
                          value={selectedAnswers[question.id] || ""}
                          onValueChange={(value) => handleAnswerChange(question.id, value)}
                          disabled={isSubmitted}
                        >
                          {question.options.map(option => (
                            <div 
                              key={option.id}
                              className={`flex items-center space-x-2 p-2 rounded ${
                                isSubmitted && option.id === question.correctAnswer
                                  ? "bg-green-50"
                                  : isSubmitted && selectedAnswers[question.id] === option.id && option.id !== question.correctAnswer
                                  ? "bg-red-50"
                                  : ""
                              }`}
                            >
                              <RadioGroupItem 
                                value={option.id} 
                                id={`${question.id}-${option.id}`} 
                              />
                              <Label htmlFor={`${question.id}-${option.id}`} className="flex-1 cursor-pointer">
                                {option.text}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        {index < readingPassage.questions.length - 1 && <Separator className="my-3" />}
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter>
                    {!isSubmitted ? (
                      <Button onClick={handleSubmit} className="w-full">
                        Nộp bài
                      </Button>
                    ) : (
                      <Button onClick={resetExercise} variant="outline" className="w-full">
                        Làm lại
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Mẹo đọc hiểu hiệu quả</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Đọc lướt (Skimming)</h3>
                    <p>Đọc nhanh để nắm ý chính của bài đọc. Tập trung vào tiêu đề, câu đầu tiên của mỗi đoạn, và đoạn kết luận.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Đọc quét (Scanning)</h3>
                    <p>Tìm kiếm thông tin cụ thể như ngày tháng, tên riêng, số liệu, từ khóa trong bài đọc.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Đọc câu hỏi trước</h3>
                    <p>Đọc trước câu hỏi để biết bạn cần tìm thông tin gì khi đọc bài.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Đọc kỹ (Intensive reading)</h3>
                    <p>Đọc chậm và cẩn thận để hiểu chi tiết và ý nghĩa sâu của văn bản.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Chiến lược làm bài đọc hiểu</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Xác định loại câu hỏi</h3>
                    <p>Hiểu rõ từng loại câu hỏi: ý chính, chi tiết, suy luận, nghĩa từ vựng, thái độ tác giả...</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Nhận diện từ khóa</h3>
                    <p>Tìm từ khóa trong câu hỏi và tìm kiếm thông tin liên quan trong bài đọc.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Loại trừ đáp án sai</h3>
                    <p>Khi không chắc chắn, hãy loại trừ các phương án rõ ràng là sai trước.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Quản lý thời gian</h3>
                    <p>Phân bổ thời gian hợp lý cho từng phần của bài đọc và các câu hỏi.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Reading;
