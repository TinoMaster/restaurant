import { BannerContent } from "@/components/BannerContent";
import { BannerPage } from "@/components/BannerPage";
import { SectionRoundedBehindBanner } from "@/components/SectionRoundedBehindBanner";
import { TitleTypeMenu } from "@/components/TitleTypeMenu";
import { NavBar_pageMenu } from "@/components/navs/NavBar_pageMenu";
import { bannerContent } from "@/data/bannerContent";
import { img_PageMenu, img_PageMenuMovil } from "@/utils/images";

export default function Menu({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <BannerPage imageDesktop={img_PageMenu} imagemovil={img_PageMenuMovil}>
        <BannerContent
          title={bannerContent.home.title}
          subtitle={bannerContent.home.subtitle}
        ></BannerContent>
      </BannerPage>
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
