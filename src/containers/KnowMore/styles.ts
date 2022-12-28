import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background-color: var(--fundoClaroSecundaria);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

export const Card = styled.div`
  width: 50rem;
  padding: 2rem 4rem;
  border-radius: 1rem;
  background-color: var(--fundoClaro);
  box-shadow: 0 0 20px var(--sombraSecundaria);
  outline: 1px solid var(--fundoSecundaria);
  h2 {
    text-align: center;
    margin: 1rem;
    span {
      font: 700 2rem 'Poppins', Arial, Helvetica, sans-serif;
      background: linear-gradient(var(--gradientSecundaria));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  article {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    p {
      font: 500 1.2rem 'Poppins', Arial, Helvetica, sans-serif;
      text-align: justify;
      color: var(--textoPadrao);
      margin: 1rem 0;
      mark {
        font: 500 1.2rem 'Poppins', Arial, Helvetica, sans-serif;
        color: var(--textoPadrao);
        background-color: var(--fundoClaroSecundaria);
      }
    }
    figure {
      img {
        height: 20rem;
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
        box-shadow: 0 0 20px var(--sombraSecundaria);
        outline: 1px solid var(--fundoSecundaria200);
      }
      span {
        font: 500 0.8rem 'Poppins', sans-serif;
        color: var(--textoPadrao);
      }
    }
  }
  @media screen and (max-width: 850px) {
    width: 40rem;
    padding: 2rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;
  }
  @media screen and (max-width: 480px) {
  }
`;
