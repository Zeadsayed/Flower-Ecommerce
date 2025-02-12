export interface ProductRes {
    message: string
    product: Product
  }
  
  export interface Product {
    _id: string
    title: string
    slug: string
    description: string
    imgCover: string
    images: string[]
    price: number
    priceAfterDiscount: number
    quantity: number
    category: string
    occasion: string
    createdAt: string
    updatedAt: string
    __v: number
    discount: number
    sold: number
    rateAvg: number
    rateCount: number
    id: string
  }
  