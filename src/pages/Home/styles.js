import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 93px auto;
  grid-template-areas:
    'header'
    /* 'search' */
    'main';

  /* > .search {
    grid-area: search;
    padding: 32px 32px 0;
  } */

  > main {
    grid-area: main;
    padding: 32px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    gap: 24px;
  }
`;
