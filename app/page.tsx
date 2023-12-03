import { AboutUs } from "@/components/AboutUs";
import { BannerBussines } from "@/components/BannerBussines";
import { BannerContent } from "@/components/BannerContent";
import { HeroPage } from "@/components/HeroPage";
import { LinkButton } from "@/components/buttons/LinkButton";
import { PreferMenu } from "@/components/PreferMenu";
import { SectionRoundedBehindBanner } from "@/components/SectionRoundedBehindBanner";
import { Testimonials } from "@/components/Testimonials";
import { Wy_US } from "@/components/Wy-Us";
import { bannerContent } from "@/constants/bannerContent";
import { firstPathnameMenuPage } from "@/constants/links_navbar";
import { banner_homePage, banner_homePageMovil } from "@/utils/images";

export default function Home() {
  return (
    <>
      <HeroPage
        imageDesktop={banner_homePage}
        imagemovil={banner_homePageMovil}
      >
        <BannerContent
          title={bannerContent.home.title}
          subtitle={bannerContent.home.subtitle}
        >
          <LinkButton href={firstPathnameMenuPage} title="Menu" />
        </BannerContent>
      </HeroPage>
      <SectionRoundedBehindBanner>
        <div className="gradient"></div>
        <Wy_US />
      </SectionRoundedBehindBanner>
      <section className="bg-gradient-to-br from-primary/10 via-primary/20 to-primary/10 py-10 lg:py-20">
        <AboutUs />
      </section>
      <PreferMenu />
      <BannerBussines />
      <Testimonials />
    </>
  );
}
