import CardProducts from "./CardProducts"
import jsonData from "../data/mock.json"

const ProductsList = () => {
    const products = jsonData.products 
    return (
        <div className="flex flex-col items-center gap-3.5 self-stretch">
            <div className="flex justify-center items-center content-center gap-8 self-stretch flex-wrap">
            {
                    products.map((product) => {
                        return (
                            <CardProducts
                                key={product.id}
                                img={product.imgPath}
                                productName={product.name}
                                productPrice={product.price}
                                width="16.75rem"
                                height="20.93rem"/>
                        )
                    })
                } 
            </div>
        </div>
    )
}

export default ProductsList