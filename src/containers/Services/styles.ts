import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
  .content {
    width: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 850px) {
    .content {
      width: 35rem;
    }
  }
  @media screen and (max-width: 600px) {
    .content {
      width: 100%;
      padding: 1rem;
    }
  }
`;

export const Card = styled.div`
  width: 45%;
  height: 22rem;
  background-color: var(--fundoClaro);
  border-radius: 1rem;
  box-shadow: 0 0 20px var(--sombraPrimaria);
  outline: 1px solid var(--fundoPrimaria200);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: 4rem;
    color: var(--fundoPrimaria200);
  }
  h2 {
    span {
      background: linear-gradient(var(--gradientPrimaria));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font: 700 1.5rem 'Poppins', Arial, Helvetica, sans-serif;
    }
    margin-bottom: 1rem;
  }
  p {
    text-align: justify;
    font: 500 1rem 'Poppins', Arial, Helvetica, sans-serif;
    color: var(--textoPadrao);
  }
  @media screen and (max-width: 850px) {
    width: 65%;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
    height: 25rem;
  }
`;
