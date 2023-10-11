import { FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import notification from "../assets/icons/notification.svg"
import search from "../assets/icons/search.svg"
import wallet from "../assets/icons/wallet.svg"
import uppyLogo from "../assets/uppyLogo.svg"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    
    const links = ["Novidades", "Todos os produtos", "Mais vendidos", "Atendimento"]
    const navigate = useNavigate()


    return (
        <header className="flex flex-col items-center gap-2 self-stretch relative">
            <div className="flex w-full flex-col items-start -gap-20">
                <div className="flex p-navbar justify-between items-center self-stretch -bg-uppy-rosa rounded-navbar">
                    <div className="flex items-center gap-8">
                        {
                            links.map((link, index) => {
                                return (
                                    <Typography variant="body1" className="text-white cursor-pointer hover:-text-uppy-azul transition-all" key={index}>
                                        {link}
                                    </Typography>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center gap-6">
                        <FormControl>
                            <OutlinedInput
                                sx={{
                                    display: "flex",
                                    width: "19.5rem",
                                    height: "3rem",
                                    padding: "0 1.5rem",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    borderRadius: "4rem",
                                    border: "0.5px solid #606060",
                                    backgroundColor: "#FFF"
                                }}
                                type="text"
                                placeholder="Pesquisar"
                                endAdornment={
                                    <InputAdornment
                                     position="end">
                                        <IconButton
                                            aria-label="toggle search input"
                                            edge="end"
                                        >
                                            <img src={search} alt="" />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <img src={notification} alt="Notificaçoes" />
                        <div className="w-7 h-8 relative">
                            <img src={wallet} />
                            <div className="flex w-4 h-4 flec-col justify-center items-center gap-3 shrink-0 rounded-2xl -bg-uppy-azul text-white absolute right-0 top-5">
                                1
                            </div>
                        </div>
                        <div className="w-24 h-11 absolute left-20 bottom-10">
                                <img src={uppyLogo} alt="Uppy Logo" className="cursor-pointer" onClick={() => navigate("/")} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar