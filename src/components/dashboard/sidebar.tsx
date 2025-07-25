"use client";

import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  FileText,
  Package,
  FileUp,
  Rss,
  Handshake,
  Phone,
  Briefcase,
  Link as LinkIcon,
  Palette,
  Image as ImageIcon,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import Link from "next/link";

const pagesLinks = [
  { href: "/pages/home", label: "Home", icon: FileText },
  { href: "/pages/about-us", label: "About Us", icon: FileText },
  { href: "/pages/products", label: "Products", icon: Package },
  { href: "/pages/investors-media", label: "Investors & Media", icon: FileUp },
  { href: "/pages/blog", label: "Blog", icon: Rss },
  { href: "/pages/collaborate", label: "Collaborate", icon: Handshake },
  { href: "/pages/contact", label: "Contact", icon: Phone },
  { href: "/pages/careers", label: "Careers", icon: Briefcase },
];

export function MainSidebar() {
  const pathname = usePathname();
  const [pagesOpen, setPagesOpen] = useState(pathname.startsWith('/pages'));

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
             <svg
              className="h-5 w-5 text-primary-foreground"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-lg font-semibold">Blentos</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/")}>
              <Link href="/">
                <LayoutDashboard />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <Collapsible open={pagesOpen} onOpenChange={setPagesOpen}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="justify-between">
                  <div className="flex items-center gap-2">
                    <FileText />
                    <span>Pages</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${pagesOpen ? "rotate-180" : ""}`} />
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
            <CollapsibleContent>
              <SidebarMenu className="ml-4 border-l pl-4 py-2 gap-0">
                {pagesLinks.map((link) => (
                  <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton asChild isActive={isActive(link.href)} size="sm" className="h-8">
                      <Link href={link.href}>
                        <span>{link.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </CollapsibleContent>
          </Collapsible>

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/social")}>
              <Link href="/social">
                <LinkIcon />
                <span>Social Media</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/components")}>
              <Link href="/components">
                <Palette />
                <span>Components</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/media")}>
              <Link href="/media">
                <ImageIcon />
                <span>Media</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
             <SidebarMenuButton asChild>
              <Link href="/login">
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
