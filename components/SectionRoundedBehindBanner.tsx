interface SectionRoundedBehindBannerProps {
  children: React.ReactNode;
}

export const SectionRoundedBehindBanner = ({
  children,
}: SectionRoundedBehindBannerProps) => {
  return (
    <article className="py-10 lg:py-20 px-2 rounded-tr-[50px] relative -translate-y-10 bg-gradient-to-b from-darkMode to-darkMode z-10">
      <div className="gradient"></div>
      {children}
    </article>
  );
};
