import { Modal } from "@mui/material"
import {  Dispatch, SetStateAction } from 'react'

interface IModalImage {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    imgArray: Array<string>,
    currentImage: number,
    setCurrentImage: Dispatch<SetStateAction<number>>
}


const ModalImage = ({open, setOpen, imgArray, currentImage, setCurrentImage} : IModalImage) => {

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex p-14 flex-col items-start gap-3 outline-none bg-white rounded-2xl shadow-2xl">
                <div className="flex justify-center items-center gap-6">
                    <div className="flex flex-col justify-end items-center self-stretch">
                        <div className="flex flex-col justify-center items-center h-full gap-4 self-stretch">
                            {
                                imgArray?.map((img, i) => (
                                    <div className={`flex p-3 justify-end items-end gap-3 ${currentImage == i ? "w-36 h-36" : "w-32 h-32"}`}>
                                        <img src={`${imgArray[i]}`} alt="" className="w-full h-full rounded-2xl hover:scale-105 transition-all" onClick={() => setCurrentImage(i)} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-modalPhoto h-modalPhoto relative">
                        <img src={`${imgArray[currentImage]}`} alt="" className="flex w-full h-full justify-center items-center shrink-0 rounded-lg" />
                        <div className="absolute right-7 bottom-7 cursor-pointer hover:scale-110 transition-all" onClick={() => setOpen(false)}>
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
    )

}

export default ModalImage