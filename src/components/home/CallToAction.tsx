
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 bg-english-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Sẵn sàng nâng cao kỹ năng tiếng Anh của bạn?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Đăng ký ngay hôm nay để bắt đầu hành trình học tiếng Anh hiệu quả với BabiElite English Lab.
          Chúng tôi cung cấp nhiều khóa học phù hợp với mọi trình độ.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/register">Đăng ký miễn phí</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-english-blue" asChild>
            <Link to="/courses">Khám phá khóa học</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
