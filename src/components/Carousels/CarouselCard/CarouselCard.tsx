import CardProducts from "../../CardProducts"
import jsonData from '../../../data/mock.json'
import left from '../../../assets/icons/left.svg'
import right from '../../../assets/icons/right.svg'

const CarouselCard = () => {

    const bestProducts = jsonData.bestProducts

    return (
        <div className="flex items-center gap-4 relative">
            <div className="absolute -left-24 cursor-pointer">
                <img src={left} alt="" />
            </div>
            <div className="flex justify-center items-center gap-8 rounded-2xl">
            {
                    bestProducts.map((bp) => {
                        return (
                            <CardProducts
                                key={bp.id}
                                img={bp.imgPath}
                                productName={bp.name}
                                productPrice={bp.price} />
                        )
                    })
                }
            </div>
            <div className="absolute -right-24 cursor-pointer">
                <img src={right} alt="" />
            </div>
        </div>
    )
}

export default CarouselCard