import { SideLinks } from "@/utils/constants/sidelinks";
import Link from "next/link";
import Image from "next/image";

export const SideBar = ({ expanded }: { expanded: boolean }) => {
    return (
        <div
            className={`bg-secondary flex flex-col transition-all duration-300 h-screen ${expanded ? "" : ""}`}
        >
            <Link 
                href="/"
                className="flex items-center text-2xl font-bold tracking-tight text-transparent bg-clip-text border-b-[1px] border-neutral-300 h-[10vh] bg-gradient-to-r from-fuchsia-300 to-violet-400">
                <Image 
                        src="https://test.mayacode.io/dashboard/mayacode-logo.png" 
                        alt="logo"
                        width={76}
                        height={66}
                        priority
                        className="ml-2"
                />
                {expanded && 'MayaCode'}
            </Link>
            <div className="px-2 mt-2">
                {SideLinks.slice(0, -1).map((link, idx) => (
                    <Link
                        href={link.link}
                        key={idx}
                        className={`flex items-center gap-4 py-4 px-2 hover:bg-neutral-50 rounded-lg transition-colors text-violet-500 ${expanded ? "" : "justify-center"}`}
                    >
                        <link.icon size={28} />
                        {expanded && (
                            <span className="font-medium">
                                {link.title}
                            </span>
                        )}
                    </Link>
                ))}
            </div>
            <div className="px-2 text-violet-500">
                <Link
                    href={SideLinks[SideLinks.length - 1].link}
                    className={`flex items-center gap-4 py-4 px-2 hover:bg-neutral-50 rounded-lg transition-colors ${expanded ? "" : "justify-center"}`}
                >
                    {(() => {
                        const Icon = SideLinks[SideLinks.length - 1].icon;
                        return <Icon size={28} />;
                    })()}
                    {expanded && (
                        <span className="font-medium">
                            {SideLinks[SideLinks.length - 1].title}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};
