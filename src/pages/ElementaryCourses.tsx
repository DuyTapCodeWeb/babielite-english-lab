
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Book, Headphones, Mic, Edit } from "lucide-react";

const ElementaryCourses = () => {
  const grade1to2Courses = [
    {
      id: 1,
      title: "Tiếng Anh lớp 1-2",
      description: "Khóa học dành cho học sinh lớp 1-2 bắt đầu làm quen với tiếng Anh.",
      level: "Cơ bản",
      duration: "36 tuần",
      lessons: 72,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói"],
      progress: 0
    },
    {
      id: 2,
      title: "Từ vựng chủ đề lớp 1-2",
      description: "Học từ vựng theo chủ đề phù hợp với chương trình tiểu học lớp 1-2.",
      level: "Cơ bản",
      duration: "24 tuần",
      lessons: 48,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Đọc", "Viết"],
      progress: 0
    },
    {
      id: 3,
      title: "Phát âm và hội thoại đơn giản",
      description: "Luyện phát âm chuẩn và học các câu giao tiếp đơn giản cho trẻ.",
      level: "Cơ bản",
      duration: "20 tuần",
      lessons: 40,
      image: "https://images.unsplash.com/photo-1629227314568-59a4d2719151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói"],
      progress: 0
    },
  ];

  const grade3to4Courses = [
    {
      id: 4,
      title: "Tiếng Anh lớp 3-4",
      description: "Khóa học dành cho học sinh lớp 3-4, nâng cao kỹ năng ngôn ngữ.",
      level: "Sơ cấp",
      duration: "36 tuần",
      lessons: 72,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói", "Đọc", "Viết"],
      progress: 0
    },
    {
      id: 5,
      title: "Ngữ pháp cơ bản lớp 3-4",
      description: "Học ngữ pháp tiếng Anh cơ bản phù hợp với chương trình tiểu học.",
      level: "Sơ cấp",
      duration: "28 tuần",
      lessons: 56,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Đọc", "Viết"],
      progress: 0
    },
    {
      id: 6,
      title: "Kỹ năng giao tiếp lớp 3-4",
      description: "Phát triển khả năng giao tiếp tiếng Anh qua các tình huống thực tế.",
      level: "Sơ cấp",
      duration: "24 tuần",
      lessons: 48,
      image: "https://images.unsplash.com/photo-1629227314568-59a4d2719151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói"],
      progress: 0
    },
  ];

  const grade5Courses = [
    {
      id: 7,
      title: "Tiếng Anh lớp 5",
      description: "Khóa học đầy đủ cho học sinh lớp 5, chuẩn bị cho chương trình THCS.",
      level: "Trung cấp",
      duration: "36 tuần",
      lessons: 72,
      image: "https://images.unsplash.com/photo-1629227314568-59a4d2719151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Nghe", "Nói", "Đọc", "Viết"],
      progress: 0
    },
    {
      id: 8,
      title: "Ngữ pháp nâng cao lớp 5",
      description: "Học ngữ pháp tiếng Anh nâng cao chuẩn bị cho chuyển cấp.",
      level: "Trung cấp",
      duration: "32 tuần",
      lessons: 64,
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      skills: ["Đọc", "Viết"],
      progress: 0
    },
    {
      id: 9,
      title: "Luyện thi chứng chỉ Cambridge YLE",
      description: "Chuẩn bị cho kỳ thi Cambridge Young Learners English (Starters, Movers).",
      level: "Nâng cao",
      duration: "28 tuần",
      lessons: 56,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
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
  const renderCourseCards = (courses: typeof grade1to2Courses) => {
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
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Giáo trình tiếng Anh tiểu học</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các khóa học tiếng Anh được thiết kế đặc biệt cho học sinh tiểu học, 
            từ lớp 1 đến lớp 5 với nội dung phù hợp từng độ tuổi và trình độ.
          </p>
        </div>

        <Tabs defaultValue="grade1-2" className="mb-12">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-6">
            <TabsTrigger value="grade1-2">Lớp 1-2</TabsTrigger>
            <TabsTrigger value="grade3-4">Lớp 3-4</TabsTrigger>
            <TabsTrigger value="grade5">Lớp 5</TabsTrigger>
          </TabsList>
          
          <TabsContent value="grade1-2">
            {renderCourseCards(grade1to2Courses)}
          </TabsContent>
          
          <TabsContent value="grade3-4">
            {renderCourseCards(grade3to4Courses)}
          </TabsContent>
          
          <TabsContent value="grade5">
            {renderCourseCards(grade5Courses)}
          </TabsContent>
        </Tabs>

        <div className="bg-english-light p-8 rounded-lg text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Không chắc con bạn nên bắt đầu từ đâu?</h2>
          <p className="text-gray-600 mb-6">
            Hãy cho con bạn làm bài kiểm tra trình độ miễn phí để chúng tôi gợi ý khóa học phù hợp nhất.
          </p>
          <Button size="lg">Kiểm tra trình độ</Button>
        </div>
      </div>
    </Layout>
  );
};

export default ElementaryCourses;
