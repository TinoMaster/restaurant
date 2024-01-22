interface Statistics {
   total_sales: number
   favorites: number
   rating: number
}

interface HomeService {
   available: boolean
   delivery_cost: number
   estimated_delivery_time: string
}

interface Nutrition {
   calories: number
   protein: number
   fats: number
   carbohydrates: number
}

interface MenuItem {
   name: string
   type: string
   description: string
   ingredients: string[]
   price: number
   availability: boolean
   statistics: Statistics
   home_service: HomeService
   nutrition: Nutrition
   images: string[]
}
