import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";
import { SideBarwidth } from "./Common";

function Layout() {
    
    return (
        <BaseContainer>
            <SideBarContainer>
                <SideBar/>
            </SideBarContainer>
            <OutletContainer>
                <Outlet/>
            </OutletContainer>
        </BaseContainer>
    )
}

const BaseContainer = styled.div`
    width: 100vw;
    height : auto;
    margin : 0 auto;
    display: flex;
`;

const SideBarContainer = styled.div`
    width: ${SideBarwidth};
    height: 100vh; // 화면 높이에 맞추기
    position: fixed; // 고정 위치
`; 

const OutletContainer = styled.div`
    width: calc(100% - ${SideBarwidth});
    height : auto;
    margin-left:${SideBarwidth}; // 사이드바의 너비만큼 왼쪽 여백 추가
    @media (max-width: 1300px) {
        width: 100%;
        margin-left: 0;
    }
`;
export default Layout;