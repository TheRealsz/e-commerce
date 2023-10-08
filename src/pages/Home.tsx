import Carousel from "../components/Carousels/Carousel"
import CarouselCard from "../components/Carousels/CarouselCard/CarouselCard"
import Navbar from "../components/Navbar"
import SectionTitle from "../components/SectionTitle"
import Desktop from "../assets/imageDesktop.png"
import Star from "../assets/star.svg"
import Store from "../assets/store.svg"
import ProductsList from "../components/ProductsList"

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center gap-16 shrink-0 bg-white">
            <div className="w-full flex flex-col justify-center items-center gap-12">
                <Navbar />
                <div className="flex flex-col gap-6 items-center">
                    <Carousel />
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col justify-center items-center gap-8 self-stretch">
                            <SectionTitle title="Destaques" icon={Star}/>
                            <CarouselCard />
                        </div>
                        <div className="">
                            <img src={Desktop} className="flex rounded-2xl w-full" />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <SectionTitle title="Produtos" icon={Store} />
                            <ProductsList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home