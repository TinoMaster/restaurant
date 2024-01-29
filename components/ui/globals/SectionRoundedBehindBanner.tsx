import { LoadingCategories } from '@/components/pages/profile/admin/categories/loadings/LoadingCategories'
import { Suspense } from 'react'

interface SectionRoundedBehindBannerProps {
   children: React.ReactNode
}

export const SectionRoundedBehindBanner = ({
   children,
}: SectionRoundedBehindBannerProps) => {
   return (
      <article className="container py-10 px-6 rounded-3xl relative z-10 bg-darkMode shadow-md shadow-black/50 bg-gradient-to-b from-darkMode via-pri-400/10 to-darkMode">
         <Suspense fallback={<LoadingCategories />}>{children}</Suspense>
      </article>
   )
}
