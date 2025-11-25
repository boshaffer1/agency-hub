import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="relative items-center box-border caret-transparent flex min-h-[330px] break-words">
      <div className="absolute bg-yellow-700 caret-transparent break-words inset-0">
        <div className="absolute bg-yellow-700 caret-transparent break-words pointer-events-none overflow-hidden inset-0"></div>
      </div>
      <div className="relative caret-transparent flex justify-center max-w-full break-words w-full mx-auto py-[33px] md:py-[42.24px]">
        <div className="caret-transparent break-words w-full">
          <div className="relative caret-transparent h-full break-words w-full">
            <div className="relative caret-transparent gap-x-[11px] grid col-end-[-1] col-start-1 row-end-[-1] row-start-1 grid-cols-[minmax(11.5px,1fr)_repeat(8,minmax(0px,151.625px))_minmax(11.5px,1fr)] grid-rows-[repeat(37,minmax(24px,auto))] break-words overflow-x-clip gap-y-[11px] md:grid-cols-[minmax(65.8px,1fr)_repeat(24,minmax(0px,43.2083px))_minmax(65.8px,1fr)] md:grid-rows-[repeat(14,minmax(24.2176px,auto))]">
              <div className="caret-transparent col-end-10 col-start-2 row-end-3 row-start-1 break-words z-0 md:col-end-6">
                <div className="relative caret-transparent flex flex-col h-full justify-start break-words w-full">
                  <div className="caret-transparent break-words">
                    <div className="caret-transparent break-words"></div>
                  </div>
                </div>
              </div>
              <div className="caret-transparent col-end-10 col-start-2 row-end-4 row-start-3 break-words z-[1] md:col-end-6">
                <div className="relative caret-transparent clear-both flex flex-col h-full justify-start break-words w-full">
                  <div className="caret-transparent break-words">
                    <div className="caret-transparent break-words">
                      <hr className="text-zinc-500 bg-white caret-transparent float-left h-[5px] break-words w-6/12 border-zinc-100 mx-auto my-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="caret-transparent col-end-10 col-start-2 row-end-12 row-start-4 break-words z-[3] md:col-end-6 md:row-end-13">
                <div className="relative caret-transparent clear-both flex flex-col h-full justify-start break-words w-full">
                  <div className="caret-transparent break-words"></div>
                </div>
              </div>
              <TestimonialCard variant="row-end-[20] row-start-12 z-[4] md:row-end-10 md:row-start-1" />
              <TestimonialCard variant="row-end-[26] row-start-[20] z-[6] md:row-end-13 md:row-start-3" />
              <div className="caret-transparent col-end-10 col-start-2 row-end-[38] row-start-[27] break-words z-[2] md:col-end-[22] md:col-start-6 md:row-end-[15] md:row-start-1">
                <div className="relative caret-transparent flex flex-col h-full justify-start break-words w-full">
                  <div className="caret-transparent break-words">
                    <div className="caret-transparent break-words"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
