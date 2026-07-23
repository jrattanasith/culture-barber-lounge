import { HashRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FloatingBookButton from './components/FloatingBookButton/FloatingBookButton'
import Home from './pages/Home'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingBookButton />
        <Footer />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
