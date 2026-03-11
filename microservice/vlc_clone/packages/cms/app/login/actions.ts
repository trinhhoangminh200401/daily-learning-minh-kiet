"use server";

import { prisma } from "@/lib/prisma"; // Giả sử path alias @/ đã config
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// FormState interface cho useActionState
export type LoginFormState = {
    error?: string;
    success?: boolean;
};

export async function loginAction(
    prevState: LoginFormState,
    formData: FormData
): Promise<LoginFormState> {
    // Lấy dữ liệu từ Form
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Xóa session cũ nếu có trước khi bắt đầu login mới
    const cookieStore = await cookies();
    cookieStore.delete("session");

    if (!email || !password) {
        return { error: "Vui lòng nhập đầy đủ email và mật khẩu." };
    }

    try {
        // Truy vấn Prisma để kiểm tra user
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return { error: "Email không tồn tại trong hệ thống." };
        }

        // So sánh password (Trong DB mock hiện tải gửi string plaintext, thực tế phải bcrypt)
        if (user.password !== password) {
            return { error: "Mật khẩu không đúng." };
        }

        // Tạo Session ảo bằng Cookie
        const sessionData = {
            userId: user.id,
            role: user.role
        };

        // Lưu cookie (Trong Next 15+ cookies() là API async)
        cookieStore.set("session", JSON.stringify(sessionData), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
        });

        // Chỉ redirect sau khi đã set cookie thành công bên trong try block
        redirect("/");

    } catch (err) {
        // Next.js throw redirect như một error, ta cần ném lại nó để redirect hoạt động
        if ((err as Error).message === 'NEXT_REDIRECT') {
            throw err;
        }
        console.error("Login lỗi:", err);
        return { error: "Lỗi kết nối cơ sở dữ liệu." };
    }
}
