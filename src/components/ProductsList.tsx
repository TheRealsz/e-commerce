import CardProducts from "./Card"
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
                    productPrice="1.500,00" />
                <CardProducts
                    img={Teclado}
                    productName="Teclado"
                    productPrice="150,00" />
                <CardProducts
                    img={Pc}
                    productName="Computador gamer"
                    productPrice="5.550,00" />
                <CardProducts
                    img={PlacaVideo}
                    productName="Computador gamer"
                    productPrice="5.550,00" />
            </div>
        </div>
    )
}

export default ProductsList