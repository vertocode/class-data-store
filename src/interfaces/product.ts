export interface Product {
    value: number
    name: string
    type: string
    srcImg: string | string[]
    description?: string
    specification?: ProductSpecification[]
}

interface ProductSpecification {
    title: string
    items?: ProductSpecificationItem[]
}

interface ProductSpecificationItem {
    name: string
    srcImg?: string
    value?: number
}