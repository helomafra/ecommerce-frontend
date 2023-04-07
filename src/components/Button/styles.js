import styled, { css } from 'styled-components';

const RESOLVE_STYLE = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 12px 24px;

    display: flex;
    gap: 12px;

    :hover {
      background-color: ${({ theme }) => theme.COLORS.SECONDARY};
      color: white;
    }
  `,

  secondary: css`
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    border: 2px solid;
    padding: 12px 24px;
    margin-top: auto;

    display: flex;
    gap: 8px;

    :hover {
      background-color: ${({ theme }) => theme.COLORS.PRIMARY};
      color: white;
    }
  `,

  remove: css`
    background: ${({ theme }) => theme.COLORS.RED};
    width: fit-content;
    padding: 6px 8px;

    > svg {
      stroke: white;
    }
  `
};

export const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;

  align-items: center;
  justify-content: center;

  ${(props) => RESOLVE_STYLE[props.type]}
`;
