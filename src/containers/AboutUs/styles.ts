import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: var(--fundoClaroPrimaria);
`;

export const Card = styled.div`
  width: 50rem;
  background-color: var(--fundoClaro);
  box-shadow: 0 0 20px var(--sombraPrimaria);
  outline: 1px solid var(--fundoPrimaria200);
  padding: 2rem;
  border-radius: 1rem;
  h2 {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    background: linear-gradient(var(--gradientPrimaria));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0;
  }
  p {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    text-align: justify;
    color: var(--textoPadrao);
  }
  img {
    width: 100%;
    border-radius: 1rem;
    margin: 1rem 0;
    box-shadow: 0 0 20px var(--sombraPrimaria);
    outline: 1px solid var(--fundoPrimaria200);
  }
  @media screen and (max-width: 850px) {
    width: 35rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;
    img {
      height: 10rem;
      object-fit: cover;
    }
  }
`;
