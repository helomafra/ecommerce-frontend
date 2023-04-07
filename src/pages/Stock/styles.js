import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    grid-area: main;

    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: 600;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;
