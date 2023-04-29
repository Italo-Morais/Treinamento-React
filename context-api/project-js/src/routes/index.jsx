import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Route, Routes } from "react-router-dom"
import { App } from "../App" 

export function AppRoutes() {

    return (
      <>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </>
    )
  }
  