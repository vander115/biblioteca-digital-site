import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  height: 35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: relative;

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
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  input:checked + .show .title {
    color: var(--textoSecundaria);
  }

  .show .icon {
    font-size: 2rem;
    color: var(--textoPrimaria200);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
  }

  h1 {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 4rem;
    margin: 0;
    background: linear-gradient(var(--gradientPrimaria));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    justify-self: flex-start;
    align-self: flex-start;
    span {
      background: linear-gradient(var(--gradientSecundaria));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h2 {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2rem;
    text-align: right;
    margin: 0;
    background: linear-gradient(var(--gradientPrimaria));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    justify-self: flex-end;
    align-self: flex-end;
  }

  .logo {
    height: 25rem;
    width: 25rem;
    border-radius: 50%;
    background-color: var(--fundoClaro);
    box-shadow: 0 0 20px var(--sombraPrimaria);
    outline: 1px solid var(--fundoPrimaria200);
    display: flex;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    padding: 4rem;
    position: absolute;
    img {
      width: 100%;
      transform: translateX(10px);
    }
  }

  @media screen and (max-width: 950px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media screen and (max-width: 850px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 700px) {
    .logo {
      width: 20rem;
      height: 20rem;
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
