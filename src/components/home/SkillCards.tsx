
import { Headphones, Mic, Book, Edit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SkillCards = () => {
  const skills = [
    {
      icon: Headphones,
      title: "Listening",
      description: "Luyện nghe và hiểu tiếng Anh với các bài tập theo nhiều cấp độ.",
      color: "text-english-blue",
      bgColor: "bg-blue-100",
      path: "/listening",
    },
    {
      icon: Mic,
      title: "Speaking",
      description: "Rèn luyện phát âm và khả năng giao tiếp tiếng Anh tự tin.",
      color: "text-english-red",
      bgColor: "bg-red-100",
      path: "/speaking",
    },
    {
      icon: Book,
      title: "Reading",
      description: "Nâng cao kỹ năng đọc hiểu với các bài đọc đa dạng chủ đề.",
      color: "text-english-green",
      bgColor: "bg-green-100",
      path: "/reading",
    },
    {
      icon: Edit,
      title: "Writing",
      description: "Phát triển kỹ năng viết tiếng Anh với các mẫu câu và bài tập thực hành.",
      color: "text-english-yellow",
      bgColor: "bg-yellow-100",
      path: "/writing",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Phát triển toàn diện các kỹ năng tiếng Anh
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <Link to={skill.path} key={skill.title} className="hover-scale">
              <Card className="h-full border-t-4" style={{ borderTopColor: skill.color.replace('text-', '') }}>
                <CardHeader>
                  <div className={`inline-flex p-3 rounded-full ${skill.bgColor} ${skill.color} mb-4`}>
                    <skill.icon size={24} />
                  </div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{skill.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillCards;
