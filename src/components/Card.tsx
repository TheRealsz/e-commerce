import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { ReactNode } from "react"

interface ICardProducts {
    img: ReactNode,
    productName: string,
    productPrice: string
}

const CardProducts = (props : ICardProducts) => {
    return (
        <Card sx={{
            width: "23rem",
            display: "flex",
            paddingBottom: "0",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.75rem",
            position: "relative",
            boxShadow: "none"
        }}>
            <CardMedia
                component="img"
                sx={{
                    display: "flex",
                    width: "23rem",
                    height: "28.75rem",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "1rem",

                }}
                image={props.img}
                alt="Notebook"
            />
            <div className="absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="57" viewBox="0 0 58 57" fill="none">
                    <g filter="url(#filter0_d_962_155)">
                        <path d="M17.5937 18.738C16.3306 20.3378 15.7833 22.4428 16.0781 24.5058C17.2148 32.6732 27.4873 39.6198 27.9504 39.9145C28.1609 40.0408 28.4135 40.125 28.6661 40.125C28.9187 40.125 29.1713 40.0408 29.3818 39.9145C29.8028 39.6198 40.1174 32.6732 41.2541 24.5058C41.5488 22.4428 40.9594 20.3378 39.7385 18.738C38.6018 17.2645 36.9598 16.3804 35.1495 16.1699C32.6235 15.9173 30.1396 17.054 28.7082 19.0748C27.2768 17.054 24.7928 15.8752 22.2668 16.1699C20.3723 16.3383 18.7304 17.2645 17.5937 18.738ZM19.5724 20.2957C20.0776 19.6642 21.0038 18.8222 22.4352 18.6959C24.3297 18.4854 26.098 19.4537 26.8979 21.1798C27.2347 21.8534 27.8662 22.2744 28.624 22.2744C29.3818 22.2744 30.0133 21.8534 30.3501 21.1798C31.1921 19.4958 32.9182 18.5275 34.8127 18.6959C36.2441 18.8643 37.1703 19.6642 37.6756 20.2957C38.5176 21.3482 38.8965 22.7796 38.686 24.1689C37.8861 30.1051 30.8974 35.6624 28.624 37.3043C26.3505 35.6624 19.404 30.1051 18.562 24.1689C18.3936 22.7796 18.7304 21.3482 19.5724 20.2957Z" fill="white" />
                    </g>
                    <defs>
                        <filter id="filter0_d_962_155" x="0" y="0.125" width="57.3291" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="8" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.411765 0 0 0 0 0.45098 0 0 0 0 0.490196 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_962_155" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_962_155" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <CardContent
            sx={{
                display: "flex",
                padding:"0 1rem",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                alignSelf: "stretch"
            }}>
                <Typography variant="h5">
                    {props.productName}
                </Typography>
                <Typography variant="body2">
                    R$ {props.productPrice}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardProducts