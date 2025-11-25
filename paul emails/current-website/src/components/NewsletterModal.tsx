import { NewsletterForm } from "@/components/NewsletterForm";

export const NewsletterModal = () => {
  return (
    <div className="fixed items-center bg-neutral-600/80 caret-transparent flex flex-col justify-center break-words z-[1000002] overflow-auto px-2.5 py-[50px] inset-0 md:p-0">
      <div className="relative caret-transparent max-h-full min-w-[300px] break-words">
        <NewsletterForm />
        <button
          type="button"
          aria-label="Close"
          className="absolute text-white text-2xl bg-black/10 caret-transparent block h-10 leading-[48px] break-words text-center w-10 z-[1000] m-2 p-0 right-0 top-0 hover:bg-black/20"
        >
          <img
            src="https://c.animaapp.com/mi3h22qzN7aHGv/assets/icon-20.svg"
            alt="Icon"
            className="caret-transparent h-6 w-6 m-auto"
          />
        </button>
      </div>
    </div>
  );
};
