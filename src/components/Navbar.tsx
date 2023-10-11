import { FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import notification from "../assets/icons/notification.svg"
import search from "../assets/icons/search.svg"
import wallet from "../assets/icons/wallet.svg"

const Navbar = () => {
    
    const links = ["Novidades", "Todos os produtos", "Mais vendidos", "Atendimento"]

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="44" viewBox="0 0 97 44" fill="none">
                                <g clip-path="url(#clip0_901_126)">
                                    <path d="M0.743445 0.729449C1.26433 0.388113 1.88388 0.226893 2.50624 0.270732L3.34408 0.313103C4.8418 0.313103 5.9064 0.575929 6.53787 1.10158C7.16933 1.62723 7.48692 2.53239 7.49063 3.81704V13.2327C7.49063 15.4532 8.63616 16.5629 10.9272 16.5616C11.8374 16.586 12.7414 16.4065 13.5724 16.0366V2.72275C13.5724 1.72917 13.8195 1.06474 14.3138 0.729449C14.8347 0.388113 15.4542 0.226893 16.0766 0.270732L16.9126 0.313103C18.4128 0.313103 19.478 0.575929 20.1082 1.10158C20.7385 1.62723 21.0542 2.53239 21.0554 3.81704V17.1309C21.0554 18.3861 20.6001 19.3784 19.6893 20.1079C18.7786 20.8375 17.3976 21.4215 15.5465 21.8599C14.0171 22.2219 12.4493 22.3988 10.8772 22.3868C7.38126 22.3868 4.69289 21.6204 2.81209 20.0877C0.931279 18.5549 -0.00541769 16.27 0.0019968 13.2327V2.73196C0.0019968 1.73347 0.249146 1.06596 0.743445 0.729449Z" fill="#051626" />
                                    <path d="M46.0086 11.2616C46.0086 14.8233 45.0466 17.5756 43.1225 19.5185C41.1985 21.4615 38.4872 22.4317 34.9888 22.4293C33.6196 22.4293 32.4537 22.2414 31.4911 21.8656V27.0791C31.4911 28.7592 30.6878 29.5704 29.0813 29.5127H28.1193C26.6364 29.5127 25.586 29.2597 24.9682 28.7537C24.3503 28.2477 24.0413 27.3419 24.0413 26.0364V5.1712C24.0239 4.53128 24.1808 3.89858 24.4955 3.34001C24.8683 2.76529 25.3607 2.27659 25.9395 1.90675C26.9763 1.24097 28.1234 0.762605 29.3279 0.493756C30.7961 0.147728 32.3011 -0.0199134 33.8099 -0.0054905C37.6284 -0.0054905 40.5429 0.907031 42.5535 2.73207C44.8581 4.73397 46.0098 7.57716 46.0086 11.2616ZM34.0713 5.77914C33.1567 5.78197 32.2566 6.00579 31.4484 6.43129V15.9907C32.212 16.3643 33.0465 16.5733 33.8971 16.6041C36.8974 16.6041 38.3983 14.8233 38.3995 11.2616C38.3995 7.60786 36.9568 5.78036 34.0713 5.77914Z" fill="#051626" />
                                    <path d="M69.3958 11.2616C69.3958 14.8233 68.4338 17.5756 66.5097 19.5185C64.5857 21.4615 61.8744 22.4317 58.376 22.4293C57.0056 22.4293 55.8397 22.2414 54.8783 21.8656V27.0791C54.8783 28.7592 54.075 29.5704 52.4686 29.5127H51.5065C50.0236 29.5127 48.9732 29.2597 48.3554 28.7537C47.7375 28.2477 47.4286 27.3419 47.4286 26.0364V5.1712C47.4111 4.53128 47.568 3.89858 47.8827 3.34001C48.2559 2.76555 48.7482 2.2769 49.3267 1.90675C50.3635 1.24097 51.5107 0.762605 52.7151 0.493756C54.1833 0.147728 55.6883 -0.0199134 57.1971 -0.0054905C61.0156 -0.0054905 63.9301 0.907031 65.9407 2.73207C68.2453 4.73397 69.3971 7.57716 69.3958 11.2616ZM57.4641 5.77914C56.5495 5.78197 55.6494 6.00579 54.8412 6.43129V15.9907C55.6014 16.3627 56.4319 16.5718 57.2787 16.6041C60.2816 16.6041 61.7824 14.8233 61.7811 11.2616C61.7849 7.60786 60.3458 5.78036 57.4641 5.77914Z" fill="#051626" />
                                    <path d="M96.2454 1.21037C94.1137 0.0423876 89.9338 -0.263424 89.5167 2.69705C89.5011 2.69424 89.4856 2.69055 89.4704 2.686C88.1135 7.9069 86.297 12.3927 84.156 16.2357C83.1606 14.2092 80.3079 2.27886 78.4284 1.10167C76.5562 -0.246844 71.3661 -0.0349865 71.3067 3.06734C72.4745 9.6865 75.9 18.4555 78.7416 23.7391C70.6098 33.9746 57.425 36.9627 49.1152 36.3861C45.2578 36.1005 41.8379 34.063 40.0936 36.9221C39.9676 37.1285 39.6006 37.7088 39.2539 38.2854C39.0333 38.6538 38.8239 39.0131 38.6978 39.2784C38.605 39.5076 38.5427 39.7479 38.5125 39.9931C38.455 42.1541 41.684 42.996 43.888 43.3515C72.6803 48.0327 91.9579 26.4177 96.1656 7.12026C96.225 6.84393 96.2787 6.56759 96.3362 6.29494C97.0684 2.86285 97.3946 1.91779 96.2454 1.21037Z" fill="#051626" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_901_126">
                                        <rect width="97" height="44" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar