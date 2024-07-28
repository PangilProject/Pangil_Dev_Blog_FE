import {useEffect, useState} from "react";
import {getPostData} from "../../API/postAPI";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PostCard from "./Components/PostCard";
import {PageContainer} from "../../Layout/Common";
import {PageTitleBox} from "../../Layout/PageTitle";

function MainPage() {
    const [postDataList, setPostDataList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await getPostData();
            setPostDataList(response);
        }
        getData();
    }, []);

    return (
        <PageContainer>
            <PageTitleBox
                pageTitle="전체 글"
                pageDescription="팡팡 터지는 팡일처럼 개발도 팡팡 터지는 시원한 느낌으로 하고 싶은 개발자입니다."/>

            <PostListContainer>
                {
                    postDataList.map(
                        (postData, index) => (<PostCard key={index} postData={postData}/>)
                    )
                }
            </PostListContainer>
            <WritingButton to="/write">글 쓰러 가기</WritingButton>
        </PageContainer>
    );
}

export const PostListContainer = styled.div `
    width: 1000px;
    height : 2000px;
    /* background-color: ${props => props.theme.colors.five}; */

    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width : 1300px) {
        width: 100%;
        padding : 0% 10%;
        box-sizing: border-box;
        
    }
`;

const WritingButton = styled(Link)`
    width: 300px;
    color : white;
`;

export default MainPage;