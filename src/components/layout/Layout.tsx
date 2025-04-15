
import { ReactNode, useEffect } from "react";
import { AppSidebar } from "./AppSidebar";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function Layout({ children, title, subtitle }: LayoutProps) {
  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(savedTheme);
  }, []);

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
