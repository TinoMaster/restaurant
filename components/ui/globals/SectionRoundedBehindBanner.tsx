import { Suspense } from 'react'

interface SectionRoundedBehindBannerProps {
   children: React.ReactNode
}

export const SectionRoundedBehindBanner = ({
   children,
}: SectionRoundedBehindBannerProps) => {
   return (
      <article className="container py-10 px-6 rounded-3xl relative lg:-translate-y-20 z-10 bg-darkMode">
         <Suspense fallback={<div className='text-white animate-bounce'>Loading...</div>}>{children}</Suspense>
      </article>
   )
}
