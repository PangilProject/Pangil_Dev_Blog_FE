import React from 'react';
import { PageContainer } from '../Layout/Common';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <NotFoundPageContainer>
            <h1>404 Not Found</h1>
            <p>죄송합니다, 요청한 페이지를 찾을 수 없습니다.</p>
            <BackHome to = "/">Home으로 돌아가기</BackHome>
        </NotFoundPageContainer>
    );
}
const NotFoundPageContainer = styled(PageContainer)`
    height: 100vh;
    padding-top: 100px;
`;

const BackHome = styled(Link)`

    margin-top : 40px;
    font-size: 20px;
    color : black;
    text-decoration: none;

    background-color: white;

    padding : 10px 20px;
    border-radius: 5px;

    transition: all 0.5s ease; /* color 속성에 애니메이션 추가 */

    &:hover {
        color: white; /* hover 상태에서의 색상 */
        background-color: black;
    }
`;
export default NotFoundPage;
