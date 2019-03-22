import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid: 1fr / repeat(2,  150px);
  grid-gap: 50px;
  padding: 50px;
  margin: auto;
  padding-block-start: 30%;
      > * {
        height: 250px;
        text-align: center;
        border: 1px solid blue;

        > h1 {
          color: tomato;
        }
    }
}

`;