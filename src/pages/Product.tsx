import { useNavigate, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import back from "../../public/assets/icons/back.svg"
import { Typography } from "@mui/material"
import left from "../../public/assets/icons/left.svg"
import right from "../../public/assets/icons/right.svg"
import leftCounter from "../../public/assets/icons/leftCounter.svg"
import rightCounter from "../../public/assets/icons/rightCounter.svg"
import share from "../../public/assets/icons/share.svg"
import expand from "../../public/assets/icons/expand.svg"
import openNote from "../../public/assets/openNote.png"
import { useState } from 'react'
import jsonData from "../data/mock.json"
import ModalImage from "../components/Modal/ModalImage"



const Product = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState<number>(1)
    const [open, setOpen] = useState(false);
    const products = jsonData.products

    const { productId } = useParams();

    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {        
        const nextImage = currentImage + 1;
        if (nextImage < 3) {
            setCurrentImage(nextImage);
        } else {
            return
        }
    };

    const prevSlide = () => {
        const prevImage = currentImage - 1;
        if (prevImage >= 0) {
            setCurrentImage(prevImage);
        } else {
            return
        }
    };

    const product = productId ? products.find((p) => p.id === parseInt(productId)) : null
    const imgArray: Array<string> | undefined = product?.imgPath

    const handleSubItem = () => {
        if (items == 0) {
            return
        }
        setItems(items - 1)
    }

    return (
        <div className="w-full flex flex-col items-center gap-16 shrink-0 bg-white">
            <div className="w-full flex flex-col justify-center items-center gap-12">
                <Navbar />
                <div className="w-main flex flex-col items-start gap-6">
                    <ModalImage open={open} setOpen={setOpen} imgArray={imgArray} currentImage={currentImage} setCurrentImage={setCurrentImage} />
                    <div className="flex py-2 px-0 items-center gap-4 cursor-pointer" onClick={() => navigate("/")}>
                        <div className="flex w-6 justify-between items-center">
                            <img src={back} alt="Voltar" />
                        </div>
                        <Typography variant="body2" className="-text-uppy-azul-3">Voltar</Typography>
                    </div>
                    <div className="flex flex-col items-start gap-16 self-stretch">
                        <div className="flex w-main items-center gap-8 bg-white">
                            <div className="flex flex-col justify-center items-center gap-4">
                                <div className="flex w-168 justify-between items-center">
                                    <img src={left} alt="Anterior" onClick={prevSlide} className="cursor-pointer"/>
                                    <div className="flex w-142 h-142 justify-end items-end shrink-0 rounded-2xl relative">
                                        <img src={`${imgArray ? imgArray[currentImage] : null}`} className="object-cover rounded-2xl w-full h-full " />
                                        <div className="shrink-0 absolute bottom-6 right-6 cursor-pointer hover:scale-110 transition-all" onClick={() => setOpen(true)}>
                                            <img src={expand} alt="Expandir" />
                                        </div>
                                    </div>
                                    <img src={right} alt="Proxima" onClick={nextSlide} className="cursor-pointer"/>
                                </div>
                            </div>
                            <div className="flex pt-10 pb-4 flex-col items-center gap-4 flex-text">
                                <div className="flex flex-col items-start gap-12 self-stretch">
                                    <div className="flex flex-col items-start gap-6 self-stretch">
                                        <Typography variant="h2" className="-text-uppy-azul">{product?.name}</Typography>
                                        <div className="flex justify-between items-center self-stretch">
                                            <div className="flex flex-col items-start gap-2">
                                                <Typography variant="h2" className="-text-uppy-rosa">R$ {product?.price}</Typography>
                                                <Typography variant="subtitle1" className="-text-uppy-azul-3">ou até {product?.installment}</Typography>
                                            </div>
                                            <div className="flex h-12 px-4 items-center gap-2 rounded-input border-2 border-solid -border-uppy-rosa">
                                                <div className="flex w-4 h-4 justify-center items-center gap-2">
                                                    <img src={leftCounter} alt="" onClick={handleSubItem} />
                                                </div>
                                                <Typography variant="subtitle1" className="text-preto-3">{items}</Typography>
                                                <div className="flex w-4 h-4 justify-center items-center gap-2">
                                                    <img src={rightCounter} alt="" onClick={() => setItems(items + 1)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-6 self-stretch">
                                        <button className="flex h-12 px-6 justify-center items-center gap-3 self-stretch rounded-input -bg-uppy-rosa shadow-Elev hover:-bg-uppy-rosa-2 transition-all">
                                            <Typography variant="subtitle1" className="text-white">Adicionar ao carrinho</Typography>
                                        </button>
                                        <div className="flex justify-between items-start self-stretch">
                                            <div className="flex py-2 justify-center items-center gap-2 w-full">
                                                <img src={share} alt="" />
                                                <Typography variant="subtitle2" className="-text-uppy-azul-2">Compartilhar</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-6 self-stretch">
                            <Typography variant="h2" className="-text-uppy-rosa self-stretch">Descrição do produto</Typography>
                            <Typography variant="subtitle1" className="-text-uppy-azul self-stretch" paragraph>{product?.description}</Typography>
                            <Typography variant="subtitle1" className="-text-uppy-azul self-stretch" paragraph>{product?.subDescription}</Typography>
                        </div>
                        <div className="flex justify-center items-center gap-8 self-stretch">
                            <div className="flex justify-center items-center">
                                <img src={openNote} alt="" className="rounded-2xl object-cover" />
                            </div>
                            <div className="flex flex-col items-start gap-6 flex-text">
                                <Typography variant="h2" className="-text-uppy-rosa">Ficha Técnica</Typography>
                                <div className="h-Divider self-stretch -bg-uppy-rosa"></div>
                                <div className="w-80">
                                    <Typography variant="subtitle1" className="-text-uppy-azul" paragraph>
                                        {product?.ficha}
                                    </Typography>
                                    <Typography variant="subtitle1" className="-text-uppy-azul" paragraph>
                                        At cras senectus ut sem enim nunc pellentesque vestibulum. Elit magna maecenas ac vitae massa arcu.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Product