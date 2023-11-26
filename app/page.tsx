import { AboutUs } from "@/components/AboutUs";
import { BannerContent } from "@/components/BannerContent";
import { BannerPage } from "@/components/BannerPage";
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
        ></BannerContent>
      </BannerPage>
      <section className="flex flex-col gap-10">
        <SectionRoundedBehindBanner>
          <Wy_US />
        </SectionRoundedBehindBanner>
        <AboutUs />
      </section>
    </section>
  );
}
