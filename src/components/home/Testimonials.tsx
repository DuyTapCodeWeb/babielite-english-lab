
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      avatar: "NVA",
      role: "Học viên",
      content:
        "Tôi đã cải thiện đáng kể kỹ năng nghe và nói sau 3 tháng học tập tại BabiElite. Các bài tập thực hành rất sát với tình huống thực tế.",
    },
    {
      name: "Trần Thị B",
      avatar: "TTB",
      role: "Sinh viên đại học",
      content:
        "Phương pháp học tại đây giúp tôi tự tin hơn khi giao tiếp tiếng Anh. Đặc biệt là các bài luyện phát âm rất hiệu quả.",
    },
    {
      name: "Lê Văn C",
      avatar: "LVC",
      role: "Nhân viên văn phòng",
      content:
        "Tôi đã đạt được chứng chỉ IELTS 7.0 sau khóa học tại BabiElite. Giáo trình được thiết kế rất khoa học và dễ tiếp thu.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-4">
          Học viên nói gì về chúng tôi
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Hàng ngàn học viên đã cải thiện khả năng tiếng Anh của họ thông qua các khóa học và phương pháp của BabiElite English Lab.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-english-blue text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
