import { LoginForm } from "./login-form";

export const metadata = {
    title: "Đăng nhập | VLC CMS",
    description: "Hệ thống quản trị nội dung VLC",
};

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            {/* 
        Best Practice: 
        Trang (Page) mặc định luôn là Server Component để tối ưu SEO, không gửi JS thừa xuống client.
        Chúng ta sẽ bọc những phần có state form, sự kiện onClick vào một Client Component nhỏ là <LoginForm />.
      */}
            <div className="w-full max-w-sm md:max-w-4xl">
                <LoginForm />
            </div>
        </div>
    );
}
