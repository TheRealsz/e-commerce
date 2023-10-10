import { Typography} from "@mui/material"

const NewsForm = () => {
    return (
        <div className="flex py-6 px-16 items-center gap-16 self-stretch rounded-2xl -bg-uppy-azul mix-blend-darken">
            <div className="flex flex-col items-center gap-2 flex-text">
                <Typography variant="h2" className="self-stretch -text-uppy-rosa">Inscreva-se e acompanhe</Typography>
                <Typography variant="subtitle1" className="text-white self-stretch">Nossa newsletter sempre cheia de novidades.</Typography>
            </div>
            <form className="flex center items-start gap-4 text-1.17 not-italic leading-normal">
                <div className="flex justify-center items-start gap-4 self-stretch">
                    <input type="text" className="flex w-70 py-2 px-4 items-center gap-2 self-stretch rounded-input bg-preto-8 font-Roboto outline-none" placeholder="Nome"/>
                    <input type="email" className="flex w-70 py-2 px-4 items-center gap-2 self-stretch rounded-input bg-preto-8 font-Roboto outline-none" placeholder="Email"/>
                </div>
                <button className="flex h-12 py-0 px-6 justify-center items-center gap-3 -bg-uppy-rosa rounded-input text-white shadow-Elev">Enviar</button>
            </form>
        </div>
    )
}

export default NewsForm