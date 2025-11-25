import { CookieBanner } from "@/components/CookieBanner";
import { CartButton } from "@/components/CartButton";
import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";
import { NewsletterModal } from "@/components/NewsletterModal";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc outline-black outline-offset-0 outline-0 break-words pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif md:outline-zinc-950 md:outline-offset-4 md:outline md:outline-2">
      <div className="font-semibold caret-transparent flex flex-col leading-[36.8px] min-h-[1000px] break-words font-poppins">
        <div className="caret-transparent break-words">
          <CookieBanner />
        </div>
        <CartButton />
        <Header />
        <Main />
        <Footer />
        <div className="relative caret-transparent break-words"></div>
      </div>
      <img
        src="https://c.animaapp.com/mi3h22qzN7aHGv/assets/icon-19.svg"
        alt="Icon"
        className="caret-transparent hidden"
      />
      <NewsletterModal />
      <ins className="caret-transparent hidden break-words underline">
        <div className="relative caret-transparent inline-block h-0 break-words w-0">
          <iframe
            name="aswift_0"
            title="Advertisement"
            aria-label="Advertisement"
            className="absolute caret-transparent break-words left-0 top-0"
          ></iframe>
        </div>
      </ins>
      <div className="caret-transparent break-words">
        <div className="fixed items-end caret-transparent flex h-[1000px] justify-end break-words pointer-events-none w-screen z-[99999] overflow-hidden inset-0">
          <div className="items-end caret-transparent gap-x-5 flex flex-col break-words gap-y-5 m-0 md:m-5">
            <div
              role="button"
              className="bg-orange-500 bg-[url(data:image/png;base64,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)] bg-size-[100%,auto] caret-transparent h-11 break-words pointer-events-auto w-11 bg-[position:0px,0%_0px,0%] m-5 rounded-[50%] md:m-0"
            ></div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/recaptcha/api2/aframe"
        className="caret-transparent hidden h-0 break-words w-0 border-zinc-100"
      ></iframe>
      <div className="caret-transparent break-words">
        <div className="caret-transparent break-words w-full"></div>
      </div>
    </body>
  );
};
