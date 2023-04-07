import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    grid-area: main;
    padding: 32px;

    display: grid;
    grid-template-columns: 1fr auto;

    .cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        font-weight: 600;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
        margin-bottom: 24px;
      }
    }

    .form {
      width: 420px;
      height: fit-content;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      padding: 24px;
      border-radius: 8px;
      border: 1px solid;
      border-color: ${({ theme }) => theme.COLORS.GRAY_100};

      display: flex;
      flex-direction: column;
      gap: 24px;

      h2 {
        font-weight: 600;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
      }

      .info {
        label {
          display: block;
          margin-bottom: 4px;
          margin-top: 16px;
          font-weight: 500;
          font-size: 14px;
          color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
      }

      .total-value {
        border: 2px solid;
        border-color: ${({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 8px;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.PRIMARY};
        font-weight: 600;
        font-size: 16px;

        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
