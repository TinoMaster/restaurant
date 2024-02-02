import { ContactUs } from '@/components/pages/services/rental/ContactUs'
import { FrequentlyQuestions } from '@/components/pages/services/rental/FrequentlyQuestions'

export default function RentalPage() {
   return (
      <div className="">
         <h1 className="text-center text-3xl">Rental</h1>
         <div className="py-10 lg:py-20">
            <FrequentlyQuestions />
         </div>
         <div className="py-10 lg:py-20">
            <ContactUs />
         </div>
      </div>
   )
}
