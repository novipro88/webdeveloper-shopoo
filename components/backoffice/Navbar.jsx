import React from "react";
import {
  Bell,
  AlignJustify,
  LayoutDashboard,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";
import Link from "next/link";

export default function Navbar({ setShowSidebar, showSidebar }) {
  return (
    <div className="flex items-center justify-between md:justify-end bg-slate-50 dark:bg-slate-800 text-slate-50 h-16 py-4 fixed top-0 w-full px-8 z-50 md:pr-[20rem]">
      {/* <Link href={"/dashboard"} className="md:hidden">
        Logo
      </Link> */}
      {/* Icon */}
      <Button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden text-lime-700 dark:text-lime-500"
        size="sm"
        variant="ghost"
      >
        <AlignJustify />
      </Button>
      {/* 3 Icons */}
      <div className="flex space-x-3">
        <ThemeSwitcherBtn />

        <DropdownMenu>
          <DropdownMenuTrigger className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg">
            <Bell className="text-lime-700 dark:text-lime-500" fill="green" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
              20
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-6">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 pr-6">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button variant="ghost" size="sm-2">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="ghost" size="sm-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button variant="destructive" size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
