export const useStore = () => {
    const products = useState('product', () => [])
    const search_products = useState('search_product', () => [])



    return {
        products,
        search_products
    }

}


