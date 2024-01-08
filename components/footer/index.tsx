import { NewsLetter } from '../ui/NewsLetter'
import { FooterLinksGroup } from './FooterLinksGroup'
import { footerLinks } from '@/constants/footer'
import { FooterEnd } from './FooterEnd'

const Footer = () => {
   return (
      <footer className="text-gray-400 bg-lightDarkMode/50 body-font">
         <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
               {footerLinks.map((group) => (
                  <div
                     key={group.category}
                     className="lg:w-1/4 md:w-1/2 w-full px-4"
                  >
                     <FooterLinksGroup group={group} />
                  </div>
               ))}
               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <NewsLetter />
               </div>
            </div>
         </div>
         <div className="bg-lightDarkMode">
            <FooterEnd />
         </div>
      </footer>
   )
}

export default Footer
