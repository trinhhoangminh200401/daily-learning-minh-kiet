"use client";

import * as React from "react";
import { loginAction } from "./actions"; // Server Action
import { useActionState } from "react";

export function LoginForm() {
    // Thay thế việc dùng useState và onSubmit cho việc fetch client
    // Bằng useActionState của React 19, sẽ chạy Server Action và trả kết quả về form
    const [state, action, isPending] = useActionState(loginAction, {});

    return (
        <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden border">
            {/* Form Area */}
            <div className="flex-1 p-8 md:p-12">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        Đăng nhập hệ thống
                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Vui lòng nhập thông tin hoặc sử dụng tài khoản admin@vlc.com
                    </p>
                </div>

                {/* Chú ý: Dùng thuộc tính action của form thay cho onSubmit */}
                <form action={action} className="flex flex-col gap-5">
                    {state?.error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center">
                            {state.error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="admin@vlc.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className={`w-full py-2.5 px-4 rounded-md text-white font-medium transition-colors ${isPending ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {isPending ? "Đang xử lý..." : "Đăng nhập"}
                    </button>
                </form>
            </div>

            {/* Image Area */}
            <div className="hidden md:block flex-1 bg-slate-900 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 to-purple-900/80 z-10" />
                <div className="relative z-20 h-full flex flex-col items-center justify-center p-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">VLC CMS Admin</h2>
                    <p className="text-blue-100">Cấu trúc chuẩn, hiệu suất cao.</p>
                </div>
            </div>
        </div>
    );
}
