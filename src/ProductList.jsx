import { useCartStore } from "./store/cartStore";

const ProductList = ({products}) => {
    const addToCart = useCartStore((state) => state.addToCart)
    return (
        <div>
    
    {
        products?.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button onClick={() => addToCart(product)}>
                    Add to Cart
                </button>

            </div>
        ))
    }
        </div>
    );
};

export default ProductList;