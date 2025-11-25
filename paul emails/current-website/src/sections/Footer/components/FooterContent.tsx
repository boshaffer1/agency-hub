import { FooterContact } from "@/sections/Footer/components/FooterContact";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";
import { FooterStats } from "@/sections/Footer/components/FooterStats";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const FooterContent = () => {
  return (
    <section className="relative text-white items-center box-border caret-transparent flex min-h-[330px] break-words">
      <div className="absolute bg-black caret-transparent break-words inset-0">
        <div className="absolute bg-black caret-transparent break-words pointer-events-none overflow-hidden inset-0"></div>
      </div>
      <div className="relative caret-transparent flex justify-center max-w-full break-words w-full mx-auto py-[33px] md:py-[42.24px]">
        <div className="caret-transparent break-words w-full">
          <div className="relative caret-transparent h-full break-words w-full">
            <div className="relative caret-transparent gap-x-[11px] grid col-end-[-1] col-start-1 row-end-[-1] row-start-1 grid-cols-[minmax(11.5px,1fr)_repeat(8,minmax(0px,151.625px))_minmax(11.5px,1fr)] grid-rows-[repeat(12,minmax(24px,auto))] break-words overflow-x-clip gap-y-[11px] md:grid-cols-[minmax(65.8px,1fr)_repeat(24,minmax(0px,43.2083px))_minmax(65.8px,1fr)] md:grid-rows-[repeat(17,minmax(24.2176px,auto))]">
              <FooterContact />
              <FooterSocial />
              <FooterStats />
              <FooterCopyright />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
