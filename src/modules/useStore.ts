import { Product } from '@src/interfaces/product'

export class UseStore {
    products: Product[] = []
    currency: string = 'BRL'
    tax: number = 0

    constructor(products: Product[]) {
        this.products = products

        const tenant: string = process.env?.tenant || ''
        const state: string = process.env?.state || ''
        switch (tenant) {
            case 'United States':
                this.currency = 'USD'
                break
            case 'Australia':
                this.currency = 'AUD'
                break
            case 'Brazil':
                this.currency = 'BRL'
                break
            default:
                throw new Error('tenant not defined.')
        }
        switch (state) {
            case 'Sao Paulo':
                this.tax = 70
                break
            case 'Rio de Janeiro':
                this.tax = 90
                break
            case 'Minas Gerais':
                this.tax = 87
                break
            case 'Rio Grande do sul':
                this.tax = 50
                break
            default:
                throw new Error('state not defined.')
        }
    }

    get reversedProducts(): Product[] {
        return this.products.slice().reverse()
    }

    getProductsByType(type: string): Product[] {
        return this.products.filter(product => product.type === type)
    }
}