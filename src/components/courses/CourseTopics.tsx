
import { Badge } from "@/components/ui/badge";

interface CourseTopicsProps {
  topics: string[];
}

const CourseTopics = ({ topics }: CourseTopicsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic, index) => (
        <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
          {topic}
        </Badge>
      ))}
    </div>
  );
};

export default CourseTopics;
