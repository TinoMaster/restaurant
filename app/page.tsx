import { AboutUs } from "@/components/AboutUs";
import { BannerBussines } from "@/components/BannerBussines";
import { HeroPageContent } from "@/components/HeroPageContent";
import { HeroPage } from "@/components/HeroPage";
import { LinkButton } from "@/components/buttons/LinkButton";
import { PreferMenu } from "@/components/PreferMenu";
import { SectionRoundedBehindBanner } from "@/components/SectionRoundedBehindBanner";
import { Testimonials } from "@/components/Testimonials";
import { Wy_US } from "@/components/Wy-Us";
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
