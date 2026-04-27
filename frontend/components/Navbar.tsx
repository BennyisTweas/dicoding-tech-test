"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    { title: "Lowongan Kerja", url: "/" },
    { title: "Dashboard", url: "/dashboard" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-white flex justify-start h-[70px] pl-[60px] border-b">
            <div className="flex items-center gap-8">

                <img src="/logo.png" alt="logo" className="" />

                {navItems.map((item) => {
                    const isActive = pathname === item.url;

                    return (
                        <Link
                            key={item.url}
                            href={item.url}
                            className="flex flex-col items-center mt-3 text-[16px] text-[#18181B]"
                        >
                            <span className="leading-none">{item.title}</span>

                            <div className="h-[4px] mt-1 flex items-center">
                                {isActive && (
                                    <img
                                        src="/active_nav_icon.png"
                                        alt="active"
                                        className="h-full rounded-[1px]"
                                    />
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}