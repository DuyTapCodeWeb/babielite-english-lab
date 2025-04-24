
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Book, Headphones, Mic, Edit, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const beginnerCourses = [
    {
      id: 1,
      title: "Tiếng Anh cơ bản cho người mới bắt đầu",
      description: "Khóa học dành cho người chưa có nền tảng tiếng Anh hoặc cần ôn lại từ đầu.",
      level: "Sơ cấp",
      duration: "12 tuần",
      lessons: 36,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói", "Đọc", "Viết"],
      progress: 0
    },
    {
      id: 2,
      title: "Phát âm tiếng Anh chuẩn",
      description: "Khóa học chuyên về phát âm, giúp bạn nói tiếng Anh rõ ràng và tự nhiên hơn.",
      level: "Sơ cấp",
      duration: "8 tuần",
      lessons: 24,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nói"],
      progress: 0
    },
    {
      id: 3,
      title: "Ngữ pháp tiếng Anh căn bản",
      description: "Nắm vững các cấu trúc ngữ pháp cơ bản để xây dựng nền tảng tiếng Anh vững chắc.",
      level: "Sơ cấp",
      duration: "10 tuần",
      lessons: 30,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Đọc", "Viết"],
      progress: 0
    },
  ];

  const intermediateCourses = [
    {
      id: 4,
      title: "Giao tiếp tiếng Anh trong cuộc sống hàng ngày",
      description: "Học cách giao tiếp tiếng Anh hiệu quả trong các tình huống thường gặp.",
      level: "Trung cấp",
      duration: "12 tuần",
      lessons: 36,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói"],
      progress: 0
    },
    {
      id: 5,
      title: "Tiếng Anh học thuật và viết luận",
      description: "Phát triển kỹ năng viết tiếng Anh học thuật và cách viết luận hiệu quả.",
      level: "Trung cấp",
      duration: "10 tuần",
      lessons: 30,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Đọc", "Viết"],
      progress: 0
    },
  ];

  const advancedCourses = [
    {
      id: 6,
      title: "Tiếng Anh thương mại và kinh doanh",
      description: "Khóa học chuyên sâu về tiếng Anh trong môi trường kinh doanh và công sở.",
      level: "Nâng cao",
      duration: "14 tuần",
      lessons: 42,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói", "Đọc", "Viết"],
      progress: 0
    },
    {
      id: 7,
      title: "Luyện thi IELTS",
      description: "Khóa học chuẩn bị cho kỳ thi IELTS với chiến lược làm bài và luyện tập chuyên sâu.",
      level: "Nâng cao",
      duration: "16 tuần",
      lessons: 48,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói", "Đọc", "Viết"],
      progress: 0
    },
  ];

  // Function to render the skill icon
  const getSkillIcon = (skill: string) => {
    switch(skill.toLowerCase()) {
      case "nghe":
        return <Headphones size={16} />;
      case "nói":
        return <Mic size={16} />;
      case "đọc":
        return <Book size={16} />;
      case "viết":
        return <Edit size={16} />;
      default:
        return null;
    }
  };

  // Function to get skill color
  const getSkillColor = (skill: string) => {
    switch(skill.toLowerCase()) {
      case "nghe":
        return "bg-blue-100 text-english-blue";
      case "nói":
        return "bg-red-100 text-english-red";
      case "đọc":
        return "bg-green-100 text-english-green";
      case "viết":
        return "bg-yellow-100 text-english-yellow";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Function to render course cards
  const renderCourseCards = (courses: typeof beginnerCourses) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover-scale">
            <div className="h-48 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <Badge variant="outline" className="bg-english-light">
                  {course.level}
                </Badge>
              </div>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-4">
                <span>{course.duration}</span>
                <span>{course.lessons} bài học</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {course.skills.map((skill) => (
                  <Badge key={skill} className={`flex items-center gap-1 ${getSkillColor(skill)}`}>
                    {getSkillIcon(skill)}
                    {skill}
                  </Badge>
                ))}
              </div>

              {course.progress > 0 && (
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tiến độ</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                {course.progress > 0 ? "Tiếp tục học" : "Bắt đầu học"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Giáo trình học tiếng Anh</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các khóa học tiếng Anh được thiết kế đặc biệt cho người Việt, 
            từ cấp độ sơ cấp đến nâng cao với trọng tâm vào các kỹ năng nghe, nói, đọc, viết.
          </p>
        </div>

        {/* Special course category section */}
        <div className="mb-10">
          <h2 className="text-2xl font-heading font-bold mb-6">Khóa học theo đối tượng</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-scale">
              <CardHeader>
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-english-blue mb-4">
                  <GraduationCap size={24} />
                </div>
                <CardTitle>Tiếng Anh Tiểu học</CardTitle>
                <CardDescription>
                  Khóa học tiếng Anh dành riêng cho học sinh tiểu học từ lớp 1 đến lớp 5, phù hợp với từng độ tuổi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                  <li>Phù hợp với chương trình tiểu học Việt Nam</li>
                  <li>Học qua trò chơi và hoạt động tương tác</li>
                  <li>Phát triển đồng đều 4 kỹ năng cơ bản</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link to="/elementary-courses">Xem khóa học tiểu học</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="inline-flex p-3 rounded-full bg-green-100 text-english-green mb-4">
                  <Book size={24} />
                </div>
                <CardTitle>Tiếng Anh Trung học</CardTitle>
                <CardDescription>
                  Khóa học tiếng Anh dành cho học sinh THCS và THPT, tập trung vào ngữ pháp và học thuật.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                  <li>Chuẩn bị cho các kỳ thi quan trọng</li>
                  <li>Rèn luyện kỹ năng viết và đọc hiểu nâng cao</li>
                  <li>Luyện thi chứng chỉ quốc tế</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Sắp ra mắt</Button>
              </CardFooter>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="inline-flex p-3 rounded-full bg-yellow-100 text-english-yellow mb-4">
                  <Mic size={24} />
                </div>
                <CardTitle>Tiếng Anh Người lớn</CardTitle>
                <CardDescription>
                  Khóa học tiếng Anh dành cho người đi làm, tập trung vào giao tiếp thực tế và tiếng Anh công sở.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                  <li>Tiếng Anh giao tiếp thực tế hàng ngày</li>
                  <li>Tiếng Anh thương mại và kinh doanh</li>
                  <li>Luyện phản xạ nói và nghe</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Sắp ra mắt</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="beginner" className="mb-12">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-6">
            <TabsTrigger value="beginner">Sơ cấp</TabsTrigger>
            <TabsTrigger value="intermediate">Trung cấp</TabsTrigger>
            <TabsTrigger value="advanced">Nâng cao</TabsTrigger>
          </TabsList>
          
          <TabsContent value="beginner">
            {renderCourseCards(beginnerCourses)}
          </TabsContent>
          
          <TabsContent value="intermediate">
            {renderCourseCards(intermediateCourses)}
          </TabsContent>
          
          <TabsContent value="advanced">
            {renderCourseCards(advancedCourses)}
          </TabsContent>
        </Tabs>

        <div className="bg-english-light p-8 rounded-lg text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Không chắc nên bắt đầu từ đâu?</h2>
          <p className="text-gray-600 mb-6">
            Hãy làm bài kiểm tra trình độ miễn phí để chúng tôi gợi ý khóa học phù hợp nhất với bạn.
          </p>
          <Button size="lg">Kiểm tra trình độ</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
