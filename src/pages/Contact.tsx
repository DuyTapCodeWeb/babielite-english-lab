
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    toast.success("Tin nhắn của bạn đã được gửi! Chúng tôi sẽ liên hệ lại sớm.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading font-bold mb-8 text-center">Liên hệ với chúng tôi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Gửi tin nhắn cho chúng tôi</CardTitle>
              <CardDescription>
                Điền thông tin của bạn và nội dung cần hỗ trợ, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Họ và tên</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Nguyễn Văn A" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="example@gmail.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Tiêu đề</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Vấn đề cần hỗ trợ" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Nội dung</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Mô tả chi tiết vấn đề của bạn..." 
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">Gửi tin nhắn</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Thông tin liên hệ</CardTitle>
              <CardDescription>
                Bạn có thể liên hệ với chúng tôi qua các phương thức sau:
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Địa chỉ</h3>
                <p className="text-gray-600">Số 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">contact@duyenglishlab.vn</p>
                <p className="text-gray-600">support@duyenglishlab.vn</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Điện thoại</h3>
                <p className="text-gray-600">(+84) 123 456 789</p>
                <p className="text-gray-600">(+84) 987 654 321</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Giờ làm việc</h3>
                <p className="text-gray-600">Thứ Hai - Thứ Sáu: 8:00 - 17:30</p>
                <p className="text-gray-600">Thứ Bảy: 8:00 - 12:00</p>
                <p className="text-gray-600">Chủ Nhật: Đóng cửa</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
