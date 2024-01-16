import { categoryAdapter } from '@/adapters/CategoryAdapter'
import { ServerResponse } from '@/types/api_responses'
import toast from 'react-hot-toast'
import { createCategory } from './actions/category.actions'

class Category {
   async getCategories() {
      const url = `${process.env.NEXTAUTH_URL}/api/categories`
      const res = await fetch(url, { cache: 'no-store' })

      if (!res.ok) throw new Error('Failed to fetch data')

      const server_response: ServerResponse = await res.json()
      const docs = categoryAdapter(server_response)
      return docs
   }

   async getCategoryById(id: string) {
      const url = `${process.env.NEXTAUTH_URL}/api/categories/${id}`
      const res = await fetch(url, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
         cache: 'no-store',
      })

      if (!res.ok) return false

      const server_response: ServerResponse = await res.json()
      const docs = categoryAdapter(server_response)
      return docs
   }
}

export const category = new Category()
