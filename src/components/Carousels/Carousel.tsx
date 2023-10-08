import Banner from "../../assets/frame.png"

// Use React Material UI Carousel

const Carousel = () => {
    return (
        <div className="flex w-BannerVant flex-col items-start gap-10">
            <div className="flex w-full flex-col items-center gap-6">
                <div className="flex w-full h-Banner justify-center items-center">
                    <img src={Banner} alt="Imagem de um notebook" className="rounded-2xl w-full h-full shrink-0 bg-cover bg-no-repeat" />
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex gap-2 items-center">
                        <span className="w-3 h-3 rounded-full cursor-pointer border -bg-uppy-rosa -border-uppy-rosa"></span>
                        <span className="w-2 h-2 rounded-full cursor-pointer border -border-uppy-azul-4"></span>
                        <span className="w-2 h-2 rounded-full cursor-pointer border -border-uppy-azul-4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel