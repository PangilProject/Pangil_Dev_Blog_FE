import {useState} from "react";
import {postPostData} from "../../API/postAPI";
import {useNavigate} from "react-router-dom";
import {PageContainer} from "../../Layout/Common";
import {PageTitleBox} from "../../Layout/PageTitle";
import styled from "styled-components";

function WritePage() {
    const [newPost, setNewPost] = useState({title: '', content: ''});

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewPost(prevPost => ({
            ...prevPost,
            [name]: value
        }));
    }

    const handlePostData = async () => {
        try {
            if (window.confirm("추가하시겠습니까?")) {
                const response = await postPostData(newPost);
                alert("데이터 추가 완료");
                navigate("/");
            }
        } catch (error) {
            console.log("[Error] handlePostData()");
        }
    }
    return (
        <WritePageContainer>
            <PageTitleBox pageTitle="글 추가하기" pageDescription="오늘도 나는 하나의 글을 추가합니다."/>
            <InputTitle
                type="text"
                name="title"
                value={newPost.title}
                placeholder="title"
                onChange={handleInputChange}/>
            <InputContent
                name="content"
                value={newPost.content}
                placeholder="content"
                onChange={handleInputChange}/>
            <AddButton onClick={handlePostData}>
                추가
            </AddButton>
        </WritePageContainer>
    );
}

const WritePageContainer = styled(PageContainer)`
    height : 100vh;
`;
const InputTitle = styled.input `
    width: 800px;
    height : 40px;
    font-size: 17px;
    padding : 5px;
    box-sizing: border-box;
    outline: none;

    border-radius: 10px 10px 3px 3px;
    border: none;
    
    background-color: #fff; /* 기본 배경색 */
    transition: background-color 0.3s ease; /* 배경색 변화에 애니메이션 추가 */

    &:focus {
        background-color: #f0f8ff; /* 포커스 시 배경색 변경 */
    }

    margin-top: 30px;
`;

const InputContent = styled.textarea `
    width: 800px;
    height : 400px;
    resize: none;
    font-Size : 17px;
    padding : 5px;
    box-sizing: border-box;
    outline: none;

    border-radius: 10px 10px 3px 3px;
    border: none;
    background-color: #fff; /* 기본 배경색 */
    transition: background-color 0.3s ease; /* 배경색 변화에 애니메이션 추가 */


    &:focus {
        background-color: #f0f8ff; /* 포커스 시 배경색 변경 */
    }
    
    margin-top: 30px;
`;

const AddButton = styled.button `
    width: 100px;
    height : 30px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 5px;
    border : none;

    &:hover{
        background-color: ${props => props.theme.colors.one};;
    }

    margin-top: 30px;
`

export default WritePage;