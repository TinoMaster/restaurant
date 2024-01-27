import { SERVICES_NAVIGATION } from '@/constants/pages/services'
import { CardService } from './CardService'

export const ChoiceService = () => {
   return (
      <div className="text-white space-y-5">
         <h2 className="text-center text-primary">Our Services</h2>
         <div className="grid grid-cols-3 gap-4">
            {SERVICES_NAVIGATION.map(({ title, href, Icon }) => (
               <CardService
                  key={title}
                  title={title}
                  href={href}
                  Icon={<Icon />}
               />
            ))}
         </div>
      </div>
   )
}
