import CardProducts from "../../CardProducts"
import Note from "../../../assets/noteCard.png"
import PC from "../../../assets/pc.png"
import Xbox from "../../../assets/xbox.png"

const CarouselCard = () => {
    return (
        <div className="flex items-center gap-4 relative">
            <div className="absolute -left-24 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="37" viewBox="0 0 20 37" fill="none">
                    <path d="M19.4 1.37925C18.6 0.594937 17.3333 0.594937 16.6 1.37925L0.6 17.0655C-0.2 17.8498 -0.2 19.0916 0.6 19.8106L16.6 35.4969C17 35.889 17.5333 36.0851 18 36.0851C18.4667 36.0851 19 35.889 19.4 35.4969C20.2 34.7126 20.2 33.4708 19.4 32.7518L4.80001 18.4381L19.4 4.12432C20.2 3.34 20.2 2.16357 19.4 1.37925Z" fill="#EA3458" />
                </svg>
            </div>
            <div className="flex justify-center items-center gap-8 rounded-2xl">
                <CardProducts
                    img={Note}
                    productName="Notebook"
                    productPrice="4.000,00" />
                <CardProducts
                    img={PC}
                    productName="Computador gamer"
                    productPrice="6.000,00" />
                <CardProducts
                    img={Xbox}
                    productName="Xbox"
                    productPrice="4.000,00" />
            </div>
            <div className="absolute -right-24 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="37" viewBox="0 0 20 37" fill="none">
                    <path d="M0.600001 35.8385C1 36.2385 1.53332 36.4385 1.99999 36.4385C2.46665 36.4385 2.99997 36.2385 3.39997 35.8385L19.4 19.8385C20.2 19.0385 20.2 17.7718 19.4 17.0385L3.39997 1.03848C2.59997 0.238476 1.33334 0.238476 0.600001 1.03848C-0.2 1.83848 -0.2 3.10512 0.600001 3.83845L15.2 18.4385L0.600001 33.0385C-0.2 33.7719 -0.2 35.1052 0.600001 35.8385Z" fill="#EA3458" />
                </svg>
            </div>
        </div>
    )
}

export default CarouselCard