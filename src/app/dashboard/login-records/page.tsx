/*
 * @Author: edward jifengming92@163.com
 * @Date: 2025-07-14 08:59:39
 * @LastEditors: edward jifengming92@163.com
 * @LastEditTime: 2025-07-14 09:03:56
 * @FilePath: \coolmonitor\src\app\dashboard\login-records\page.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getServerSession } from "next-auth";
import { buildAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import LoginRecordsTable from "./login-records-table";

export const metadata = {
  title: "登录记录 - 东2信息化监控",
  description: "查看您的登录记录和登录历史",
};

export default async function LoginRecordsPage() {
  // 检查是否已登录
  const authOptions = await buildAuthOptions();
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">登录记录</h1>
        <Link
          href="/dashboard"
          className="flex items-center text-sm px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          返回仪表盘
        </Link>
      </div>

      <p className="text-gray-500 dark:text-gray-400 mb-8">
        查看您最近的登录历史，包括登录时间、IP地址和设备信息。
      </p>

      <LoginRecordsTable />
    </div>
  );
}
