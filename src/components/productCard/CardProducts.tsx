import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import unfav from '../../assets/icons/unfav.svg'
import fav from '../../assets/icons/fav.png'
import { MouseEventHandler, useState } from "react"

interface ICardProducts {
    img: string,
    productName: string,
    productPrice: string,
    width?: string,
    height?: string,
    id: number
}

const CardProducts = (props: ICardProducts) => {
    const navigate = useNavigate()
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const handleStopPropagation: MouseEventHandler<HTMLImageElement> = (e) => {
        e.stopPropagation();
        toggleFavorite();
    };

    return (
        <Card className="flex pb-0 flex-col items-center gap-3 relative hover:scale-105 transition-all cursor-pointer" sx={{ boxShadow: "none" }} onClick={() => navigate(`/product/${props.id}`)}>
            <CardMedia
                component="img"
                className="fle flex-col justify-center items-center shrink-0 rounded-2xl bg-cover bg-no-repeat"
                sx={{
                    width: `${props.width}` || "23rem",
                    height: `${props.height}` || "28.75rem",
                    display: "flex",
                    maxWidth: "23rem",
                    maxHeight: "28.75rem",

                }}
                image={`${props.img}`}
            />
            {
                isFavorited
                    ?
                    <div className="absolute right-4 top-4">
                        <img src={fav} alt="Desfavoritar" className="w-7 h-7" onClick={handleStopPropagation} />
                    </div>
                    :
                    <div className="absolute right-0">
                        <img src={unfav} alt="Favoritar" onClick={handleStopPropagation} />
                    </div>
            }
            <CardContent
                className="flex flex-col items-center gap-2 self-stretch"
                sx={{
                    padding: "0 1rem",
                }}>
                <Typography variant="h5" className="-text-uppy-azul">
                    {props.productName}
                </Typography>
                <Typography variant="body2" className="-text-uppy-rosa">
                    R$ {props.productPrice}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardProducts