
const ProductList = ({products, setCart}) => {
    return (
        <div>
    
    {
        products?.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button onClick={() => setCart((cart) => [...cart, product])}>
                    Add to Cart
                </button>

            </div>
        ))
    }
        </div>
    );
};

export default ProductList;