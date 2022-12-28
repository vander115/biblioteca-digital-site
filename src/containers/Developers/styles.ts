import styled from 'styled-components';

interface IDevsProps {
  open: boolean;
}

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

export const Card = styled.article`
  width: 50rem;
  padding: 2rem;
  background-color: var(--fundoClaro);
  border-radius: 1rem;
  outline: 1px solid var(--fundoPrimaria200);
  box-shadow: 0 0 20px var(--sombraPrimaria);
  .banner {
    position: relative;
    margin-bottom: 4rem;
    .devs-banner {
      width: 100%;
      border-radius: 1rem;
      outline: 1px solid var(--fundoPrimaria200);
      box-shadow: 0 0 20px var(--sombraPrimaria);
    }
    .devs-logo {
      border-radius: 50%;
      width: 10rem;
      height: 10rem;
      position: absolute;
      bottom: -4rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .about-team {
    h2 {
      span {
        font: 700 2rem 'Poppins', Arial, Helvetica, sans-serif;
        background: linear-gradient(var(--gradientPrimaria));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      text-align: center;
      margin-bottom: 1rem;
    }
    p {
      font: 500 1.2rem 'Poppins', Arial, Helvetica, sans-serif;
      color: var(--textoPadrao);
      text-align: justify;
      mark {
        background-color: var(--fundoClaroPrimaria);
        color: var(--textoPadrao);
      }
    }
  }

  .devs {
    .devs-cont {
    }
    .trigger {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-radius: 1rem;
      margin: 1rem 0;
      background-color: var(--fundoClaroPrimaria);
      h2 {
        font: 700 1.5rem 'Poppins', Arial, Helvetica, sans-serif;
        background: linear-gradient(var(--gradientPrimaria));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 30px;
      }

      /* Hide default HTML checkbox */
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--fundoFoscoPadrao);
        box-shadow: 0px 0px 15px var(--sombraPrimaria);
        outline: 1px solid var(--fundoPrimaria);
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: '';
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 3px;
        background-color: var(--fundoPrimaria);
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: var(--fundoSecundaria);
        box-shadow: 0 0 15px var(--sombraSecundaria);
        outline: 1px solid var(--fundoSecundaria);
      }

      input:checked + .slider:before {
        background-color: var(--fundoClaro);
        -webkit-transform: translateX(28px);
        -ms-transform: translateX(28px);
        transform: translateX(28px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
      .show {
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          display: flex;
          margin-left: 0.5rem;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
          color: var(--fundoPrimaria);
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 1rem;
    .banner {
      .devs-logo {
        width: 6rem;
        height: 6rem;
        bottom: -3rem;
      }
    }
  }
`;

export const Devs = styled.div<IDevsProps>`
  width: 100%;
  height: ${(props) => (props.open ? '100%' : '0')};
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: ${(props) => (props.open ? '1rem 0' : '0')};
  .dev-card {
    background-color: var(--fundoClaroPrimaria);
    outline: 1px solid var(--fundoPrimaria);
    width: 12rem;
    height: 14rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    img {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      border-radius: 5rem;
    }
    p {
      font: 700 1.2rem 'Poppins', Arial, Helvetica, sans-serif;
      color: var(--textoPrimaria);
      font-size: 1.2rem;
      margin: 0.5rem;
    }
  }
`;
