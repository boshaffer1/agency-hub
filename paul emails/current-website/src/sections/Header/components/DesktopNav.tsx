import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { NavMenu } from "@/sections/Header/components/NavMenu";

export const DesktopNav = () => {
  return (
    <div className="relative items-center box-border caret-transparent hidden justify-start min-h-0 min-w-0 break-words w-full md:flex md:min-h-[auto] md:min-w-[auto]">
      <div className="items-center caret-transparent flex basis-[calc(100%_-_50px)] grow shrink-0 min-h-0 min-w-0 break-words md:basis-[67%] md:min-h-[auto] md:min-w-[auto]">
        <NavbarLogo />
        <div className="caret-transparent hidden grow min-h-0 min-w-0 break-words text-right ml-auto pl-[11.625px] md:block md:min-h-[auto] md:min-w-[auto] md:pl-[39.68px]">
          <NavMenu />
        </div>
      </div>
      <div className="text-zinc-950 items-center caret-transparent hidden justify-end min-h-0 min-w-0 break-words md:flex md:min-h-[auto] md:min-w-[auto]">
        <div className="caret-transparent flex break-words md:hidden"></div>
        <div className="caret-transparent min-h-0 min-w-0 break-words md:min-h-[auto] md:min-w-[auto]"></div>
        <div className="caret-transparent hidden min-h-0 min-w-0 break-words text-center text-nowrap ml-[11.625px] md:block md:min-h-[auto] md:min-w-[auto] md:ml-[39.68px]">
          <a
            href="https://www.thefpandaguy.com/the-fpa-guys-digital-assistant"
            className="relative text-white text-[14.92px] font-bold bg-sky-900 caret-transparent inline-block tracking-[0.2984px] leading-[normal] break-words uppercase text-nowrap px-[20.8px] py-4 rounded-[300px] md:text-[14.464px] md:tracking-[0.28928px]"
          >
            Test MY Free AI Digital assistant
          </a>
        </div>
      </div>
    </div>
  );
};
