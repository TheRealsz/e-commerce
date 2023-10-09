import CardProducts from "./CardProducts"
import Monitor from '../assets/monitor.png'
import Teclado from '../assets/teclado.png'
import Pc from '../assets/Pc2.png'
import PlacaVideo from '../assets/placaVideo.png'

const ProductsList = () => {
    return (
        <div className="flex flex-col items-center gap-3.5 self-stretch">
            <div className="flex justify-center items-center content-center gap-8 self-stretch flex-wrap">
                <CardProducts
                    img={Monitor}
                    productName="Monitor"
                    productPrice="1.500,00" 
                    width="16.75rem"
                    height="20.93rem"/>
                <CardProducts
                    img={Teclado}
                    productName="Teclado"
                    productPrice="150,00"
                    width="16.75rem" 
                    height="20.93rem"/>
                <CardProducts
                    img={Pc}
                    productName="Computador gamer"
                    productPrice="5.550,00"
                    width="16.75rem" 
                    height="20.93rem"/>
                <CardProducts
                    img={PlacaVideo}
                    productName="Placa de video"
                    productPrice="3.810,00"
                    width="16.75rem" 
                    height="20.93rem"/>
            </div>
        </div>
    )
}

export default ProductsList