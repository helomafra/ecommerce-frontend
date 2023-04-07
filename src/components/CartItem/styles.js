import styled from 'styled-components';

export const Container = styled.div`
  width: 420px;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};

  .info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;

    h3 {
      font-weight: 500;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_400};

      margin-right: auto;
    }

    img {
      width: 48px;
      border-radius: 8px;
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      display: flex;
      align-items: center;
      gap: 4px;
      font-weight: 600;
      font-size: 22px;
      color: ${({ theme }) => theme.COLORS.PRIMARY};

      span {
        font-weight: 600;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }

    .alter-cart {
      display: flex;
      align-items: center;

      span {
        min-width: 50px;
        padding: 2px 12px;
        text-align: center;
        background-color: white;

        border: 1px solid;
        border-color: ${({ theme }) => theme.COLORS.GRAY_100};

        border-radius: 50px;
      }

      img {
        cursor: pointer;
      }
    }
  }
`;
