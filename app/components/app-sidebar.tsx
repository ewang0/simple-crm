"use client";

import type * as React from "react";
import { useState } from "react";
import {
  Briefcase,
  Check,
  ChevronsUpDown,
  Command,
  LifeBuoy,
  Plus,
  Send,
  Users,
} from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample workspaces data
const workspaces = [
  {
    id: "1",
    name: "Acme Inc",
    plan: "Enterprise",
  },
  {
    id: "2",
    name: "Personal Workspace",
    plan: "Free",
  },
  {
    id: "3",
    name: "Design Team",
    plan: "Pro",
  },
  {
    id: "4",
    name: "Marketing",
    plan: "Team",
  },
];

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
  const [currentWorkspace, setCurrentWorkspace] = useState(workspaces[0]);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="cursor-pointer">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {currentWorkspace.name}
                    </span>
                    <span className="truncate text-xs">
                      {currentWorkspace.plan}
                    </span>
                  </div>
                  <ChevronsUpDown className="size-4 opacity-50" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[220px]">
                <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {workspaces.map((workspace) => (
                  <DropdownMenuItem
                    key={workspace.id}
                    onClick={() => setCurrentWorkspace(workspace)}
                    className="flex items-center justify-between"
                  >
                    <div className="flex flex-col">
                      <span>{workspace.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {workspace.plan}
                      </span>
                    </div>
                    {currentWorkspace.id === workspace.id && (
                      <Check className="size-4 ml-2" />
                    )}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    href="/create-workspace"
                    className="flex w-full items-center"
                  >
                    <Plus className="size-4 mr-2" />
                    <span>Create New Workspace</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
