import { RenderAddresses } from '@/components/pages/profile/address/RenderAddresses'
import { RenderAddressesFallback } from '@/components/pages/profile/address/RenderAddresses.fallback'
import { Suspense } from 'react'

export default function AddressPage() {
   return (
      <Suspense fallback={<RenderAddressesFallback />}>
         <RenderAddresses />
      </Suspense>
   )
}
