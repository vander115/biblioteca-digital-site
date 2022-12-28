import { Container, Card } from './styles';
import bannerBiblioteca from '../../assets/banner.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedTitle } from '../../components/AnimatedTitle';

export function AboutUs() {
  return (
    <Container id="sobre-nos">
      <Card>
        <h2>
          <AnimatedTitle text="Sobre Nós" />{' '}
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O sistema Biblioteca Digital surgiu com a necessidade de reinventar a
          forma de cadastro e emprestimos de livros da biblioteca da E.E.E.P
          Francisca Neilyta Carneiro Albuquerque. Com isso, os alunos do 3º Ano
          do curso de Informática no ano de 2022 denvolveram uma aplicação web
          que permite realizar as atividades da biblioteca de forma digital,
          possibilitando uma melhor organização e praticidade devido não ser
          mais preciso utilizar várias cadernetas para gerenciar a biblioteca.
        </motion.p>
        <figure>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            key="modal"
            src={bannerBiblioteca}
            alt=""
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Foto: Visão das estantes do acervo da escola Fracisca Neilyta
          </motion.span>
        </figure>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O planejamento do sistema foi iniciado em agosto de 2022 e em
          setembro, seu desenvolvimento também foi iniciado. durante o periodo
          de construção do sistema, foram realizadas postagens no instagram do
          projeto social Informatizando o Saber, trazendo dicas sobre
          informática e leitura e como esses dois universos tão diferentes podem
          interagir entre si. Em dezembro de 2022, o sistema foi apresentado aos
          funcionários da biblioteca e aos outros profissionais integrantes da
          instituição. Nesse mesmo mês, a versão 1.0 do sistema foi lançada,
          sendo a primeira versão estável e utilizável pelos bibliotecarios.
        </motion.p>
      </Card>
    </Container>
  );
}
