import { MobileNavLogo } from "@/sections/Header/components/MobileNavLogo";
import { MobileMenuToggle } from "@/sections/Header/components/MobileMenuToggle";

export const MobileNav = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex justify-start min-h-[auto] min-w-[auto] break-words w-full md:hidden md:min-h-0 md:min-w-0">
      <div className="text-zinc-950 items-center caret-transparent hidden justify-start break-words md:inline-flex md:justify-end">
        <div className="caret-transparent break-words"></div>
        <div className="caret-transparent hidden break-words md:flex"></div>
      </div>
      <MobileNavLogo />
      <MobileMenuToggle />
    </div>
  );
};
