import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import CourseTabs from "@/components/courses/CourseTabs";
import type { Course } from "@/types/course";

const ElementaryCourses = () => {
  const grade1to2Courses: Course[] = [
    {
      id: 1,
      title: "Tiếng Anh lớp 1-2",
      description: "Khóa học dành cho học sinh lớp 1-2 bắt đầu làm quen với tiếng Anh.",
      level: "Cơ bản",
      duration: "36 tuần",
      lessons: 72,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      skills: [
        { id: "1", name: "Nghe", icon: "headphones" },
        { id: "2", name: "Nói", icon: "mic" }
      ],
      progress: 0,
      topics: [
        "Chào hỏi và giới thiệu",
        "Số đếm 1-20",
        "Màu sắc cơ bản",
        "Động vật quen thuộc",
        "Đồ dùng học tập",
        "Gia đình"
      ],
      learningGoals: [
        "Phát âm chuẩn bảng chữ cái",
        "Nghe và nói các từ đơn giản",
        "Hiểu và sử dụng câu đơn giản"
      ]
    },
    {
      id: 2,
      title: "Từ vựng chủ đề lớp 1-2",
      description: "Học từ vựng theo chủ đề phù hợp với chương trình tiểu học lớp 1-2.",
      level: "Cơ bản",
      duration: "24 tuần",
      lessons: 48,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      skills: [
        { id: "3", name: "Đọc", icon: "book" },
        { id: "4", name: "Viết", icon: "pen" }
      ],
      progress: 0,
      topics: [
        "Trường học",
        "Thú cưng",
        "Thức ăn và đồ uống",
        "Quần áo",
        "Các bộ phận cơ thể",
        "Thời tiết"
      ],
      learningGoals: [
        "Nhận biết và đọc 200+ từ vựng cơ bản",
        "Viết được các từ đơn giản",
        "Ghép từ thành câu ngắn"
      ]
    },
    {
      id: 3,
      title: "Phát âm và hội thoại đơn giản",
      description: "Luyện phát âm chuẩn và học các câu giao tiếp đơn giản cho trẻ.",
      level: "Cơ bản",
      duration: "20 tuần",
      lessons: 40,
      image: "https://images.unsplash.com/photo-1629227314568-59a4d2719151",
      skills: [
        { id: "5", name: "Nghe", icon: "headphones" },
        { id: "6", name: "Nói", icon: "mic" }
      ],
      progress: 0,
      topics: [
        "Phát âm cơ bản",
        "Câu giao tiếp đơn giản",
        "Hội thoại trong thực tế"
      ],
      learningGoals: [
        "Phát âm chuẩn các từ vựng cơ bản",
        "Nói được các câu đơn giản",
        "Học cách giao tiếp đơn giản"
      ]
    },
  ];

  const grade3to4Courses: Course[] = [
    {
      id: 4,
      title: "Tiếng Anh lớp 3-4",
      description: "Khóa học dành cho học sinh lớp 3-4, nâng cao kỹ năng ngôn ngữ.",
      level: "Sơ cấp",
      duration: "36 tuần",
      lessons: 72,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      skills: [
        { id: "7", name: "Nghe", icon: "headphones" },
        { id: "8", name: "Nói", icon: "mic" },
        { id: "9", name: "Đọc", icon: "book" },
        { id: "10", name: "Viết", icon: "pen" }
      ],
      progress: 0,
      topics: [
        "Tiếng Anh cơ bản",
        "Các chủ đề phổ biến",
        "Câu giao tiếp nâng cao"
      ],
      learningGoals: [
        "Phát âm chuẩn các từ vựng cơ bản",
        "Nói được các câu đơn giản",
        "Học cách giao tiếp đơn giản"
      ]
    },
    {
      id: 5,
      title: "Ngữ pháp cơ bản lớp 3-4",
      description: "Học ngữ pháp tiếng Anh cơ bản phù hợp với chương trình tiểu học.",
      level: "Sơ cấp",
      duration: "28 tuần",
      lessons: 56,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      skills: [
        { id: "11", name: "Đọc", icon: "book" },
        { id: "12", name: "Viết", icon: "pen" }
      ],
      progress: 0,
      topics: [
        "Ngữ pháp cơ bản",
        "Các chủ đề phổ biến",
        "Câu giao tiếp nâng cao"
      ],
      learningGoals: [
        "Phát âm chuẩn các từ vựng cơ bản",
        "Nói được các câu đơn giản",
        "Học cách giao tiếp đơn giản"
      ]
    },
    {
      id: 6,
      title: "Kỹ năng giao tiếp lớp 3-4",
      description: "Phát triển khả năng giao tiếp tiếng Anh qua các tình huống thực tế.",
      level: "Sơ cấp",
      duration: "24 tuần",
      lessons: 48,
      image: "https://images.unsplash.com/photo-1629227314568-59a4d2719151",
      skills: [
        { id: "13", name: "Nghe", icon: "headphones" },
        { id: "14", name: "Nói", icon: "mic" }
      ],
      progress: 0,
      topics: [
        "Phát âm cơ bản",
        "Các chủ đề phổ biến",
        "Câu giao tiếp nâng cao"
      ],
      learningGoals: [
        "Phát âm chuẩn các từ vựng cơ bản",
        "Nói được các câu đơn giản",
        "Học cách giao tiếp đơn giản"
      ]
    },
  ];

  const grade5Courses: Course[] = [
    {
      id: 7,
      title: "Tiếng Anh lớp 5",
      description: "Khóa học đầy đủ cho học sinh lớp 5, chuẩn bị cho chương trình THCS.",
      level: "Trung cấp",
      duration: "36 tuần",
      lessons: 72,
      image: "https://images.unsplash.com/photo-1629227314568-59a4d2719151",
      skills: [
        { id: "15", name: "Nghe", icon: "headphones" },
        { id: "16", name: "Nói", icon: "mic" },
        { id: "17", name: "Đọc", icon: "book" },
        { id: "18", name: "Viết", icon: "pen" }
      ],
      progress: 0,
      topics: [
        "Tiếng Anh cơ bản",
        "Các chủ đề phổ biến",
        "Câu giao tiếp nâng cao"
      ],
      learningGoals: [
        "Phát âm chuẩn các từ vựng cơ bản",
        "Nói được các câu đơn giản",
        "Học cách giao tiếp đơn giản"
      ]
    },
    {
      id: 8,
      title: "Ngữ pháp nâng cao lớp 5",
      description: "Học ngữ pháp tiếng Anh nâng cao chuẩn bị cho chuyển cấp.",
      level: "Trung cấp",
      duration: "32 tuần",
      lessons: 64,
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3",
      skills: [
        { id: "19", name: "Đọc", icon: "book" },
        { id: "20", name: "Viết", icon: "pen" }
      ],
      progress: 0,
      topics: [
        "Tiếng Anh cơ bản",
        "Các chủ đề phổ biến",
        "Câu giao tiếp nâng cao"
      ],
      learningGoals: [
        "Phát âm chuẩn các từ vựng cơ bản",
        "Nói được các câu đơn giản",
        "Học cách giao tiếp đơn giản"
      ]
    },
    {
      id: 9,
      title: "Luyện thi chứng chỉ Cambridge YLE",
      description: "Chuẩn bị cho kỳ thi Cambridge Young Learners English (Starters, Movers).",
      level: "Nâng cao",
      duration: "28 tuần",
      lessons: 56,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      skills: [
        { id: "21", name: "Nghe", icon: "headphones" },
        { id: "22", name: "Nói", icon: "mic" },
        { id: "23", name: "Đọc", icon: "book" },
        { id: "24", name: "Viết", icon: "pen" }
      ],
      progress: 0,
      topics: [
        "Tiếng Anh cơ bản",
        "Các chủ đề phổ biến",
        "Câu giao tiếp nâng cao"
      ],
      learningGoals: [
        "Phát âm chuẩn các từ vựng cơ bản",
        "Nói được các câu đơn giản",
        "Học cách giao tiếp đơn giản"
      ]
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Giáo trình tiếng Anh tiểu học
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các khóa học tiếng Anh được thiết kế đặc biệt cho học sinh tiểu học, 
            từ lớp 1 đến lớp 5 với nội dung phù hợp từng độ tuổi và trình độ.
          </p>
        </div>

        <CourseTabs 
          grade1to2Courses={grade1to2Courses}
          grade3to4Courses={grade3to4Courses}
          grade5Courses={grade5Courses}
        />

        <div className="bg-english-light p-8 rounded-lg text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Không chắc con bạn nên bắt đầu từ đâu?
          </h2>
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
