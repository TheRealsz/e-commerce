import { useNavigate, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import back from "../assets/icons/back.svg"
import { Box, Modal, Typography } from "@mui/material"
import left from "../assets/icons/left.svg"
import right from "../assets/icons/right.svg"
import note from "../assets/noteProduct.png"
import leftCounter from "../assets/icons/leftCounter.svg"
import rightCounter from "../assets/icons/rightCounter.svg"
import share from "../assets/icons/share.svg"
import openNote from "../assets/openNote.png"
import { useState } from 'react'
import jsonData from "../data/mock.json"


// Ver o que da pra componentizar

const Product = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState<number>(1)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const products = jsonData.products

    const { productId } = useParams();


    const product = products.find((p) => p.id === parseInt(productId));

    const baseUrl = import.meta.env.BASE_URL


    return (
        <div className="w-full flex flex-col items-center gap-16 shrink-0 bg-white">
            <div className="w-full flex flex-col justify-center items-center gap-12">
                <Navbar />
                <div className="w-main flex flex-col items-start gap-6">
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex p-14 flex-col items-start gap-3 outline-none bg-white rounded-2xl shadow-2xl">
                            <div className="flex justify-center items-center gap-6">
                                <div className="flex flex-col justify-end items-center self-stretch">
                                    <div className="flex flex-col justify-center items-center h-full gap-4 self-stretch">
                                        <div className="flex w-32 h-32 p-3 justify-end items-end gap-3">
                                            <img src={`${baseUrl}${product?.imgPath}`} alt="" className="w-full h-full rounded-2xl" />
                                        </div>
                                        <div className="flex w-24 h-24 p-3 justify-end items-end gap-3">
                                            <img src={`${baseUrl}${product?.imgPath}`} alt="" className="w-full h-full rounded-2xl opacity-80" />
                                        </div>
                                        <div className="flex w-24 h-24 p-3 justify-end items-end gap-3">
                                            <img src={`${baseUrl}${product?.imgPath}`} alt="" className="w-full h-full rounded-2xl opacity-80" />
                                        </div>
                                        <div className="flex w-24 h-24 p-3 justify-end items-end gap-3">
                                            <img src={`${baseUrl}${product?.imgPath}`} alt="" className="w-full h-full rounded-2xl opacity-80" />
                                        </div>
                                        <div className="flex w-24 h-24 p-3 justify-end items-end gap-3">
                                            <img src={`${baseUrl}${product?.imgPath}`} alt="" className="w-full h-full rounded-2xl opacity-80" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-modalPhoto h-modalPhoto relative">
                                    <img src={`${baseUrl}${product?.imgPath}`} alt="" className="flex w-full h-full justify-center items-center shrink-0 rounded-lg" />
                                    <div className="absolute right-7 bottom-7">    
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M11.2 0C10.2933 0 9.6 0.693333 9.6 1.6V9.6H1.6C0.693333 9.6 0 10.2933 0 11.2C0 12.1067 0.693333 12.8 1.6 12.8H11.2C12.1067 12.8 12.8 12.1067 12.8 11.2V1.6C12.8 0.693333 12.1067 0 11.2 0Z" fill="#EA3458" />
                                            <path d="M30.4 9.6H22.4V1.6C22.4 0.693333 21.7067 0 20.8 0C19.8933 0 19.2 0.693333 19.2 1.6V11.2C19.2 12.1067 19.8933 12.8 20.8 12.8H30.4C31.3067 12.8 32 12.1067 32 11.2C32 10.2933 31.3067 9.6 30.4 9.6Z" fill="#EA3458" />
                                            <path d="M30.4 19.2002H20.8C19.8933 19.2002 19.2 19.8935 19.2 20.8002V30.4002C19.2 31.3069 19.8933 32.0002 20.8 32.0002C21.7067 32.0002 22.4 31.3069 22.4 30.4002V22.4002H30.4C31.3067 22.4002 32 21.7069 32 20.8002C32 19.8935 31.3067 19.2002 30.4 19.2002Z" fill="#EA3458" />
                                            <path d="M11.2 19.2002H1.6C0.693333 19.2002 0 19.8935 0 20.8002C0 21.7069 0.693333 22.4002 1.6 22.4002H9.6V30.4002C9.6 31.3069 10.2933 32.0002 11.2 32.0002C12.1067 32.0002 12.8 31.3069 12.8 30.4002V20.8002C12.8 19.8935 12.1067 19.2002 11.2 19.2002Z" fill="#EA3458" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
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
                                    <img src={left} alt="" />
                                    <div className="flex w-142 h-142 justify-end items-end shrink-0 rounded-2xl opacity-80 relative">
                                        <img src={`${baseUrl}${product?.imgPath}`} className="object-cover rounded-2xl w-full h-full " />
                                        <div className="shrink-0 absolute bottom-6 right-6 cursor-pointer" onClick={handleOpen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M11.2 0H1.6C0.693333 0 0 0.693333 0 1.6V11.2C0 12.1067 0.693333 12.8 1.6 12.8C2.50667 12.8 3.2 12.1067 3.2 11.2V3.2H11.2C12.1067 3.2 12.8 2.50667 12.8 1.6C12.8 0.693333 12.1067 0 11.2 0Z" fill="#EA3458" />
                                                <path d="M30.4 0H20.8C19.8933 0 19.2 0.693333 19.2 1.6C19.2 2.50667 19.8933 3.2 20.8 3.2H28.8V11.2C28.8 12.1067 29.4933 12.8 30.4 12.8C31.3066 12.8 32 12.1067 32 11.2V1.6C32 0.693333 31.3066 0 30.4 0Z" fill="#EA3458" />
                                                <path d="M30.4 19.2002C29.4933 19.2002 28.8 19.8935 28.8 20.8002V28.8002H20.8C19.8933 28.8002 19.2 29.4935 19.2 30.4002C19.2 31.3069 19.8933 32.0002 20.8 32.0002H30.4C31.3066 32.0002 32 31.3069 32 30.4002V20.8002C32 19.8935 31.3066 19.2002 30.4 19.2002Z" fill="#EA3458" />
                                                <path d="M11.2 28.8002H3.2V20.8002C3.2 19.8935 2.50667 19.2002 1.6 19.2002C0.693333 19.2002 0 19.8935 0 20.8002V30.4002C0 31.3069 0.693333 32.0002 1.6 32.0002H11.2C12.1067 32.0002 12.8 31.3069 12.8 30.4002C12.8 29.4935 12.1067 28.8002 11.2 28.8002Z" fill="#EA3458" />
                                            </svg>
                                        </div>
                                    </div>
                                    <img src={right} alt="" />
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
                                                    <img src={leftCounter} alt="" onClick={() => setItems(items - 1)} />
                                                </div>
                                                <Typography variant="subtitle1" className="text-preto-3">{items}</Typography>
                                                <div className="flex w-4 h-4 justify-center items-center gap-2">
                                                    <img src={rightCounter} alt="" onClick={() => setItems(items + 1)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-6 self-stretch">
                                        <button className="flex h-12 px-6 justify-center items-center gap-3 self-stretch rounded-input -bg-uppy-rosa shadow-Elev">
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