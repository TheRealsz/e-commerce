import CardProducts from "../../ProductCard/CardProducts"
import jsonData from '../../../data/mock.json'
import left from '../../../assets/icons/left.svg'
import right from '../../../assets/icons/right.svg'
import { useState } from "react"

const CarouselCard = () => {

    const product = jsonData.products
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {        
        const nextIndex = currentIndex + 3;
        if (nextIndex < 6) {
            setCurrentIndex(nextIndex);
        } else {
            return
        }
    };

    const prevSlide = () => {
        const prevIndex = currentIndex - 3;
        if (prevIndex >= 0) {
            setCurrentIndex(prevIndex);
        } else {
            return
        }
    };


    return (
        <div className="flex items-center gap-4 relative">
            <div className="absolute -left-24 cursor-pointer">
                <img src={left} alt="Anterior" onClick={prevSlide} />
            </div>
            <div className="flex justify-center items-center gap-8 rounded-2xl">
                {
                    product.slice(currentIndex, currentIndex + 3).map((bp, i) => {
                        if (!bp.best) {
                            return null;
                        }
                        return (
                            <CardProducts
                                key={i}
                                img={bp.imgPath[0]}
                                productName={bp.name}
                                productPrice={bp.price}
                                id={bp.id}
                            />
                        );
                    })
                }
            </div>
            <div className="absolute -right-24 cursor-pointer">
                <img src={right} alt="Proximo" onClick={nextSlide} />
            </div>
        </div>
    )
}

export default CarouselCard