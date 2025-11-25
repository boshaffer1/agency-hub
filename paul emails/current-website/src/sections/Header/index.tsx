import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="absolute bg-white caret-transparent leading-4 break-words pointer-events-none z-10 top-0 inset-x-0">
      <img
        src="https://c.animaapp.com/mi3h22qzN7aHGv/assets/icon-2.svg"
        alt="Icon"
        className="caret-transparent hidden"
      />
      <div className="relative caret-transparent break-words pointer-events-auto z-[3]"></div>
      <div className="relative box-border caret-transparent break-words pointer-events-auto w-full z-[2] p-[22.5px] md:px-[76.8px] md:py-[12.8px]">
        <a
          href="#page"
          className="absolute text-white text-[14.92px] font-medium bg-sky-900 box-border caret-transparent block left-[-14920px] tracking-[0.2984px] leading-[normal] max-w-[336.208px] break-words underline uppercase z-[2] border-sky-900 bg-[position:0px_0px] px-[20.8px] py-4 border-2 border-solid top-[22.38px] md:text-[14.464px] md:left-[-14464px] md:tracking-[0.28928px] md:max-w-[1242.39px] md:top-[21.696px]"
        >
          Skip to Content
        </a>
        <div className="absolute box-border caret-transparent h-full break-words pointer-events-none w-full z-[1] border-b border-solid left-0 top-0"></div>
        <div className="absolute shadow-[rgb(0,0,0)_0px_12px_12px_0px] box-border caret-transparent h-full opacity-15 break-words pointer-events-none w-full left-0 top-0"></div>
        <Navbar />
      </div>
    </header>
  );
};
