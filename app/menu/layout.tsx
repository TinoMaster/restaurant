import { BannerContent } from "@/components/BannerContent";
import { BannerPage } from "@/components/BannerPage";
import { SectionRoundedBehindBanner } from "@/components/SectionRoundedBehindBanner";
import { NavBar_pageMenu } from "@/components/navs/NavBar_pageMenu";
import { img_PageMenu, img_PageMenuMovil } from "@/utils/images";
import React from "react";

export default function Menu({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <BannerPage imageDesktop={img_PageMenu} imagemovil={img_PageMenuMovil}>
        <BannerContent
          title="Prueba"
          subtitle="Esto es una prueba"
        ></BannerContent>
      </BannerPage>
      <SectionRoundedBehindBanner>
        <NavBar_pageMenu />
      </SectionRoundedBehindBanner>
      <div className="min-h-[500px] container pb-10">{children}</div>
    </section>
  );
}
