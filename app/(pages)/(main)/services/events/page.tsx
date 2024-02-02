import { EventCard } from '@/components/pages/services/events/EventCard'
import { SomeEventsPictures } from '@/components/pages/services/events/SomeEventsPictures'

export default function EventsPage() {
   return (
      <div className="w-full h-full">
         <h2 className="text-center pb-10 md:py-20">I Nostri Eventi</h2>
         <div className="">
            <EventCard />
         </div>
         <div className="py-20 container">
            <SomeEventsPictures />
         </div>
      </div>
   )
}
