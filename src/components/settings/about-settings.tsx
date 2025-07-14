/*
 * @Author: edward jifengming92@163.com
 * @Date: 2025-07-14 08:59:39
 * @LastEditors: edward jifengming92@163.com
 * @LastEditTime: 2025-07-14 09:26:00
 * @FilePath: \coolmonitor\src\components\settings\about-settings.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";

export function AboutSettings() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium dark:text-foreground text-light-text-primary mb-4">
        关于
      </h3>

      <div className="flex flex-col items-center justify-center text-center p-6">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
          <i className="fas fa-chart-line text-3xl"></i>
        </div>

        <h3 className="text-xl font-bold text-primary mb-2">东2信息化监控</h3>
        <p className="text-sm dark:text-foreground/80 text-light-text-secondary mb-4">
          高颜值的监控工具
        </p>

        {/* <div className="mt-6 space-x-2">
          <a
            href="https://github.com/star7th/coolmonitor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-md text-sm text-primary transition-colors"
          >
            <i className="fab fa-github mr-2"></i>
            GitHub
          </a>

          <a
            href="https://github.com/star7th/coolmonitor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-md text-sm text-primary transition-colors"
          >
            <i className="fas fa-book mr-2"></i>
            文档
          </a>
        </div> */}
      </div>
    </div>
  );
}
