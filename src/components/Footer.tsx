
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-english-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Duy English Lab</h3>
            <p className="text-gray-300 mb-4">
              Nơi học tiếng Anh hiệu quả cho người Việt, tập trung vào kỹ năng nghe, nói, đọc, viết.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Kỹ năng</h4>
            <ul className="space-y-2">
              <li><Link to="/listening" className="text-gray-300 hover:text-white transition-colors">Listening</Link></li>
              <li><Link to="/speaking" className="text-gray-300 hover:text-white transition-colors">Speaking</Link></li>
              <li><Link to="/reading" className="text-gray-300 hover:text-white transition-colors">Reading</Link></li>
              <li><Link to="/writing" className="text-gray-300 hover:text-white transition-colors">Writing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Giáo trình</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Liên hệ</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Đăng ký nhận tin</h4>
            <p className="text-gray-300 mb-4">Đăng ký để nhận thông tin mới nhất về khoá học và tài liệu học tập.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="p-2 rounded-l text-gray-800 w-full"
                required
              />
              <button
                type="submit"
                className="bg-english-blue hover:bg-english-darkBlue text-white p-2 rounded-r transition-colors"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Duy English Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
