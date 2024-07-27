import {Route, Routes} from "react-router-dom";

import MainPage from "../src/Pages/MainPage/MainPage";
import ShowPage from "../src/Pages/ShowPage/ShowPage";
import WritePage from "../src/Pages/WritePage/WritePage";
import LoginPage from "./Pages/LoginPage/LoginPage";

function Router() {

    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/show" element={<ShowPage />}/>
            <Route path="/write" element={<WritePage />}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    );
}

export default Router;