import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 8px;

  border: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_100};

  > input {
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.GRAY_400};

    border: 0;

    border-radius: 8px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }

  > svg {
    margin-left: 16px;
    stroke: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;
