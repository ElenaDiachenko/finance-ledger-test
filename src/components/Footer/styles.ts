import styled from 'styled-components';

export const StyledFooter = styled.footer`
 display: grid;
 place-content: center;
 grid-gap: 12px;
 padding: 20px 0;
 color: ${({ theme }) => theme.colors.white};
 background: ${({ theme }) => theme.colors.text};
`;
