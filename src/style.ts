import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 padding: ${(p) => p.theme.space[4]}px;
 justify-content: space-evenly;
 align-items: center;
 color: red;
 border: ${(p) => `${p.theme.borders.normal} ${p.theme.colors.secondary}`};
 background-color: #131a22;
`;
