import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import fav from '../../assets/icons/fav.svg'

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
            <div className="absolute right-0">
                <img src={fav} alt="Favoritar" />
            </div>
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