import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    // Vì Next 16 đổi middleware -> proxy, ta dùng hàm này để catch request
    const currentPath = request.nextUrl.pathname;
    const session = request.cookies.get("session")?.value;

    // Validate session
    let isValidSession = false;
    if (session) {
        try {
            const parsed = JSON.parse(session);
            if (parsed && parsed.userId) {
                isValidSession = true;
            }
        } catch (e) {
            // Invalid JSON or corrupt cookie
            isValidSession = false;
        }
    }

    // Nếu đang ở trang đăng nhập mà đã có session hợp lệ, đẩy thẳng vào trong /
    if (currentPath.startsWith("/login") && isValidSession) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Nếu chưa đăng nhập (hoặc session không hợp lệ) mà truy cập root `/` hoặc các file không phải public => Bắt đăng nhập
    const isPublicRoute = currentPath.startsWith("/login") || currentPath.startsWith("/api/public") || currentPath.match(/\.(png|jpg|jpeg|svg|css)$/);

    if (!isPublicRoute && !isValidSession) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const proxyConfig = {
    // Áp dụng cho mọi route trừ _next (static files)
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
