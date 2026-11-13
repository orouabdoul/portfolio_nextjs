import Image from "next/image";

type PortfolioScreenName =
  | "shoes-home"
  | "shoes-product"
  | "shoes-cart"
  | "shoes-confirmed"
  | "fastgrab-home"
  | "fastgrab-restaurant"
  | "fastgrab-item"
  | "fastgrab-checkout"
  | "fixai-home"
  | "fixai-capture"
  | "fixai-diagnostic"
  | "fixai-professionals";

const screens: Record<
  PortfolioScreenName,
  { src: string; background: string }
> = {
  "shoes-home": {
    src: "/screens/content/shoes-home.png",
    background: "bg-white",
  },
  "shoes-product": {
    src: "/screens/content/shoes-product.png",
    background: "bg-white",
  },
  "shoes-cart": {
    src: "/screens/content/shoes-cart.png",
    background: "bg-white",
  },
  "shoes-confirmed": {
    src: "/screens/content/shoes-confirmed.png",
    background: "bg-white",
  },
  "fastgrab-home": {
    src: "/screens/content/fastgrab-home.png",
    background: "bg-[#080912]",
  },
  "fastgrab-restaurant": {
    src: "/screens/content/fastgrab-restaurant.png",
    background: "bg-[#080912]",
  },
  "fastgrab-item": {
    src: "/screens/content/fastgrab-item.png",
    background: "bg-[#080912]",
  },
  "fastgrab-checkout": {
    src: "/screens/content/fastgrab-checkout.png",
    background: "bg-[#080912]",
  },
  "fixai-home": {
    src: "/screens/fixai-home.png",
    background: "bg-[#f7f8fa]",
  },
  "fixai-capture": {
    src: "/screens/fixai-capture.png",
    background: "bg-[#f7f8fa]",
  },
  "fixai-diagnostic": {
    src: "/screens/fixai-diagnostic.png",
    background: "bg-[#f7f8fa]",
  },
  "fixai-professionals": {
    src: "/screens/fixai-professionals.png",
    background: "bg-[#f7f8fa]",
  },
};

type PortfolioScreenProps = {
  name: PortfolioScreenName;
  alt: string;
  className?: string;
  sizes?: string;
};

export default function PortfolioScreen({
  name,
  alt,
  className,
  sizes,
}: PortfolioScreenProps) {
  const screen = screens[name];

  return (
    <div
      className={`relative isolate aspect-[9/19.5] overflow-hidden rounded-[2.35rem] border-[5px] border-[#111217] bg-[#111217] p-[3px] shadow-[0_20px_45px_rgba(0,0,0,0.28)] ${className ?? ""}`}
    >
      <div className={`relative h-full w-full overflow-hidden rounded-[1.95rem] ${screen.background}`}>
        <Image
          src={screen.src}
          alt={alt}
          fill
          sizes={sizes}
          unoptimized
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}
