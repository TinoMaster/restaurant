import { HeroPageContent } from "@/components/ui/HeroPageContent";
import { HeroPage } from "@/components/ui/HeroPage";
import { SectionRoundedBehindBanner } from "@/components/ui/SectionRoundedBehindBanner";
import { TitleTypeMenu } from "@/components/helpers/TitleTypeMenu";
import { NavBar_pageMenu } from "@/components/navs/NavBar_pageMenu";
import { bannerContent } from "@/constants/bannerContent";
import { img_PageMenu, img_PageMenuMovil } from "@/utils/images";

export default function Menu({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeroPage imageDesktop={img_PageMenu} imagemovil={img_PageMenuMovil}>
        <HeroPageContent
          title={bannerContent.home.title}
          subtitle={bannerContent.home.subtitle}
        ></HeroPageContent>
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
