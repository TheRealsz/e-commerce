import { ThemeProvider } from "@emotion/react"
import theme from "./themes/theme"
import { Router } from "./routes"

// Realizar layout
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
