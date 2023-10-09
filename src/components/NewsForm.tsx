import { Typography } from "@mui/material"

const NewsForm = () => {
    return (
        <div className="flex py-6 px-16 items-center gap-16 self-stretch rounded-2xl -bg-uppy-azul mix-blend-darken">
            <div className="flex flex-col items-center gap-2 flex-text">
                <Typography className="-text-uppy-rosa self-stretch">Inscreva-se e acompanhe</Typography>
                <Typography className="text-white self-stretch">Nossa newsletter sempre cheia de novidades.</Typography>
            </div>
            <form className="flex center items-start gap-4">
                <div></div>
            </form>
        </div>
    )
}

export default NewsForm