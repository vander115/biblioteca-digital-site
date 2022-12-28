import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
}

#app {
  &.default {
    --corPadrao: 255, 255, 255;
    --corPadrao2: 0, 0, 0;

    --corPrimaria: 46, 150, 51; //rgb
    --corPrimaria10: 240, 255, 240; //rgb
    --corPrimaria100: 114, 254, 119; //rgb
    --corPrimaria200: 11, 107, 14; //rgb
    --corPrimaria900: 1, 54, 4;

    --corSecundaria: 232, 114, 59; //rgb
    --corSecundaria10: 255, 245, 240; //rgb
    --corSecundaria100: 254, 157, 102; //rgb
    --corSecundaria200: 241, 73, 22; //rgb
    --corSecundaria900: 74, 24, 0;

    --corTerciaria: 169, 169, 169;
    --corTerciaria10: 211, 211, 211;
    --corTerciaria100: 192, 192, 192;
    --corTerciaria200: 128, 128, 128;
    --corTerciaria900: 20, 20, 20;

    &.purple {
    --corPadrao: 255, 255, 255;

    --corPrimaria: 108, 12, 242; //rgb
    --corPrimaria10: 252, 240, 255; //rgb
    --corPrimaria100: 171, 112, 255; //rgb
    --corPrimaria200: 149, 0, 190; //rgb
    --corPrimaria900: 44, 0, 56;

    --corSecundaria: 192, 2, 252; //rgb
    --corSecundaria10: 252, 240, 255; //rgb
    --corSecundaria100: 223, 108, 255; //rgb
    --corSecundaria200: 149, 0, 190; //rgb
    --corSecundaria900: 37, 1, 46;

    --corTerciaria: 169, 169, 169;
    --corTerciaria10: 211, 211, 211;
    --corTerciaria100: 192, 192, 192;
    --corTerciaria200: 128, 128, 128;
    --corTerciaria900: 20, 20, 20;
    }
  }

  &.dark {
    --corPadrao: 20, 20, 20;
    --corPadrao2: 255, 255, 255;

    --corPrimaria100: 58, 194, 63; //rgb
    --corPrimaria10: 17, 28, 18; //rgb
    --corPrimaria: 58, 194, 63; //rgb
    --corPrimaria200: 58, 194, 63; //rgb
    --corPrimaria900: 58, 194, 63;

    --corSecundaria: 204, 83, 27; //rgb
    --corSecundaria10: 36, 16, 6; //rgb
    --corSecundaria100: 204, 83, 27; //rgb
    --corSecundaria200: 204, 83, 27; //rgb
    --corSecundaria900: 204, 83, 27;

    --corTerciaria: 169, 169, 169;
    --corTerciaria10: 211, 211, 211;
    --corTerciaria100: 192, 192, 192;
    --corTerciaria200: 128, 128, 128;
    --corTerciaria900: 20, 20, 20;

    &.purple {
      --corPadrao: 20, 20, 20;
    --corPadrao2: 255, 255, 255;

    --corPrimaria: 146, 72, 250; //rgb
    --corPrimaria10: 26, 18, 36; //rgb
    --corPrimaria100: 146, 72, 250; //rgb
    --corPrimaria200: 146, 72, 250; //rgb
    --corPrimaria900: 146, 72, 250;

    --corSecundaria: 144, 2, 191; //rgb
    --corSecundaria10: 42, 14, 51; //rgb
    --corSecundaria100: 144, 2, 191; //rgb
    --corSecundaria200: 144, 2, 191; //rgb
    --corSecundaria900: 144, 2, 191;

    --corTerciaria: 169, 169, 169;
    --corTerciaria10: 211, 211, 211;
    --corTerciaria100: 192, 192, 192;
    --corTerciaria200: 128, 128, 128;
    --corTerciaria900: 20, 20, 20;
    }
  }

  --sombraPrimaria: rgba(var(--corPrimaria), 0.2);
  --sombraSecundaria: rgba(var(--corSecundaria), 0.2);
  --sombraTerciaria: rgba(var(--corTerciaria), 0.4);

  --fundoPrimaria: rgb(var(--corPrimaria));
  --fundoPrimaria100: rgb(var(--corPrimaria100));
  --fundoPrimaria200: rgb(var(--corPrimaria200));
  --fundoPrimaria900: rgb(var(--corPrimaria900));

  --fundoSecundaria: rgb(var(--corSecundaria));
  --fundoSecundaria100: rgb(var(--corSecundaria100));
  --fundoSecundaria200: rgb(var(--corSecundaria200));
  --fundoSecundaria900: rgb(var(--corSecundaria900));

  --fundoTerciaria: rgb(var(--corTerciaria));
  --fundoTerciaria100: rgb(var(--corTerciaria100));
  --fundoTerciaria200: rgb(var(--corTerciaria200));
  --fundoTerciaria900: rgb(var(--corTerciaria900));

  --fundoClaro: rgb(var(--corPadrao));
  --fundoClaroPrimaria: rgb(var(--corPrimaria10));
  --fundoClaroSecundaria: rgb(var(--corSecundaria10));
  --fundoFoscoPadrao: rgba(var(--corPadrao), 0.85);
  --fundoFoscoPrimaria: rgba(var(--corPrimaria10), 0.85);
  --fundoFoscoSecundaria: rgba(var(--corSecundaria10), 0.85);

  --textoPrimaria: rgb(var(--corPrimaria));
  --textoPrimaria100: rgb(var(--corPrimaria100));
  --textoPrimaria200: rgb(var(--corPrimaria200));
  --textoPrimaria900: rgb(var(--corPrimaria900));

  --textoPadrao: rgb(var(--corPadrao2));

  --textoSecundaria: rgb(var(--corSecundaria));
  --textoSecundaria100: rgb(var(--corSecundaria100));
  --textoSecundaria200: rgb(var(--corSecundaria200));
  --textoSecundaria900: rgb(var(--corSecundaria900));

  --textoTerciaria: rgb(var(--corTerciaria));
  --textoTerciaria100: rgb(var(--corTerciaria100));
  --textoTerciaria200: rgb(var(--corTerciaria200));
  --textoTerciaria900: rgb(var(--corTerciaria900));

  --gradientPrimaria: 225deg, var(--fundoPrimaria100), var(--fundoPrimaria),
    var(--fundoPrimaria200);
  --gradientSecundaria: 225deg, var(--fundoSecundaria100),
    var(--fundoSecundaria), var(--fundoSecundaria200);

  --fontFamily: 'Poppins', Arial, Helvetica, sans-serif;
}

body {
  background-color: var(--fundoClaroPrimaria);
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(240, 255, 240);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: rgb(46, 150, 51);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(232, 114, 59);
}
`;
