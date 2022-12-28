import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  padding: 4rem 2rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

export const Card = styled.div`
  width: 50rem;
  padding: 2rem;
  border-radius: 1rem;
  outline: 1px solid var(--fundoPrimaria200);
  background-color: var(--fundoClaro);
  box-shadow: 0 0 20px var(--sombraPrimaria);
  h2 {
    text-align: center;
    margin: 1rem;
    span {
      font: 700 2rem 'Poppins', Arial, Helvetica, sans-serif;
      background: linear-gradient(var(--gradientPrimaria));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .screens {
    figure {
      margin: 2rem 0;
      img {
        width: 100%;
        border-radius: 1.5rem;
        outline: 1px solid var(--fundoPrimaria200);
        box-shadow: 0 0 20px var(--sombraPrimaria);
      }
      span {
        font: 500 1rem 'Poppins', Arial, Helvetica, sans-serif;
        color: var(--textoPadrao);
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;
