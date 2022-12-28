import styled, { css } from 'styled-components';

interface IContainerProps {
  isOpen: boolean;
  isVisible: boolean;
}

export const Container = styled.div<IContainerProps>`
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: ${(props) => (props.isOpen ? '10rem' : '3rem')};
  height: ${(props) => (props.isOpen ? '22rem' : '3rem')};
  border-radius: ${(props) => (props.isOpen ? '1rem' : '1.5rem')};
  background-color: var(--fundoFoscoPadrao);
  backdrop-filter: blur(10px);
  outline: 1px solid var(--fundoPrimaria200);
  z-index: 10;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    height: 3rem;
    border-radius: 1rem 1rem 0 0;
    background: ${(props) =>
      props.isOpen ? 'var(--fundoFoscoPrimaria)' : 'transparent'};

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
      width: 100%;
      height: 100%;
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
  }

  nav {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      font: 700 1rem 'Poppins', Arial, sans-serif;
      color: var(--textoPrimaria);
      text-decoration: none;
      text-transform: uppercase;
      margin: 0.3rem 0;
      :hover {
        color: var(--textoPrimaria200);
      }
    }
  }

  .footer {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    border-radius: 0 0 1rem 1rem;
    background: ${(props) =>
      props.isOpen ? 'var(--fundoFoscoPrimaria)' : 'transparent'};
    .trigger {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--fundoPrimaria200);
      font-size: 2rem;
    }
    p {
      margin-left: 1rem;
      color: var(--textoPrimaria200);
      font: 700 1rem 'Poppins', Arial, sans-serif;
    }
  }
`;
