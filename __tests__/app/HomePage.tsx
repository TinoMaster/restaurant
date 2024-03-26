import { HeroPageContent } from '@/components/ui/globals/heroPage/HeroPageContent'
import { CONTACT_PAGE } from '@/constants/routes.app'
import { render, screen } from '@testing-library/react'
import { FaLocationDot } from 'react-icons/fa6'

describe('HeroPageContent', () => {
   const renderComponent = () =>
      render(
         <HeroPageContent title="title" subtitle="subtitle">
            <div className="col-span-2">
               <a
                  href={`http://localhost${CONTACT_PAGE}`}
                  className="w-full flex flex-col justify-center items-center gap-2"
               >
                  <button className="rounded-lg border-primary shadow-md shadow-black/40 border p-3 relative gap-1 flex justify-center items-center bg-gradient-to-tr from-primary/30 to-black/70">
                     <FaLocationDot className="w-7 h-7 text-gray-200 absolute -top-4" />
                     <p className="text-xl">Come arrivare</p>
                  </button>
               </a>
            </div>
         </HeroPageContent>
      )

   it('Renderizza correctamente el titulo y el subtitulo', () => {
      renderComponent()
      expect(screen.getByText('title')).toBeInTheDocument()
      expect(screen.getByText('subtitle')).toBeInTheDocument()
   })

   it('Renderizza correctamente el componente LinkButton que es un children', () => {
      renderComponent()
      expect(screen.getByText(/Come arrivare/i)).toBeInTheDocument()
   })
})
