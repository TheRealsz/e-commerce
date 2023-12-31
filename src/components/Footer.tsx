import { Typography } from "@mui/material"
import iconInsta from "../../public/assets/icons/iconInsta.svg"
import iconFace from "../../public/assets/icons/iconFace.svg"
import iconTiktok from "../../public/assets/icons/iconTiktok.svg"
import iconWpp from "../../public/assets/icons/iconWpp.svg"
import cash from "../../public/assets/icons/cash.svg"
import cart from "../../public/assets/icons/cart.svg"
import bill from "../../public/assets/icons/bill.svg"
import credit from "../../public/assets/icons/credit.svg"
import pix from "../../public/assets/icons/pix.svg"
import picpay from "../../public/assets/icons/picpay.svg"
import ticket from "../../public/assets/icons/ticket.svg"
import google from "../../public/assets/google.png"
import SSL from "../../public/assets/SSL.png"
import uppyColored from "../../public/assets/icons/uppyColored.svg"
 
const Footer = () => {
    return (
        <div className="flex w-full pb-10 flex-col items-center gap-10 rounded-footer bg-preto-8">
            <div className="w-full flex py-10 px-6 flex-col items-center gap-10 rounded-2xl -bg-uppy-rosa">
                <div className="flex flex-col items-center gap-10">
                    <div className="flex justify-center items-center gap-8">
                        <Typography sx={{
                            fontSize: "1.83rem",
                            fontWeight: "700",
                            fontStyle: "normal",
                            lineHeight: "normal",
                            color: "white"
                        }}>Entre em contato</Typography>
                        <div className="flex justify-center items-start gap-4">
                            <div className="w-10 h-10">
                                <img className="cursor-pointer hover:scale-110 transition-all" src={iconInsta} alt="Instagram" />
                            </div>
                            <div className="w-10 h-10">
                                <img className="cursor-pointer hover:scale-110 transition-all" src={iconFace} alt="Facebook" />
                            </div>
                            <div className="w-10 h-10">
                                <img className="cursor-pointer hover:scale-110 transition-all" src={iconTiktok} alt="Tiktok" />
                            </div>
                            <div className="w-10 h-10">
                                <img className="cursor-pointer hover:scale-110 transition-all" src={iconWpp} alt="Whatsapp" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-10 text-white">
                        <Typography variant="subtitle1">Rua Davy Jhones 47, Sorocaba-SP</Typography>
                        <Typography variant="h5">(15) 00000-0000</Typography>
                    </div>
                </div>
                <div className="h-Divider self-stretch -bg-uppy-rosa-5"></div>
                <div className="flex justify-center items-start gap-6 text-white">
                    <Typography className="hover:-text-uppy-azul transition-all" variant="subtitle1">Minha conta</Typography>
                    <Typography className="hover:-text-uppy-azul transition-all" variant="subtitle1">Atendimento</Typography>
                    <Typography className="hover:-text-uppy-azul transition-all" variant="subtitle1">Todos Produtos</Typography>
                    <Typography className="hover:-text-uppy-azul transition-all" variant="subtitle1">Mais vendidos</Typography>
                    <Typography className="hover:-text-uppy-azul transition-all" variant="subtitle1">Novidades</Typography>
                </div>
            </div>
            <div className="flex p-33 justify-center items-center gap-16 self-stretch">
                <div className="flex flex-col items-start gap-6 flex-text">
                    <Typography variant="h5" className="-text-uppy-azul">Formas de Pagamento</Typography>
                    <div className="flex justify-center items-center gap-4">
                        <img src={cash} alt="Icone de dinheiro" />
                        <img src={cart} alt="Icone de carrinho" />
                        <img src={bill} alt="Icone de boleto" />
                        <img src={credit} alt="Icone de cartao de credito" />
                        <img src={pix} alt="Icone de pix" />
                        <img src={picpay} alt="Icone de picpay" />
                        <img src={ticket} alt="Icone de ticket"/>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 flex-text">
                    <Typography variant="h5" className="-text-uppy-azul">Sua compra está segura.</Typography>
                    <div className="flex items-center content-center gap-4 flex-wrap">
                        <img src={google} alt="Google site seguro" />
                        <img src={SSL} alt="Google site seguro" />
                    </div>
                </div>
                <div className="flex justify-end items-center gap-4 flex-text">
                    <Typography variant="subtitle1" className="-text-uppy-azul">Criado com</Typography>
                    <img src={uppyColored} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer