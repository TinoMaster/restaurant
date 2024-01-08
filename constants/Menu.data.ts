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

export const preferMenuData: MenuItem[] = [
   {
      name: 'Pasta Carbonara',
      type: 'Main',
      description:
         'Delicious pasta with carbonara sauce, made with eggs, parmesan cheese, bacon, and black pepper.',
      ingredients: [
         'Pasta',
         'Eggs',
         'Parmesan Cheese',
         'Bacon',
         'Black Pepper',
      ],
      price: 12.99,
      availability: true,
      statistics: {
         total_sales: 150,
         favorites: 45,
         rating: 4.8,
      },
      home_service: {
         available: true,
         delivery_cost: 2.99,
         estimated_delivery_time: '30-45 minutes',
      },
      nutrition: {
         calories: 550,
         protein: 15,
         fats: 25,
         carbohydrates: 65,
      },
      images: ['image_url_1', 'image_url_2'],
   },
   {
      name: 'Pasta Carbonara',
      type: 'Main',
      description:
         'Delicious pasta with carbonara sauce, made with eggs, parmesan cheese, bacon, and black pepper.',
      ingredients: [
         'Pasta',
         'Eggs',
         'Parmesan Cheese',
         'Bacon',
         'Black Pepper',
      ],
      price: 12.99,
      availability: true,
      statistics: {
         total_sales: 150,
         favorites: 45,
         rating: 4.8,
      },
      home_service: {
         available: true,
         delivery_cost: 2.99,
         estimated_delivery_time: '30-45 minutes',
      },
      nutrition: {
         calories: 550,
         protein: 15,
         fats: 25,
         carbohydrates: 65,
      },
      images: ['image_url_1', 'image_url_2'],
   },
   {
      name: 'Pasta Carbonara',
      type: 'Main',
      description:
         'Delicious pasta with carbonara sauce, made with eggs, parmesan cheese, bacon, and black pepper.',
      ingredients: [
         'Pasta',
         'Eggs',
         'Parmesan Cheese',
         'Bacon',
         'Black Pepper',
      ],
      price: 12.99,
      availability: true,
      statistics: {
         total_sales: 150,
         favorites: 45,
         rating: 4.8,
      },
      home_service: {
         available: true,
         delivery_cost: 2.99,
         estimated_delivery_time: '30-45 minutes',
      },
      nutrition: {
         calories: 550,
         protein: 15,
         fats: 25,
         carbohydrates: 65,
      },
      images: ['image_url_1', 'image_url_2'],
   },
   {
      name: 'Pasta Carbonara',
      type: 'Main',
      description:
         'Delicious pasta with carbonara sauce, made with eggs, parmesan cheese, bacon, and black pepper.',
      ingredients: [
         'Pasta',
         'Eggs',
         'Parmesan Cheese',
         'Bacon',
         'Black Pepper',
      ],
      price: 12.99,
      availability: true,
      statistics: {
         total_sales: 150,
         favorites: 45,
         rating: 4.8,
      },
      home_service: {
         available: true,
         delivery_cost: 2.99,
         estimated_delivery_time: '30-45 minutes',
      },
      nutrition: {
         calories: 550,
         protein: 15,
         fats: 25,
         carbohydrates: 65,
      },
      images: ['image_url_1', 'image_url_2'],
   },
]
