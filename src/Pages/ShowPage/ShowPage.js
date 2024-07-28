import {useParams} from "react-router-dom";
import {PageContainer} from "../../Layout/Common";
import {PageTitleBox} from "../../Layout/PageTitle";
import {useEffect, useState} from "react";
import {getPostDataOne} from "../../API/postAPI";
import styled from "styled-components";
import { PostListContainer } from "../MainPage/MainPage";

function ShowPage() {
    // useParams 훅을 사용하여 URL에서 id를 추출합니다.
    const {id} = useParams();
    const [postData, setPostData] = useState({title: "", content: ""})

    useEffect(() => {
        const getData = async () => {
            const response = await getPostDataOne(id);
            setPostData(response);
        }
        getData();
    }, []);

    return (
        <PageContainer>
            <PageTitleBox pageTitle={`게시물 ${postData.title}`}
                // pageDescription={`팡팡 터지는 팡일처럼 개발도 팡팡 터지는 시원한 느낌으로 하고 싶은 개발자입니다.`}
            />
            <PostListContainer>
                <PageContent>
                    {postData.content}
                </PageContent>
            </PostListContainer>

        </PageContainer>
    );
}

const PageContent = styled.div `
    font-size: 17px;
    margin-top: 50px;
    line-height: 35px;
`
export default ShowPage;
