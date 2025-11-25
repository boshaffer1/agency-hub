export const CartButton = () => {
  return (
    <div className="fixed text-white content-center bg-sky-900 caret-transparent hidden justify-center break-words z-[100] pl-[13px] pr-[17px] pt-[17px] pb-[13px] right-5 bottom-5">
      <a
        href="/cart"
        className="relative caret-transparent block h-[25px] leading-4 break-words w-[25px] bg-[position:0px_0px]"
      >
        <span className="caret-transparent break-words">
          <img
            src="https://c.animaapp.com/mi3h22qzN7aHGv/assets/icon-1.svg"
            alt="Icon"
            className="relative caret-transparent h-full w-full"
          />
          <div className="absolute text-[10px] caret-transparent leading-[10px] min-w-2.5 break-words text-right p-[5px] -right-2.5 -top-2.5">
            <span className="caret-transparent break-words">0</span>
          </div>
        </span>
      </a>
    </div>
  );
};
