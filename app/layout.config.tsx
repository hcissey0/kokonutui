import { HeaderPro } from "@/components/landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookIcon, Sparkles } from "lucide-react";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <div className="flex items-center">
                <Image
                    src="/logo.svg"
                    alt="KokonutUI Logo"
                    width={24}
                    height={24}
                    className="mr-2 hidden dark:block"
                />
                <Image
                    src="/logo-black.svg"
                    alt="KokonutUI Logo"
                    width={24}
                    height={24}
                    className="mr-2 block dark:hidden"
                />
                <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
                    KokonutUI
                </span>
            </div>
        ),
    },
    links: [
        {
            icon: <BookIcon />,
            text: "Go to Homepage",
            url: "/",
        },
        {
            type: "custom",
            children: <HeaderPro />,
        },
    ],
};
