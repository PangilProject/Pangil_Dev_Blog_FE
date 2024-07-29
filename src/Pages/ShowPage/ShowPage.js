import {Link, useNavigate, useParams} from "react-router-dom";
import {PageContainer} from "../../Layout/Common";
import {PageTitleBox} from "../../Layout/PageTitle";
import {useEffect, useState} from "react";
import {deletePostData, getPostDataOne} from "../../API/postAPI";
import styled from "styled-components";
import {PostListContainer} from "../MainPage/MainPage";

function ShowPage() {
    const {id} = useParams();
    const [postData, setPostData] = useState({title: "", content: ""});
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getPostDataOne(id);
                console.log(response);

                if (!response || response.status === 404) {
                    setPostData({title: "없는 게시물입니다.", content: ""});
                    setError(true);
                } else {
                    setPostData(response);
                    setError(false);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setPostData({title: "없는 게시물입니다.", content: ""});
                } else {
                    setPostData({title: "오류가 발생했습니다.", content: "다시 시도해주세요."});
                }
                setError(true);
            }
        };
        getData();
    }, [id]);

    const handleDeletePost = async () => {
        const deleteData = async () => {
            await deletePostData(id);
        };
        const result = window.prompt("관리자 비밀번호를 입력해주세요.");
        if (result === "pangil") {
            if (window.confirm("삭제하시겠습니까?")) {
                await deleteData();
                alert("삭제 되었습니다.");
                navigate("/");
            }
        }
    };

    return (
        <PageContainer>
            <PageTitleBox pageTitle={`게시물 ${postData.title}`}/>
            <PostListContainer>
                <PageContent>
                    {postData.content}
                </PageContent>
                {
                    error === false
                        ? <DeleteButton onClick={handleDeletePost}>삭제하기</DeleteButton>
                        : <BackHome to="/">Home으로 돌아가기</BackHome>
                }
            </PostListContainer>
        </PageContainer>
    );
}

const PageContent = styled.div `
    font-size: 17px;
    margin-top: 50px;
    line-height: 35px;
`;

const DeleteButton = styled.button `
    width: 100px;
    height: 30px;
    font-size: 17px;
    font-weight: bold;
    border: none;
    transition: color 1s ease, background-color 1s ease; /* color 속성에 애니메이션 추가 */
    border-radius: 5px;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const BackHome = styled(Link)`
    width: 180px;
    height: 30px;
    font-size: 17px;
    font-weight: bold;
    border: none;
    transition: color 1s ease, background-color 1s ease; /* color 속성에 애니메이션 추가 */
    border-radius: 5px;
    text-decoration: none;
    color : black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export default ShowPage;
