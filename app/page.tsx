import { AboutUs } from "@/components/AboutUs";
import { BannerBussines } from "@/components/BannerBussines";
import { BannerContent } from "@/components/BannerContent";
import { BannerPage } from "@/components/BannerPage";
import { LinkButton } from "@/components/LinkButton";
import { PreferMenu } from "@/components/PreferMenu";
import { SectionRoundedBehindBanner } from "@/components/SectionRoundedBehindBanner";
import { Wy_US } from "@/components/Wy-Us";
import { bannerContent } from "@/data/bannerContent";
import { banner_homePage, banner_homePageMovil } from "@/utils/images";

export default function Home() {
  return (
    <section>
      <BannerPage
        imageDesktop={banner_homePage}
        imagemovil={banner_homePageMovil}
      >
        <BannerContent
          title={bannerContent.home.title}
          subtitle={bannerContent.home.subtitle}
        >
          <LinkButton href="/menu" title="Menu"/>
        </BannerContent>
      </BannerPage>
        <SectionRoundedBehindBanner>
          <Wy_US />
        </SectionRoundedBehindBanner>
        <section className="bg-primary/10 py-10 lg:py-20">
          <AboutUs />
        </section>
        <PreferMenu />
        <BannerBussines />
    </section>
  );
}
