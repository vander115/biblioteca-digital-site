import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 550px) {
    padding: 4rem 1rem;
  }
`;

export const Card = styled.div`
  width: 50rem;
  background-color: var(--fundoClaro);
  box-shadow: 0 0 20px var(--sombraPrimaria);
  outline: 1px solid var(--fundoPrimaria200);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    span {
      font-family: 'Poppins', Arial, Helvetica, sans-serif;
      background: linear-gradient(var(--gradientPrimaria));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 2rem;
    }
    text-align: center;
    margin: 0;
  }

  .technologies {
    display: flex;
    flex-direction: column;
    h3 {
      font-family: 'Poppins', Arial, Helvetica, sans-serif;
      color: var(--textoPrimaria200);
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
      margin: 3rem 0 2rem 0;
    }
    .front {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem 4rem;
      .technologie {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        svg {
          color: var(--fundoSecundaria200);
        }
        span {
          font-family: 'Poppins', Arial, Helvetica, sans-serif;
          color: var(--textoPrimaria);
          font-weight: 700;
          font-size: 1rem;
          text-align: center;
          margin-top: 1rem;
        }
      }
    }
    .back {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2rem 4rem;
      .technologie {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 10rem;

        svg {
          color: var(--fundoSecundaria200);
          margin-top: auto;
        }
        span {
          font-family: 'Poppins', Arial, Helvetica, sans-serif;
          color: var(--textoPrimaria);
          font-weight: 700;
          font-size: 1rem;
          text-align: center;
          margin-top: auto;
        }
      }
    }
  }
  @media screen and (max-width: 850px) {
    width: 35rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;
  }
`;
