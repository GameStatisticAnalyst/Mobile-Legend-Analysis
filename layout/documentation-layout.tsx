"use client";

import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  FileText,
  Search,
  Shield,
  Users,
  Zap,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Lightbulb,
} from "lucide-react";

import MenuLayout from "@/layout/menu-layout";
import { usePathname } from "next/navigation";

interface GuideLayoutProps {
  children: ReactNode;
  title: string;
}

const navigationConfig = [
  {
    title: "Getting Started",
    href: "/guide/getting-started",
    icon: <BookOpen size={20} />,
  },
  {
    title: "Features",
    href: "/guide/features",
    icon: <Zap size={20} />,
  },
  {
    title: "Security",
    icon: <Shield size={20} />,
  },
  {
    title: "Support",
    icon: <Users size={20} />,
  },
];

export default function GuidePage({
  children,
  title,
}: GuideLayoutProps): ReactElement {
  const pathname = usePathname();

  const breadcrumbs = pathname
    .split("/")
    .filter((segment) => segment) // Remove empty segments
    .map((segment, index, array) => ({
      title: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize the segment
      href: "/" + array.slice(0, index + 1).join("/"), // Build the path up to this segment
    }));

  return (
    <MenuLayout
      navigation={navigationConfig}
      title={title}
      breadcrumbs={[
        // { title: "Beranda", href: "/" },
        ...breadcrumbs,
      ]}
    >
      {children}
    </MenuLayout>
  );
}
