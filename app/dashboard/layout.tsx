"use client";

import type React from "react";

import { usePathname } from "next/navigation";
import { AppSidebar } from "@/app/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Extract breadcrumb segments from pathname
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => {
      // Convert kebab-case or path parameters to Title Case
      return segment.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
    });

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-[calc(100vh-16px)] overflow-hidden m-2">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                {segments.length > 1 && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={`/${segments[0]}`}>
                        {segments[1]}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
                {segments.length > 2 && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{segments[2]}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-4">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
