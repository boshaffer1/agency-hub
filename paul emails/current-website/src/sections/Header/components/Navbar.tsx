import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileNav } from "@/sections/Header/components/MobileNav";

export const Navbar = () => {
  return (
    <div className="relative items-center caret-transparent flex break-words w-full z-[1]">
      <div className="absolute caret-transparent break-words inset-0"></div>
      <DesktopNav />
      <MobileNav />
    </div>
  );
};
