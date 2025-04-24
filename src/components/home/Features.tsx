
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    "Phương pháp học theo chủ đề giúp tiếp thu từ vựng hiệu quả",
    "Luyện nghe với giọng đọc chuẩn từ người bản xứ",
    "Rèn luyện phát âm với công nghệ nhận diện giọng nói",
    "Bài tập đọc hiểu đa dạng từ cơ bản đến nâng cao",
    "Hướng dẫn viết theo cấu trúc và mẫu câu thông dụng",
    "Học mọi lúc, mọi nơi trên mọi thiết bị",
  ];

  return (
    <section className="py-16 bg-english-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Tại sao chọn <span className="text-english-blue">BabiElite English Lab</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              Chúng tôi cung cấp phương pháp học tiếng Anh toàn diện, giúp người học rèn luyện đồng đều cả 4 kỹ năng nghe, nói, đọc, viết với các bài tập thực hành được thiết kế phù hợp với người Việt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="text-english-green mt-1 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Learning features"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
