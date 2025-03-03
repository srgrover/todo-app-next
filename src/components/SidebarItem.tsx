'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: React.ReactNode;
  title: string;
}

export const SidebarItem = ({ path, icon, title }: Props) => {
  const pathName = usePathname();
  return (
    <li className="flex justify-start gap-3">
      <div className="grow">
        <Link
          href={path}
          key={path}
          className={`${(pathName === path && 'text-white bg-gradient-to-r from-sky-600 to-cyan-400')} 
          relative px-4 py-3 flex items-center space-x-4 rounded-xl
          hover:text-gray-600 hover:bg-gradient-to-r hover:from-sky-200 hover:to-cyan-100`}
        >
          {icon}
          <span className="mr-1 font-medium">{title}</span>
        </Link>
      </div>
    </li>
  );
};
