import styled, {keyframes} from "styled-components";
import {Container100Per, SideBarwidth} from "./Common";
import {Link, useLocation} from "react-router-dom";

function SideBar() {
    const location = useLocation(); // 현재 URL을 얻기 위한 useLocation 훅 사용
    // 링크 클릭 시 확인 창을 띄우는 핸들러
    const handleLinkClick = (event, to) => {
        // 현재 페이지가 /write이고 클릭하려는 링크가 /write가 아닌 경우
        if (location.pathname === "/write" && to !== "/write") {
            event.preventDefault(); // 기본 링크 이동 방지
            if (window.confirm("저장되지 않은 내용이 있습니다. 정말 이동하시겠습니까?")) {
                window.location.href = to; // 확인 시 이동
            }
        }
    };

    return (
        <SideBarContainer>
            <ProfileWrapper>
                <ProfileImage src="/Img/ProfileImage.jpg"/>
                <ProfileBlogName>팡일 개발블로그</ProfileBlogName>
                <ProfileBlogUser>Pangil</ProfileBlogUser>
            </ProfileWrapper>
            <MenuList>
                <MenuItem to="/" onClick={(e) => handleLinkClick(e, "/")}>Home</MenuItem>
                <MenuItem to="/category" onClick={(e) => handleLinkClick(e, "/category")}>Category</MenuItem>
            </MenuList>

        </SideBarContainer>
    );
}

const fadeOut = keyframes `
    from {
        width : ${SideBarwidth};
    }
    to {
        width: 0px;
        opacity: 0;
        visibility: hidden;
    }
`;

const fadeIn = keyframes `

    from {
        width: 0px;
        opacity: 0;
        visibility: hidden;
    }
        to {
        width : ${SideBarwidth};
    }
`;

const SideBarContainer = styled(Container100Per)`
    background-color: ${props => props.theme.colors.four};
    transition: opacity 0.5s ease, visibility 0.5s ease; /* 애니메이션 추가 */

    @media (max-width: 1300px) {
        animation: ${fadeOut} 1s forwards; /* 애니메이션 적용 */
    }
    @media (min-width: 1300px) {
        animation: ${fadeIn} 1s forwards; /* 애니메이션 적용 */
    }
`;

const ProfileWrapper = styled.div `
    width: ${SideBarwidth};
    height : ${SideBarwidth};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfileImage = styled.img `
    width: 50%;
    border-radius: 100%;
    
    margin-bottom: 5px;
`;

const ProfileBlogName = styled.p `
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
    color : ${props => props.theme.colors.one};
`;

const ProfileBlogUser = styled.p `
    font-size: 15px;
    font-weight: bold;
    color : ${props => props.theme.colors.one};
`;

const MenuList = styled.div `
    width: ${SideBarwidth};
    height : 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MenuItem = styled(Link)`
    width: 80%;
    height: 50px;

    color : ${props => props.theme.colors.one};
    text-decoration: none;

    display: flex;
    /* justify-content: center; */
    align-items: center;

    font-size: 17px;
    font-weight: bold;

    transition: color 1s ease; /* color 속성에 애니메이션 추가 */

    &:hover {
        color: orange; /* hover 상태에서의 색상 */
    }
`;
export default SideBar;