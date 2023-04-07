import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
  width: 450px;

  padding: 24px 0px;

  img {
    width: 48px;
    border-radius: 8px;
  }

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};

  .content {
    width: 100%;
    h3 {
      font-weight: 500;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      margin-bottom: 4px;
    }

    p {
      font-weight: 500;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
