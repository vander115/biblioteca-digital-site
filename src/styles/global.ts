import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  &.default {
    --corPadrao: 255, 255, 255;

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
  }

  &.dark {
    --corPadrao: 20, 20, 20;

    --corPrimaria100: 58, 194, 63; //rgb
    --corPrimaria10: 17, 28, 18; //rgb
    --corPrimaria: 58, 194, 63; //rgb
    --corPrimaria200: 58, 194, 63; //rgb
    --corPrimaria900: 58, 194, 63;

    --corSecundaria: 184, 75, 24; //rgb
    --corSecundaria10: 255, 245, 240; //rgb
    --corSecundaria100: 184, 75, 24; //rgb
    --corSecundaria200: 184, 75, 24; //rgb
    --corSecundaria900: 184, 75, 24;

    --corTerciaria: 169, 169, 169;
    --corTerciaria10: 211, 211, 211;
    --corTerciaria100: 192, 192, 192;
    --corTerciaria200: 128, 128, 128;
    --corTerciaria900: 20, 20, 20;
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

  --textoPadrao: rgb(var(--corPadrao));

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
  background-color: var(--fundoPrimaria200);
}
`;
