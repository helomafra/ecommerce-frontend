import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 12px;

  align-items: center;
  padding: 24px;

  > img {
    padding: 24px;
    width: 220px;
  }

  > .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 16px;
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

    h3 {
      font-weight: 400;
      font-size: 14px;
    }
  }
`;
