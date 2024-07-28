import {Route, Routes} from "react-router-dom";

import MainPage from "../src/Pages/MainPage/MainPage";
import ShowPage from "../src/Pages/ShowPage/ShowPage";
import WritePage from "../src/Pages/WritePage/WritePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Layout/Layout";
import NotFoundPage from "./Pages/NotFoundPage";

function Router() {

    return (
        <Routes>
            <Route element={<Layout/>}>

                <Route path="/" element={<MainPage />}/>
                <Route path="/show/:id" element={<ShowPage />}/> {/* 동적 경로 */}
                <Route path="/write" element={<WritePage />}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage />}/>

        </Routes>
    );
}

export default Router;