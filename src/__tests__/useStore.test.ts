import { UseStore } from '../modules/useStore'
import Products from './__mock__/products.data.ts'
import * as process from "process";

describe('UseStore', () => {
    beforeAll(() => {
        process.env.tenant = 'Brazil'
        process.env.state = 'Minas Gerais'
    })

    test('reversedProducts getter returns the products array reversed and not affects the origin products.', () => {
        const store = new UseStore(Products)

        const initialProducts = store.products.slice()

        // Check if the reversedProducts is the products reversed.
        expect(store.reversedProducts).toEqual(initialProducts.slice().reverse())

        // Check if the "store.products" is not affected by this getter.
        expect(store.products).toEqual(initialProducts)
    })

    test('we can get the currency and tax by tenant and state.', () => {
        const store = new UseStore()

        expect(store.currency).toEqual('BRL')
        expect(store.tax).toEqual(87)
    })
})