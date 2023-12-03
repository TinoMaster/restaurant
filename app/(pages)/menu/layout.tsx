import { BannerContent } from "@/components/BannerContent";
import { HeroPage } from "@/components/HeroPage";
import { SectionRoundedBehindBanner } from "@/components/SectionRoundedBehindBanner";
import { TitleTypeMenu } from "@/components/TitleTypeMenu";
import { NavBar_pageMenu } from "@/components/navs/NavBar_pageMenu";
import { bannerContent } from "@/constants/bannerContent";
import { img_PageMenu, img_PageMenuMovil } from "@/utils/images";

export default function Menu({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeroPage imageDesktop={img_PageMenu} imagemovil={img_PageMenuMovil}>
        <BannerContent
          title={bannerContent.home.title}
          subtitle={bannerContent.home.subtitle}
        ></BannerContent>
      </HeroPage>
      <SectionRoundedBehindBanner>
        <NavBar_pageMenu />
      </SectionRoundedBehindBanner>
      <section className="min-h-[500px] container pb-10">
        <TitleTypeMenu />
        {children}
      </section>
    </section>
  );
}
