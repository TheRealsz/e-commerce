import Navbar from "../components/Navbar"
import Banner from "../assets/frame.png"

const Home = () => {
    return (
            <div className="w-full flex flex-col items-center gap-16 shrink-0 bg-white">
                <div className="w-full flex flex-col justify-center items-center gap-12">
                    <Navbar />
                    <div className="flex w-BannerVant flex-col items-start gap-10">
                        <div className="flex w-full flex-col items-center gap-6">
                            <div className="flex w-full h-Banner justify-center items-center ">
                                <img src={Banner} alt="Imagem de um notebook" className="rounded-2xl w-full h-full shrink-0" />
                            </div>
                            <div className="w-full flex justify-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Home