export type StatCardProps = {
  iconUrl: string;
  statNumber: string;
  statSuffix?: string;
  description: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="bg-neutral-900 box-border caret-transparent flex flex-col justify-end break-words w-[calc(50%_-_10px)] z-[1] m-[5px] rounded-lg md:w-[calc(25%_-_30px)] md:m-[15px]">
      <div
        href=""
        className="text-transparent items-center box-border flex flex-col h-full break-words overflow-hidden p-5"
      >
        <div className="items-center flex shrink-0 h-8 justify-center break-words w-8 mb-3 rounded-[100px] md:h-[72px] md:w-[72px]">
          <div className="box-border h-8 break-words w-8 md:h-[72px] md:w-[72px]">
            <div className="items-center box-border flex h-8 justify-center break-words w-8 md:h-[72px] md:w-[72px]">
              <div className="box-border break-words">
                <img
                  src={props.iconUrl}
                  alt="Icon"
                  className="box-border h-8 object-contain w-8 md:h-[72px] md:w-[72px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-neutral-900 box-border caret-transparent flex flex-col break-words">
          <div className="text-white text-lg font-bold box-border caret-transparent leading-[normal] break-words text-center text-ellipsis text-nowrap overflow-hidden md:text-5xl">
            <span className="text-lg box-border caret-transparent break-words text-nowrap md:text-5xl">
              {props.statNumber}
            </span>
            {props.statSuffix && (
              <span className="text-lg box-border caret-transparent break-words text-nowrap md:text-5xl">
                {props.statSuffix}
              </span>
            )}
          </div>
          <div className="text-white text-sm font-normal box-border caret-transparent leading-[normal] break-words text-center mt-1 md:text-[15px]">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
