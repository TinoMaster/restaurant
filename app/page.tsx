import { AboutUs } from "@/components/AboutUs";
import { BannerBussines } from "@/components/BannerBussines";
import { BannerContent } from "@/components/BannerContent";
import { BannerPage } from "@/components/BannerPage";
import { LinkButton } from "@/components/buttons/LinkButton";
import { PreferMenu } from "@/components/PreferMenu";
import { SectionRoundedBehindBanner } from "@/components/SectionRoundedBehindBanner";
import { Wy_US } from "@/components/Wy-Us";
import { bannerContent } from "@/data/bannerContent";
import { firstPathnameMenuPage } from "@/data/links_navbar";
import { banner_homePage, banner_homePageMovil } from "@/utils/images";

export default function Home() {
  return (
    <>
      <BannerPage
        imageDesktop={banner_homePage}
        imagemovil={banner_homePageMovil}
      >
        <div className="gradient"></div>
        <BannerContent
          title={bannerContent.home.title}
          subtitle={bannerContent.home.subtitle}
        >
          <LinkButton href={firstPathnameMenuPage} title="Menu" />
        </BannerContent>
      </BannerPage>
      <SectionRoundedBehindBanner>
        <div className="gradient"></div>
        <Wy_US />
      </SectionRoundedBehindBanner>
      <section className="bg-primary/10 py-10 lg:py-20">
        <AboutUs />
      </section>
      <PreferMenu />
      <BannerBussines />
    </>
  );
}
