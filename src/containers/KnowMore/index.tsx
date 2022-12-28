import { motion } from 'framer-motion';

import { Card, Container } from './styles';
import paperImage from '../../assets/paper-image.jpg';
import loggingImage from '../../assets/logging-image.webp';
import { AnimatedTitle } from '../../components/AnimatedTitle';

export function KnowMore() {
  return (
    <Container id="saiba-mais">
      <Card>
        <h2>
          <AnimatedTitle text="Saiba Mais" />{' '}
        </h2>
        <article>
          <figure>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={paperImage}
              alt=""
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Foto: Folha de papel aberta com marcas de amasso.
            </motion.span>
          </figure>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            O projeto Informatizando o Saber, além de se preocupar com a
            organização da biblioteca, se preocupa com o impacto ambiental que o
            sistema pode gerar ao ser implementado. Atualmente, são utilizadas
            cadernetas com dezenas de páginas que armazenam os dados de alunos,
            livros e requisições da biblioteca.
          </motion.p>
        </article>
        <article>
          <figure>
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src={loggingImage}
              alt=""
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Incêndio e desmatamento na Amazônia, na região Norte do Brasil. —
              Foto: Andre Penner/AP.
            </motion.span>
          </figure>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sabe-se que o desmantamento das florestas tropicais e atlâticas do
            nosso planeta é prejudicial para a sobrevivência de todos os seres
            do globoe e colabora para o aumento do efeito estufa. Quado tomamos
            a iniciativa de reciclar, usar fontes renováveis e não poluentes de
            energia e reduzir o uso de papel, estamos ajudando não só a si
            mesmos como a uma enorme gama de indivíduos que habitam nosso
            planeta.{' '}
            <mark>
              Seja conciente, repense, recuse, reduza, reutilize e recicle.
            </mark>
          </motion.p>
        </article>
      </Card>
    </Container>
  );
}
