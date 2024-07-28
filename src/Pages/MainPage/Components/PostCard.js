import {useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostCard = (e) => {
    const [sendPostData, ] = useState(e.postData || {
        title: "",
        content: ""
    });
    return (
        <PostCardContainer>
            <PostTitle to={`/show/${sendPostData.id}`}>
                {sendPostData.title}
            </PostTitle>
            <PostContent>
                {sendPostData.content}
            </PostContent>
            <RowBox>
                <PostDate>2024.08.25</PostDate>
                <PostCategory>개발</PostCategory>
            </RowBox>
        </PostCardContainer>
    );
}

const PostCardContainer = styled.div `
    width: 100%;
    height : 200px;
    color : ${props => props.theme.colors.one};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom : 2px solid ${props => props.theme.colors.one};

`;

const PostTitle = styled(Link) `

    font-size: 25px;
    font-weight: 600;

    margin-top: 15px;
    color : ${props => props.theme.colors.one};
    text-decoration: none;

    transition: color 0.5s ease; /* color 속성에 애니메이션 추가 */

    &:hover {
        color: black; /* hover 상태에서의 색상 */
    }
`;

const PostContent = styled.div `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 100%;

    font-size: 17px;

    margin-top: 5px;
`;
const RowBox = styled.div `

    display: flex;

    font-size: 15px;

    margin-top: 5px;

`
const PostDate = styled.div `

`;
const PostCategory = styled.div `

`;
export default PostCard;