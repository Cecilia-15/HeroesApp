import { Navbar } from "../ui/components/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { SearchPage } from "../heroes/pages/SearchPage";
import { HeroPage } from "../heroes/pages/HeroPage";
import { HeroProvider } from "../heroes/context/heroProvide";
import { HeroByPublisherPage } from "../heroes/pages/HeroByPublisherPage";

export const HeroRoutes = () => {
    return(
        <>
            <Navbar />

            <div className="container">
                <HeroProvider>
                    <Routes>
                        <Route
                            path="/publisher"
                            element={<HeroByPublisherPage/>}>
                        </Route>

                        <Route path="/search" element={<SearchPage/>}></Route>
                        <Route path="/hero/:heroId" element={<HeroPage/>}></Route>

                        <Route path="/" element={<Navigate to="index"/>}></Route>

                    </Routes>
                </HeroProvider>
            </div>
            

        </>
    )
}