"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import {
  Sparkles,
  LayoutGrid,
  Users,
  Warehouse,
  Compass,
  HandCoins,
  Handshake,
  Settings,
  ExternalLink,
  LogOut,
  ChevronRight,
  ChevronDown,
  Boxes,
  LayoutList,
  ScanSearch,
  MonitorPlay,
  Building2,
  CircleDollarSign,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();

  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: HandCoins,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Compass,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: Handshake,
      href: "/dashboard/staff",
    },
    {
      title: "Community",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];

  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Banners",
      icon: MonitorPlay,
      href: "/dashboard/banners",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={
        showSidebar
          ? "mt-16 md:block md:mt-0 dark:bg-slate-800 bg-slate-50 space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md overflow-y-scroll"
          : "hidden mt-16 md:block md:mt-0 dark:bg-slate-800 bg-slate-50 space-y-6 w-64 h-screen text-slate-800 dark:text-slate-300 fixed left-0 top-0 shadow-md overflow-y-scroll"
      }
    >
      <Link onClick={() => setShowSidebar(false)} href="/dashboard">
        <Image
          src={logo}
          alt="Shopoo Ecommerce"
          className="w-40 h-14 px-6 mt-4 "
        />
      </Link>
      <div className="space-y-3 flex py-2 flex-col ">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-8 border-lime-500 text-lime-600"
              : "flex items-center space-x-3 px-6 py-2"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="px-6">
          <CollapsibleTrigger
            className="flex items-center space-x-6 py-2"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className="flex items-center space-x-3">
              <Sparkles />
              <span>Catalogue</span>
            </div>
            {openMenu ? <ChevronDown /> : <ChevronRight />}
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg py-2 px-3 pl-6 dark:bg-slate-700 bg-slate-100">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "flex items-center space-x-3 px-2 py-1 text-sm text-lime-600"
                      : "flex items-center space-x-3 py-1 text-sm"
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 px-6 py-2  border-l-8 border-lime-500 text-lime-600"
                  : "flex items-center space-x-3 px-6 py-2"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <Button className="flex items-center space-x-3" variant="destructive">
            <LogOut />
            <span>Logout</span>
          </Button>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
