import { Input } from '@/components/ui/elements/Input'

export const InputName = ({
   name,
   onChange,
}: {
   name: string
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
   return <Input label="Nome" value={name} name="name" onChange={onChange} />
}
