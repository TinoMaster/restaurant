import { AboutUs } from "@/components/pages/home/AboutUs";
import { BannerBussines } from "@/components/pages/home/BannerBussines";
import { HeroPageContent } from "@/components/ui/HeroPageContent";
import { HeroPage } from "@/components/ui/HeroPage";
import { LinkButton } from "@/components/ui/buttons/LinkButton";
import { PreferMenu } from "@/components/pages/home/PreferMenu";
import { SectionRoundedBehindBanner } from "@/components/ui/SectionRoundedBehindBanner";
import { Testimonials } from "@/components/pages/home/Testimonials";
import { Wy_US } from "@/components/pages/home/Wy-Us";
import { bannerContent } from "@/constants/bannerContent";
import { firstPathnameMenuPage } from "@/constants/links_navbar";
import { img_PageMenu, img_PageMenuMovil } from "@/utils/images";

export default function Home() {
  return (
    <>
      <HeroPage imageDesktop={img_PageMenu} imagemovil={img_PageMenuMovil}>
        <HeroPageContent
          title={bannerContent.home.title}
          subtitle={bannerContent.home.subtitle}
        >
          <LinkButton href={firstPathnameMenuPage} title="Menu" />
        </HeroPageContent>
      </HeroPage>
      <SectionRoundedBehindBanner>
        <Wy_US />
      </SectionRoundedBehindBanner>
      <AboutUs />
      <PreferMenu />
      <BannerBussines />
      <Testimonials />
    </>
  );
}
