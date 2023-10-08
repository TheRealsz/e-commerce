import { Typography } from "@mui/material"
import { ReactNode } from "react"

interface ISectionTitle {
    icon: ReactNode,
    title: string
}

const SectionTitle = (props : ISectionTitle) => {
    return (
        <div className="flex items-center gap-4 self-stretch">
            <div className="flex pl-12 pr-6 py-4 flex-col justify-center items-center gap-3 rounded-sections -bg-uppy-rosa">
                <img src={props.icon}/>
            </div>
            <Typography variant="h2">{props.title}</Typography>
        </div>
    )
}

export default SectionTitle