export type ProductCondition = "new" | "used"
export interface Product {
  id: string
  title: string
  price: {
    currency: string
    amount: string
    decimals: string
  }
  picture: string
  condition: ProductCondition
  free_shipping: boolean
  sold_quantity: number
  description: string
  categories: string[]
}
