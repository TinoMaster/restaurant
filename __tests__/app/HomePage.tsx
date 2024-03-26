import { HeroPageContent } from '@/components/ui/globals/heroPage/HeroPageContent'
import { render, screen } from '@testing-library/react'

describe('HeroPageContent', () => {
   it('Renderizza correctamente el componente de HeroPage', () => {
      render(<HeroPageContent title="title" subtitle="subtitle" />)
      expect(screen.getByText('title')).toBeInTheDocument()
      expect(screen.getByText('subtitle')).toBeInTheDocument()
   })
})
