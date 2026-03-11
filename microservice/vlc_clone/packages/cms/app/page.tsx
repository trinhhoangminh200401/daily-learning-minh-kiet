import { logoutAction } from "./actions/auth";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const sessionUser = cookieStore.get("session")?.value;

  // Parse session JSON
  let user = null;
  if (sessionUser) {
    user = JSON.parse(sessionUser);
  }

  return (
    <div className="flex h-screen bg-gray-100 flex-col">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <form action={logoutAction}>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition"
            >
              Đăng xuất
            </button>
          </form>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Chào mừng bạn đến với hệ thống quản trị!
          </h2>
          <p className="text-gray-600">
            Bạn đang đăng nhập với User ID: <span className="font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">{user?.userId}</span>
          </p>
          <p className="text-gray-600 mt-2">
            Vai trò: <span className="font-semibold">{user?.role}</span>
          </p>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-md font-medium text-gray-900 mb-2">Bài học hôm nay:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Sử dụng Next.js App Router (Server Components & Client Components)</li>
              <li>Dùng Server Actions thay cho API Routes để bảo mật</li>
              <li>Dùng <code>proxy.ts</code> (Next 16) để chặn route lúc chưa đăng nhập</li>
              <li>Sử dụng Prisma mock data với cấu trúc chuẩn</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
