export const MobileMenuToggle = () => {
  return (
    <div className="items-end caret-transparent flex basis-[50px] shrink-0 justify-end min-h-[auto] min-w-[auto] opacity-100 break-words w-[50px] md:items-center md:hidden md:basis-auto md:shrink md:justify-center md:min-h-0 md:min-w-0 md:opacity-0 md:w-auto">
      <button className="relative font-normal bg-transparent caret-transparent block leading-[normal] min-h-[auto] min-w-[auto] break-words text-center md:inline-block md:min-h-0 md:min-w-0">
        <div className="relative items-center caret-transparent flex h-[35px] justify-center break-words w-[35px]">
          <div className="caret-transparent h-full min-h-[auto] min-w-[auto] break-words w-full md:min-h-0 md:min-w-0">
            <div className="absolute bg-zinc-950 caret-transparent content-[''] h-px break-words translate-x-[3.5px] translate-y-[-0.5px] scale-x-[-1px] scale-y-[-1px] w-7 m-auto left-0 inset-y-0 md:transform-none"></div>
            <div className="absolute bg-zinc-950 caret-transparent content-[''] h-px break-words w-full m-auto scale-0 left-0 inset-y-0 md:transform-none"></div>
            <div className="absolute bg-zinc-950 caret-transparent content-[''] h-px break-words translate-x-[3.5px] rotate-90 w-7 m-auto left-0 inset-y-0 md:transform-none"></div>
          </div>
        </div>
      </button>
    </div>
  );
};
