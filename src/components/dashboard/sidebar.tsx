
"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarToggle,
  SidebarSeparator,
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
  Mail,
  Users,
  BarChart2,
  Settings,
  Globe,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";

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
  const router = useRouter();
  const [pagesOpen, setPagesOpen] = useState(pathname.startsWith('/pages'));

  const isActive = (path: string) => {
    // Exact match for overview page
    if (path === "/overview") return pathname === path;
    if (path === "/") return pathname === path;
    // Otherwise, use startsWith for parent paths
    return pathname.startsWith(path) && path !== '/';
  };
  
  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    router.push('/login');
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary flex-shrink-0">
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
          <span className="text-lg font-semibold whitespace-nowrap group-data-[collapsible=icon]:hidden">Blentops</span>
        </div>
        <SidebarToggle className="hidden md:flex group-data-[collapsible=icon]:absolute group-data-[collapsible=icon]:top-4 group-data-[collapsible=icon]:right-3"/>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/overview")} tooltip="Overview">
              <Link href="/overview">
                <LayoutDashboard />
                <span>Overview</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <Collapsible open={pagesOpen} onOpenChange={setPagesOpen}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton className="justify-between" isActive={isActive("/pages")} tooltip="Pages">
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
            <SidebarMenuButton asChild isActive={isActive("/enquiries")} tooltip="Enquiries">
              <Link href="/enquiries">
                <Mail />
                <span>Enquiries</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/users")} tooltip="Users">
              <Link href="/users">
                <Users />
                <span>Users</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarSeparator className="my-2" />

          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/social")} tooltip="Social Media">
              <Link href="/social">
                <LinkIcon />
                <span>Social Media</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/components")} tooltip="Components">
              <Link href="/components">
                <Palette />
                <span>Components</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/media")} tooltip="Media">
              <Link href="/media">
                <ImageIcon />
                <span>Media</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarSeparator className="my-2" />
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/analytics")} tooltip="Analytics">
              <Link href="/analytics">
                <BarChart2 />
                <span>Analytics</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/seo")} tooltip="SEO">
              <Link href="/seo">
                <Globe />
                <span>SEO</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/settings")} tooltip="Settings">
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
             <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
                <LogOut />
                <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
