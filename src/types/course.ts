
export interface CourseSkill {
  id: string;
  name: "Nghe" | "Nói" | "Đọc" | "Viết";
  icon: "headphones" | "mic" | "book" | "pen";
}

export interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  lessons: number;
  image: string;
  skills: CourseSkill[];
  progress: number;
  topics?: string[];
  learningGoals?: string[];
  requirements?: string[];
}
