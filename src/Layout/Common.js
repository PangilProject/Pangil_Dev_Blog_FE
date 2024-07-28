import styled from "styled-components";

export const Container100Per = styled.div `
    width: 100%;
    height : inherit;
    background-color: ${props => props.theme.colors.three};;
`;

export const PageContainer = styled(Container100Per)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SideBarwidth = '250px';