
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-english-dark">
              Học tiếng Anh hiệu quả <span className="text-english-blue">nghe, nói, đọc, viết</span>
            </h1>
            <p className="text-lg mb-4 text-gray-600">
              Duy English Lab giúp người Việt rèn luyện các kỹ năng tiếng Anh thông qua các bài tập thực hành
              và phương pháp học tập hiện đại, hiệu quả.
            </p>
            <p className="text-lg mb-8 text-gray-600">
              Giáo trình đặc biệt thiết kế cho học sinh tiểu học từ cơ bản đến nâng cao, giúp trẻ phát triển toàn diện các kỹ năng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/register">Bắt đầu học ngay</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/elementary-courses">Khóa học tiểu học</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Student learning English"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
