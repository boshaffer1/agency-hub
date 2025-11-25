export type TestimonialCardProps = {
  variant: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      className={`caret-transparent col-end-10 col-start-2 break-words md:col-end-[26] md:col-start-[22] ${props.variant}`}
    >
      <div className="relative caret-transparent clear-both flex flex-col h-full justify-start break-words w-full">
        <div className="caret-transparent break-words">
          <div className="caret-transparent break-words"></div>
        </div>
      </div>
    </div>
  );
};
