import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px;

  > .logo {
    display: flex;
    gap: 48px;
    cursor: pointer;
  }

  > .buttons {
    display: flex;
    gap: 12px;
  }
`;
