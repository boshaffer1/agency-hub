export const CookieBanner = () => {
  return (
    <section
      aria-label="Cookie banner"
      className="fixed text-xs items-start bg-sky-950 box-border caret-transparent flex flex-col justify-between break-words w-full z-[300000] px-5 py-3.5 bottom-0 md:items-center md:flex-row"
    >
      <p className="text-white text-base caret-transparent break-words mr-0 mb-5 md:mr-5 md:mb-0">
        By using this website, you agree to our use of cookies. We use cookies
        to provide you with a great experience and to help our website run
        effectively.
      </p>
      <div className="caret-transparent gap-x-3.5 flex break-words">
        <button className="font-normal bg-zinc-100 caret-black inline-block tracking-[normal] leading-[normal] max-w-none min-h-0 min-w-0 text-center normal-case w-auto px-1.5 py-px md:font-extrabold md:aspect-auto md:bg-white md:caret-transparent md:block md:tracking-[1.2px] md:max-w-[250px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:capitalize md:underline-offset-auto md:w-max md:[mask-position:0%] md:bg-left-top md:px-[15px] md:py-[11px] md:scroll-m-0 md:scroll-p-[auto] md:border-solid">
          <span className="caret-black inline text-clip md:aspect-auto md:caret-transparent md:flow-root md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            Accept
          </span>
        </button>
      </div>
    </section>
  );
};
