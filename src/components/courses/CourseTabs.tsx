
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Course } from "@/types/course";
import CourseGrid from "./CourseGrid";

interface CourseTabsProps {
  grade1to2Courses: Course[];
  grade3to4Courses: Course[];
  grade5Courses: Course[];
}

const CourseTabs = ({ grade1to2Courses, grade3to4Courses, grade5Courses }: CourseTabsProps) => {
  return (
    <Tabs defaultValue="grade1-2" className="mb-12">
      <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-6">
        <TabsTrigger value="grade1-2">Lớp 1-2</TabsTrigger>
        <TabsTrigger value="grade3-4">Lớp 3-4</TabsTrigger>
        <TabsTrigger value="grade5">Lớp 5</TabsTrigger>
      </TabsList>
      
      <TabsContent value="grade1-2">
        <CourseGrid courses={grade1to2Courses} />
      </TabsContent>
      
      <TabsContent value="grade3-4">
        <CourseGrid courses={grade3to4Courses} />
      </TabsContent>
      
      <TabsContent value="grade5">
        <CourseGrid courses={grade5Courses} />
      </TabsContent>
    </Tabs>
  );
};

export default CourseTabs;
