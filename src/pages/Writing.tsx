
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Writing = () => {
  const [userEssay, setUserEssay] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<{
    strengths: string[];
    improvements: string[];
  }>({
    strengths: [],
    improvements: []
  });

  const writingPrompt = {
    title: "Describe Your Hometown",
    instruction: "Write a short essay (150-200 words) describing your hometown. Include information about location, famous places, and what you like most about it.",
    example: `My hometown is Hanoi, the capital of Vietnam. It is located in the northern part of the country along the Red River. Hanoi is a city with over 1000 years of history, blending traditional and modern elements.

Hanoi has many famous places to visit. The Old Quarter has narrow streets with shops selling various goods. Hoan Kiem Lake is in the center of the city, with the iconic Turtle Tower in the middle. The Temple of Literature, Vietnam's first university built in 1070, shows the importance of education in Vietnamese culture.

What I like most about Hanoi is the food. The city is famous for dishes like pho (noodle soup), bun cha (grilled pork with rice noodles), and egg coffee. Street food stalls can be found everywhere, offering delicious and affordable meals.

The changing seasons in Hanoi make it special. We experience all four seasons, with spring and autumn being particularly beautiful. Despite the traffic and noise, Hanoi remains a charming city with friendly people and rich cultural heritage.`,
  };

  const handleSubmit = () => {
    if (userEssay.trim().length < 50) {
      toast.error("Bài viết quá ngắn. Vui lòng viết ít nhất 150-200 từ.");
      return;
    }

    setIsSubmitted(true);
    
    // In a real app, you would send this to a backend for analysis
    // For now, we'll provide some generic feedback
    setFeedback({
      strengths: [
        "Bạn đã mô tả được các điểm chính về quê hương của mình.",
        "Cấu trúc bài viết rõ ràng với phần mở đầu, thân bài và kết luận.",
        "Sử dụng một số từ vựng đa dạng để mô tả địa điểm."
      ],
      improvements: [
        "Cần sử dụng nhiều từ nối để liên kết các ý trong bài viết.",
        "Có thể bổ sung thêm chi tiết cụ thể về văn hóa địa phương.",
        "Chú ý kiểm tra lỗi ngữ pháp cơ bản như thì của động từ."
      ]
    });

    toast.success("Bài viết đã được nộp thành công!");
  };

  const resetExercise = () => {
    setUserEssay("");
    setIsSubmitted(false);
    setFeedback({
      strengths: [],
      improvements: []
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading font-bold mb-8">Luyện kỹ năng viết tiếng Anh</h1>

        <Tabs defaultValue="practice">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="practice">Bài tập viết luận</TabsTrigger>
            <TabsTrigger value="example">Bài mẫu</TabsTrigger>
            <TabsTrigger value="tips">Mẹo viết hay</TabsTrigger>
          </TabsList>

          <TabsContent value="practice">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{writingPrompt.title}</CardTitle>
                    <CardDescription>{writingPrompt.instruction}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Write your essay here..."
                      className="min-h-[300px]"
                      value={userEssay}
                      onChange={(e) => setUserEssay(e.target.value)}
                      disabled={isSubmitted}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>Mục tiêu: 150-200 từ</span>
                      <span>{userEssay.trim().split(/\s+/).length} từ</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    {!isSubmitted ? (
                      <Button onClick={handleSubmit} className="w-full">
                        Nộp bài
                      </Button>
                    ) : (
                      <Button onClick={resetExercise} variant="outline" className="w-full">
                        Viết bài mới
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>

              <div>
                {!isSubmitted ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Hướng dẫn viết luận</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Cấu trúc bài luận</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Mở đầu: Giới thiệu chủ đề chính</li>
                          <li>Thân bài: Phát triển ý chính với ví dụ cụ thể</li>
                          <li>Kết luận: Tóm tắt ý chính và kết thúc bài viết</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Từ nối hữu ích</h3>
                        <p className="text-sm"><span className="font-medium">Thứ tự:</span> First, Second, Finally, Moreover</p>
                        <p className="text-sm"><span className="font-medium">Đối lập:</span> However, Although, Despite, Nevertheless</p>
                        <p className="text-sm"><span className="font-medium">Kết quả:</span> Therefore, As a result, Consequently</p>
                        <p className="text-sm"><span className="font-medium">Ví dụ:</span> For example, For instance, Such as</p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle>Phản hồi bài viết</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <Alert className="bg-green-50 border-green-200">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <AlertTitle className="text-green-800">Điểm mạnh</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {feedback.strengths.map((strength, i) => (
                              <li key={i}>{strength}</li>
                            ))}
                          </ul>
                        </AlertDescription>
                      </Alert>
                      
                      <Alert className="bg-amber-50 border-amber-200">
                        <AlertCircle className="h-5 w-5 text-amber-500" />
                        <AlertTitle className="text-amber-800">Điểm cần cải thiện</AlertTitle>
                        <AlertDescription>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {feedback.improvements.map((improvement, i) => (
                              <li key={i}>{improvement}</li>
                            ))}
                          </ul>
                        </AlertDescription>
                      </Alert>
                      
                      <div className="text-sm text-gray-600">
                        <p>Tiếp tục luyện tập thường xuyên để cải thiện kỹ năng viết của bạn!</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="example">
            <Card>
              <CardHeader>
                <CardTitle>Bài mẫu: {writingPrompt.title}</CardTitle>
                <CardDescription>Tham khảo bài mẫu để học cách viết hiệu quả</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="whitespace-pre-line leading-relaxed">{writingPrompt.example}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Mẹo viết bài luận tiếng Anh</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Lập dàn ý trước khi viết</h3>
                    <p>Dành 5-10 phút để lên dàn ý với ý chính và các ý hỗ trợ cho từng đoạn văn.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Sử dụng từ vựng đa dạng</h3>
                    <p>Tránh lặp lại các từ giống nhau. Sử dụng từ đồng nghĩa để làm phong phú bài viết.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Viết câu đa dạng</h3>
                    <p>Kết hợp các câu ngắn và dài, câu đơn và câu phức để tạo nhịp điệu cho bài viết.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Nối ý mạch lạc</h3>
                    <p>Sử dụng từ nối để liên kết các ý và đoạn văn với nhau một cách hợp lý.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cấu trúc bài luận hiệu quả</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phần mở đầu</h3>
                    <p>- Giới thiệu chủ đề một cách hấp dẫn</p>
                    <p>- Nêu rõ luận điểm chính hoặc phạm vi của bài viết</p>
                    <p>- Có thể sử dụng câu hỏi, trích dẫn, số liệu để thu hút người đọc</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phần thân bài</h3>
                    <p>- Mỗi đoạn văn tập trung vào một ý chính</p>
                    <p>- Bắt đầu đoạn bằng câu chủ đề (topic sentence)</p>
                    <p>- Giải thích và đưa ra ví dụ, dẫn chứng cụ thể</p>
                    <p>- Sử dụng từ nối thích hợp giữa các đoạn</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phần kết luận</h3>
                    <p>- Tóm tắt các điểm chính đã trình bày</p>
                    <p>- Nhấn mạnh lại luận điểm chính</p>
                    <p>- Kết thúc bằng một ý tưởng đáng nhớ hoặc đề xuất</p>
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

export default Writing;
