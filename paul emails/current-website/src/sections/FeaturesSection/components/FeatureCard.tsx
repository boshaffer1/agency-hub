export type FeatureCardProps = {
  variant: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={`caret-transparent col-end-10 col-start-2 break-words md:row-end-[19] md:row-start-2 ${props.variant}`}
    >
      <div className="relative caret-transparent clear-both flex flex-col h-full justify-center break-words w-full">
        <div className="caret-transparent h-full break-words">
          <div className="relative text-yellow-700 items-center caret-transparent flex h-full justify-center break-words">
            <div className="absolute bg-transparent caret-transparent h-full break-words w-full border-[6px] border-solid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
