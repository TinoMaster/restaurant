interface SectionRoundedBehindBannerProps {
  children: React.ReactNode;
}

export const SectionRoundedBehindBanner = ({
  children,
}: SectionRoundedBehindBannerProps) => {
  return (
    <article className="container py-10 px-6 rounded-md relative -translate-y-20 z-10 bg-gradient-to-tr from-primaryPal-800 via-primary to-primaryPal-800">
      {children}
    </article>
  );
};
