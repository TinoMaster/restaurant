interface SectionRoundedBehindBannerProps {
   children: React.ReactNode
}

export const SectionRoundedBehindBanner = ({
   children,
}: SectionRoundedBehindBannerProps) => {
   return (
      <article className="container py-10 px-6 rounded-3xl relative -translate-y-20 z-10 bg-darkMode">
         {children}
      </article>
   )
}
