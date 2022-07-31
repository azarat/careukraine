import ProductsItem from "./ProductsItem"
import { _products } from "../../data/products.json"

const Products = () => {

    return (
        <div className='container products'>
            {_products.map((p) =>
                <ProductsItem product={p} key={p.alias} />
            )}
        </div>
    )
}

export default Products