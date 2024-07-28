import styled from "styled-components";

export const PageTitleBox = (e) => {
    return (
        <PageTitleContainer>
            <PageTitle>{e.pageTitle}</PageTitle>
            <PageDescription>{e.pageDescription}</PageDescription>
        </PageTitleContainer>
    );
}

const PageTitleContainer = styled.div`
    width: inherit;
    height : 250px;
    background-color: ${props => props.theme.colors.two};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding : 0% 10%;
    box-sizing: border-box;
`;
    

const PageTitle = styled.p`
    font-size: 30px;
    font-weight: 600;

    margin-bottom: 10px;

`;

const PageDescription = styled.p`
    font-size: 17px;
`;
