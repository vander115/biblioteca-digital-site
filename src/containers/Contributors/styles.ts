import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

export const Card = styled.div`
  width: 50rem;
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: var(--fundoClaro);
  outline: 1px solid var(--fundoPrimaria200);
  display: flex;
  flex-direction: column;
  h2 {
    width: 100%;
    text-align: center;
    span {
      font: 700 1.5rem 'Poppins', Arial, Helvetica, sans-serif;
      background: linear-gradient(var(--gradientPrimaria));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    margin-bottom: 2rem;
  }
  .logos {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    img {
      width: 10rem;
    }
    svg {
      width: 10rem;
      height: auto;
      color: var(--fundoSecundaria200);
    }
  }
  @media screen and (max-width: 800px) {
    width: 40rem;
    .logos {
      img,
      svg {
        width: 8rem;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    .logos {
      flex-direction: column;
      gap: 4rem;
      img,
      svg {
        width: 10rem;
      }
    }
  }
`;
