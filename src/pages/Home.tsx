import Carousel from "../components/Carousels/Carousel"
import CarouselCard from "../components/Carousels/CarouselCard/CarouselCard"
import Navbar from "../components/Navbar"
import SectionTitle from "../components/SectionTitle"
import Desktop from "../assets/imageDesktop.png"
import Star from "../assets/star.svg"
import Store from "../assets/store.svg"
import ProductsList from "../components/ProductsList"
import House from "../assets/house.svg"
import QuemSomos from "../assets/quemSomos.png"
import { Typography } from "@mui/material"

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center gap-16 shrink-0 bg-white">
            <div className="w-full flex flex-col justify-center items-center gap-12">
                <Navbar />
                <div className="w-main flex flex-col gap-6 items-center">
                    <Carousel />
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col justify-center items-center gap-8 self-stretch">
                            <SectionTitle title="Destaques" icon={Star} />
                            <CarouselCard />
                        </div>
                        <div>
                            <img src={Desktop} className="flex rounded-2xl w-full" />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <SectionTitle title="Produtos" icon={Store} />
                            <ProductsList />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-4 self-stretch">
                            <SectionTitle title="Quem somos" icon={House} />
                            <div className="flex items-center gap-8 self-stretch">
                                <div className="flex-text">
                                    <Typography variant="body2" color={"#222"}>
                                        Lorem ipsum dolor sit amet consectetur. Risus
                                        lacinia proin tortor sit. Tellus purus in quis
                                        maecenas amet pretium. In metus morbi bibendum
                                        facilisis ultrices ipsum. Cras quis tellus
                                        velit eget id risus imperdiet vitae. Et
                                        vivamus sagittis enim metus pretium eros
                                        sit nibh. Euismod phasellus natoque malesuada enim.
                                    </Typography>
                                </div>
                                <div className="flex w-93 h-60 justify-center items-center">
                                    <img src={QuemSomos} alt="Mulher numa loja" className="flex-shrink-0 bg-cover bg-no-repeat rounded-2xl"/>
                                </div>
                                <div className="flex flex-col items-center gap-16 self-stretch">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home