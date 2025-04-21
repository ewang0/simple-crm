"use client";

import type * as React from "react";
import { Command, LifeBuoy, Send, Users, Briefcase } from "lucide-react";
import Link from "next/link";

import { NavMain } from "@/app/components/nav-main";
import { NavSecondary } from "@/app/components/nav-secondary";
import { NavUser } from "@/app/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john.jpg",
  },
  navMain: [
    {
      title: "People",
      url: "/people",
      icon: Users,
      items: [
        {
          title: "All Contacts",
          url: "/people",
        },
        {
          title: "Recent",
          url: "/people/recent",
        },
        {
          title: "Favorites",
          url: "/people/favorites",
        },
      ],
    },
    {
      title: "Opportunities",
      url: "/opportunities",
      icon: Briefcase,
      isActive: true,
      items: [
        {
          title: "By Stage",
          url: "/opportunities",
        },
        {
          title: "List",
          url: "/opportunities/list",
        },
        {
          title: "Closed",
          url: "/opportunities/closed",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Simple CRM</span>
                  <span className="truncate text-xs">Manage your contacts</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
