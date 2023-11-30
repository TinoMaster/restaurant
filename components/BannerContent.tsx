import { bannerBigTittle, bannerTittle } from "@/utils/animations/framers";
import LoadingBannerContent from "./loaders/loadingBannerContent";
import { MotionDiv, MotionP } from "./MotionDiv";

interface BannerContentProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}
export const BannerContent = ({
  title,
  subtitle,
  children,
}: BannerContentProps) => {
  return (
    <div className="flex flex-col text-white w-11/12 lg:w-1/3 h-full justify-center items-center relative">
      <LoadingBannerContent />
      <MotionP
        variants={bannerTittle}
        initial="initial"
        animate="animate"
        className="text-slate-300 text-lg lg:text-xl"
      >
        {title}
      </MotionP>
      <MotionP
        variants={bannerBigTittle}
        initial="initial"
        animate="animate"
        className="text-4xl md:text-5xl text-center italic"
      >
        {subtitle}
      </MotionP>
      <MotionDiv
        variants={bannerTittle}
        initial="initial"
        animate="animate"
        className="py-4 z-20 flex flex-col justify-center items-center"
      >
        {children}
      </MotionDiv>
    </div>
  );
};
