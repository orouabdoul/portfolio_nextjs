import Image from "next/image";

export type PortfolioScreenName =
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
  | "fixai-professionals"
  | "devlink-africa-accueil"
  | "devlink-africa-fil"
  | "devlink-africa-discussion"
  | "devlink-africa-secret"
  | "devlink-africa-developpeurs"
  | "dorofaba-connexion"
  | "dorofaba-dashboard"
  | "dorofaba-boutique"
  | "mymonto-1"
  | "mymonto-2"
  | "mymonto-3"
  | "mymonto-4"
  | "minizon-1"
  | "minizon-2"
  | "minizon-3"
  | "minizon-4"
  | "minizon-5"
  | "minizon-6"
  | "minizon-7"
  | "minizon-8"
  | "minizon-9"
  | "minizon-10"
  | "minizon-11"
  | "globul-1"
  | "globul-2"
  | "globul-3"
  | "globul-4"
  | "globul-5"
  | "globul-6"
  | "globul-7"
  | "globul-8"
  | "globul-9"
  | "globul-10"
  | "globul-11"
  | "globul-12"
  | "globul-13"
  | "globul-14"
  | "globul-15"
  | "medicare-splash"
  | "medicare-presentation"
  | "medicare-login"
  | "medicare-p1"
  | "medicare-p2"
  | "medicare-p3"
  | "medicare-p4"
  | "medicare-p5"
  | "medicare-p6"
  | "medicare-p8"
  | "medicare-p9"
  | "medicare-m1"
  | "medicare-m2"
  | "medicare-m3"
  | "medicare-m4"
  | "medicare-m6"
  | "medicare-m7"
  | "medicare-m8"
  | "medicare-m9"
  | "ecommerce-1"
  | "ecommerce-2"
  | "ecommerce-3"
  | "ecommerce-4"
  | "ecommerce-5"
  | "ecommerce-6"
  | "ecommerce-7"
  | "cabe-1"
  | "cabe-2"
  | "cabe-3"
  | "cabe-4"
  | "cabe-5"
  | "cabe-6"
  | "cabe-7"
  | "simah-1"
  | "simah-2"
  | "simah-3"
  | "simah-4"
  | "simah-5"
  | "simah-6"
  | "simah-7"
  | "salesium-1"
  | "salesium-2"
  | "salesium-3"
  | "salesium-4"
  | "salesium-5"
  | "salesium-6"
  | "salesium-7"
  | "salesium-8";

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
  "devlink-africa-accueil": {
    src: "/screens/content/devlink-africa-accueil.png",
    background: "bg-[#0f172a]",
  },
  "devlink-africa-fil": {
    src: "/screens/content/devlink-africa-fil.png",
    background: "bg-[#0f172a]",
  },
  "devlink-africa-discussion": {
    src: "/screens/content/devlink-africa-discussion.png",
    background: "bg-[#0f172a]",
  },
  "devlink-africa-secret": {
    src: "/screens/content/devlink-africa-secret.png",
    background: "bg-[#0f172a]",
  },
  "devlink-africa-developpeurs": {
    src: "/screens/content/devlink-africa-developpeurs.png",
    background: "bg-[#0f172a]",
  },
  "dorofaba-connexion": {
    src: "/screens/content/dorofaba-connexion.png",
    background: "bg-white",
  },
  "dorofaba-dashboard": {
    src: "/screens/content/dorofaba-dashboard.png",
    background: "bg-[#f8faf8]",
  },
  "dorofaba-boutique": {
    src: "/screens/content/dorofaba-boutique.png",
    background: "bg-white",
  },
  "mymonto-1": {
    src: "/screens/content/mymonto-1.png",
    background: "bg-[#f5f7fa]",
  },
  "mymonto-2": {
    src: "/screens/content/mymonto-2.png",
    background: "bg-[#f5f7fa]",
  },
  "mymonto-3": {
    src: "/screens/content/mymonto-3.png",
    background: "bg-[#f5f7fa]",
  },
  "mymonto-4": {
    src: "/screens/content/mymonto-4.png",
    background: "bg-[#f5f7fa]",
  },
  "minizon-1": { src: "/screens/content/minizon-1.jpeg", background: "bg-white" },
  "minizon-2": { src: "/screens/content/minizon-2.jpeg", background: "bg-white" },
  "minizon-3": { src: "/screens/content/minizon-3.jpeg", background: "bg-white" },
  "minizon-4": { src: "/screens/content/minizon-4.jpeg", background: "bg-white" },
  "minizon-5": { src: "/screens/content/minizon-5.jpeg", background: "bg-[#f3f4f9]" },
  "minizon-6": { src: "/screens/content/minizon-6.jpeg", background: "bg-white" },
  "minizon-7": { src: "/screens/content/minizon-7.jpeg", background: "bg-[#f2f3f8]" },
  "minizon-8": { src: "/screens/content/minizon-8.jpeg", background: "bg-[#f2f3f8]" },
  "minizon-9": { src: "/screens/content/minizon-9.jpeg", background: "bg-[#f2f3f8]" },
  "minizon-10": { src: "/screens/content/minizon-10.jpeg", background: "bg-[#f2f3f8]" },
  "minizon-11": { src: "/screens/content/minizon-11.jpeg", background: "bg-[#f2f3f8]" },
  "globul-1": { src: "/screens/content/globul-1.png", background: "bg-[#9a9997]" },
  "globul-2": { src: "/screens/content/globul-2.png", background: "bg-[#9d9c9a]" },
  "globul-3": { src: "/screens/content/globul-3.png", background: "bg-[#91908e]" },
  "globul-4": { src: "/screens/content/globul-4.png", background: "bg-[#b9b8b6]" },
  "globul-5": { src: "/screens/content/globul-5.png", background: "bg-[#9b9a98]" },
  "globul-6": { src: "/screens/content/globul-6.png", background: "bg-[#bebdbb]" },
  "globul-7": { src: "/screens/content/globul-7.png", background: "bg-[#b9b8b6]" },
  "globul-8": { src: "/screens/content/globul-8.png", background: "bg-[#a7a6a3]" },
  "globul-9": { src: "/screens/content/globul-9.png", background: "bg-[#a3adb4]" },
  "globul-10": { src: "/screens/content/globul-10.png", background: "bg-[#98a4ab]" },
  "globul-11": { src: "/screens/content/globul-11.png", background: "bg-[#989ea1]" },
  "globul-12": { src: "/screens/content/globul-12.png", background: "bg-[#51565e]" },
  "globul-13": { src: "/screens/content/globul-13.png", background: "bg-[#414850]" },
  "globul-14": { src: "/screens/content/globul-14.png", background: "bg-[#6d7073]" },
  "globul-15": { src: "/screens/content/globul-15.png", background: "bg-[#6d6f72]" },
  "medicare-splash":       { src: "/screens/content/medicare-splash.png",       background: "bg-[#3b494c]" },
  "medicare-presentation": { src: "/screens/content/medicare-presentation.png", background: "bg-[#2e2e30]" },
  "medicare-login":        { src: "/screens/content/medicare-login.png",        background: "bg-[#1b1b1c]" },
  "medicare-p1": { src: "/screens/content/medicare-p1.png", background: "bg-[#16181c]" },
  "medicare-p2": { src: "/screens/content/medicare-p2.png", background: "bg-[#14171a]" },
  "medicare-p3": { src: "/screens/content/medicare-p3.png", background: "bg-[#94979a]" },
  "medicare-p4": { src: "/screens/content/medicare-p4.png", background: "bg-[#7f8285]" },
  "medicare-p5": { src: "/screens/content/medicare-p5.png", background: "bg-[#323537]" },
  "medicare-p6": { src: "/screens/content/medicare-p6.png", background: "bg-[#2f2f30]" },
  "medicare-p8": { src: "/screens/content/medicare-p8.png", background: "bg-[#7e8083]" },
  "medicare-p9": { src: "/screens/content/medicare-p9.png", background: "bg-[#4b4d51]" },
  "medicare-m1": { src: "/screens/content/medicare-m1.png", background: "bg-[#979a9b]" },
  "medicare-m2": { src: "/screens/content/medicare-m2.png", background: "bg-[#070b0b]" },
  "medicare-m3": { src: "/screens/content/medicare-m3.png", background: "bg-[#0f1315]" },
  "medicare-m4": { src: "/screens/content/medicare-m4.png", background: "bg-[#909395]" },
  "medicare-m6": { src: "/screens/content/medicare-m6.png", background: "bg-[#818485]" },
  "medicare-m7": { src: "/screens/content/medicare-m7.png", background: "bg-[#737677]" },
  "medicare-m8": { src: "/screens/content/medicare-m8.png", background: "bg-[#828586]" },
  "medicare-m9": { src: "/screens/content/medicare-m9.png", background: "bg-[#202324]" },
  "ecommerce-1": { src: "/screens/content/ecommerce-1.png", background: "bg-[#053863]" },
  "ecommerce-2": { src: "/screens/content/ecommerce-2.png", background: "bg-[#013869]" },
  "ecommerce-3": { src: "/screens/content/ecommerce-3.png", background: "bg-[#164773]" },
  "ecommerce-4": { src: "/screens/content/ecommerce-4.png", background: "bg-[#104674]" },
  "ecommerce-5": { src: "/screens/content/ecommerce-5.png", background: "bg-[#796d6c]" },
  "ecommerce-6": { src: "/screens/content/ecommerce-6.png", background: "bg-[#2b5c7d]" },
  "ecommerce-7": { src: "/screens/content/ecommerce-7.png", background: "bg-[#7c828c]" },
  "cabe-1": { src: "/screens/content/cabe-1.png", background: "bg-[#cacaca]" },
  "cabe-2": { src: "/screens/content/cabe-2.png", background: "bg-[#cfcfcf]" },
  "cabe-3": { src: "/screens/content/cabe-3.png", background: "bg-[#cfcfcf]" },
  "cabe-4": { src: "/screens/content/cabe-4.png", background: "bg-[#cecece]" },
  "cabe-5": { src: "/screens/content/cabe-5.png", background: "bg-[#e9e9e9]" },
  "cabe-6": { src: "/screens/content/cabe-6.png", background: "bg-[#c8c8c8]" },
  "cabe-7": { src: "/screens/content/cabe-7.png", background: "bg-[#ebebeb]" },
  "simah-1": { src: "/screens/content/simah-1.png", background: "bg-[#f5f5f4]" },
  "simah-2": { src: "/screens/content/simah-2.png", background: "bg-[#f5f5f5]" },
  "simah-3": { src: "/screens/content/simah-3.png", background: "bg-[#f7f7f7]" },
  "simah-4": { src: "/screens/content/simah-4.png", background: "bg-[#f5f5f5]" },
  "simah-5": { src: "/screens/content/simah-5.png", background: "bg-[#fafafa]" },
  "simah-6": { src: "/screens/content/simah-6.png", background: "bg-[#f5f5f5]" },
  "simah-7": { src: "/screens/content/simah-7.png", background: "bg-[#f5f5f5]" },
  "salesium-1": { src: "/screens/content/salesium-1.png", background: "bg-[#29292a]" },
  "salesium-2": { src: "/screens/content/salesium-2.png", background: "bg-[#2b2c2c]" },
  "salesium-3": { src: "/screens/content/salesium-3.png", background: "bg-[#282929]" },
  "salesium-4": { src: "/screens/content/salesium-4.png", background: "bg-[#2b2c2c]" },
  "salesium-5": { src: "/screens/content/salesium-5.png", background: "bg-[#2b2c2c]" },
  "salesium-6": { src: "/screens/content/salesium-6.png", background: "bg-[#2b2c2c]" },
  "salesium-7": { src: "/screens/content/salesium-7.png", background: "bg-[#2b2c2c]" },
  "salesium-8": { src: "/screens/content/salesium-8.png", background: "bg-[#2b2c2c]" },
};

type PortfolioScreenProps = {
  name: PortfolioScreenName;
  alt: string;
  className?: string;
  sizes?: string;
  frame?: "mobile" | "web";
  chromeLabel?: string;
  objectFit?: "cover" | "contain";
};

export default function PortfolioScreen({
  name,
  alt,
  className,
  sizes,
  frame = "mobile",
  chromeLabel,
  objectFit = "cover",
}: PortfolioScreenProps) {
  const screen = screens[name];

  if (frame === "web") {
    return (
      <div
        className={`relative isolate overflow-hidden rounded-xl border border-[#232b3e] bg-[#141926] shadow-[0_20px_50px_rgba(0,0,0,0.4)] ${className ?? ""}`}
      >
        {/* Browser chrome */}
        <div className="flex h-8 shrink-0 items-center gap-2 border-b border-[#1e2638] bg-[#141926] px-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          {chromeLabel && (
            <div className="mx-auto flex h-5 w-[55%] items-center justify-center rounded-full bg-[#1e2638] px-3">
              <span className="font-['JetBrains_Mono'] text-[9px] text-gray-500 truncate">
                {chromeLabel}
              </span>
            </div>
          )}
        </div>
        {/* Screenshot */}
        <div className={`relative aspect-[16/9] w-full overflow-hidden ${screen.background}`}>
          <Image
            src={screen.src}
            alt={alt}
            fill
            sizes={sizes}
            unoptimized
            className={`object-${objectFit} object-top`}
          />
        </div>
      </div>
    );
  }

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
          className={`object-${objectFit} object-top`}
        />
      </div>
    </div>
  );
}
