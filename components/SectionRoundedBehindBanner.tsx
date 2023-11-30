interface SectionRoundedBehindBannerProps {
  children: React.ReactNode;
}

export const SectionRoundedBehindBanner = ({
  children,
}: SectionRoundedBehindBannerProps) => {
  return (
    <article className="py-10 lg:py-20 px-2 lg:rounded-tr-[60px] rounded-tr-[40px] relative -translate-y-10 bg-darkMode z-10">
      {children}
    </article>
  );
};
