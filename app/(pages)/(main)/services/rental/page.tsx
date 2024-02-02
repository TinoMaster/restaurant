import { About } from '@/components/pages/services/rental/About'
import { ContactUs } from '@/components/pages/services/rental/ContactUs'
import { FrequentlyQuestions } from '@/components/pages/services/rental/FrequentlyQuestions'

export default function RentalPage() {
   return (
      <div className="">
         <div className="py-10 lg:py-20">
            <About />
         </div>
         <div className="py-10 lg:py-20">
            <ContactUs />
         </div>
         <div className="py-10 lg:py-20">
            <FrequentlyQuestions />
         </div>
      </div>
   )
}
