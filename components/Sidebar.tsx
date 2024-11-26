"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";
type Route = {
  icon: React.ElementType;
  label: string;
  href: string;
};
const routes: Route[] = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "",
  },
  {
    icon: Layers2Icon,
    label: "Workflows",
    href: "workflows",
  },
  {
    icon: ShieldCheckIcon,
    label: "Credentials",
    href: "credentials",
  },
  {
    icon: CoinsIcon,
    label: "Billing",
    href: "billing",
  },
];

const DesktopSidebar = () => {
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      DesktopSidebar
    </div>
  );
};

export default DesktopSidebar;
