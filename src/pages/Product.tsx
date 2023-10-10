import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Product = () => {
    return (
        <div className="w-full flex flex-col items-center gap-16 shrink-0 bg-white">
            <div className="w-full flex flex-col justify-center items-center gap-12">
                <Navbar />
                <Footer />
            </div>
        </div>
    )
}

export default Product