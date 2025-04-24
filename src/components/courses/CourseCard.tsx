
import { Book, Headphones, Mic, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Course, CourseSkill } from "@/types/course";
import CourseTopics from "./CourseTopics";

interface CourseCardProps {
  course: Course;
}

const getSkillIcon = (iconName: CourseSkill["icon"]) => {
  switch (iconName) {
    case "headphones":
      return <Headphones size={16} />;
    case "mic":
      return <Mic size={16} />;
    case "book":
      return <Book size={16} />;
    case "pen":
      return <Pen size={16} />;
  }
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>{course.duration}</span>
          <span>{course.lessons} bài học</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill) => (
            <Badge key={skill.id} className="flex items-center gap-1">
              {getSkillIcon(skill.icon)}
              {skill.name}
            </Badge>
          ))}
        </div>

        {course.topics && <CourseTopics topics={course.topics} />}

        {course.progress > 0 && (
          <div>
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
  );
};

export default CourseCard;
