import Banner from "../../assets/frame.png"
import SetupFull from "../../assets/setup_full.jpg"
import Setup from "../../assets/setup.jpg"
import { useEffect, useState } from "react"

// Use React Material UI Carousel

const Carousel = () => {
    const slides = [Banner, SetupFull, Setup]
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const goToSlide = (index : number) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % slides.length);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [currentIndex]);

    return (
        <div className="flex w-main flex-col items-start gap-10">
            <div className="flex w-full flex-col items-center gap-6">
                <div className="flex w-full h-Banner justify-center items-center">
                    <img src={slides[currentIndex]} alt="Imagem de um notebook" className="rounded-2xl w-full h-full shrink-0 object-cover bg-no-repeat" />
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex gap-2 items-center">
                        {
                            slides.map((slide, index) => (
                                <span key={index} className={`rounded-full cursor-pointer ${index == currentIndex ? "border -bg-uppy-rosa -border-uppy-rosa w-3 h-3" : "border -border-uppy-azul-4 w-2 h-2"}`} onClick={() => goToSlide(index)}></span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel