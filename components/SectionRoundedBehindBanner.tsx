interface SectionRoundedBehindBannerProps {
  children: React.ReactNode;
}

export const SectionRoundedBehindBanner = ({
  children,
}: SectionRoundedBehindBannerProps) => {
  return (
    <article className="py-10 lg:py-20 px-2 lg:rounded-tr-[60px] rounded-tr-[40px] relative -translate-y-10 bg-gradient-to-b from-darkMode to-darkMode z-10">
      <div className="gradient inset-24"></div>
      {children}
    </article>
  );
};
