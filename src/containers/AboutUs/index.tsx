import { Container, Card } from './styles';
import bannerBiblioteca from '../../assets/banner.jpg';
import { motion, AnimatePresence } from 'framer-motion';

export function AboutUs() {
  return (
    <Container>
      <Card>
        <h2>Sobre Nós</h2>
        <p>
          O sistema Biblioteca Digital surgiu com a necessidade de reinventar a
          forma de cadastro e emprestimos de livros da biblioteca da E.E.E.P
          Francisca Neilyta Carneiro Albuquerque. Com isso, os alunos do 3º Ano
          do curso de Informática no ano de 2022 denvolveram uma aplicação web
          que permite realizar as atividades da biblioteca de forma digital,
          possibilitando uma melhor organização e praticidade devido não ser
          mais preciso utilizar várias cadernetas para gerenciar a biblioteca.
        </p>
        <AnimatePresence>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key="modal"
            src={bannerBiblioteca}
            alt=""
          />
        </AnimatePresence>
        <p>
          O planejamento do sistema foi iniciado em agosto de 2022 e em
          setembro, seu desenvolvimento também foi iniciado. durante o periodo
          de construção do sistema, foram realizadas postagens no instagram do
          projeto social Informatizando o Saber, trazendo dicas sobre
          informática e leitura e como esses dois universos tão diferentes podem
          interagir entre si. Em dezembro de 2022, o sistema foi apresentado aos
          funcionários da biblioteca e aos outros profissionais integrantes da
          instituição. Nesse mesmo mês, a versão 1.0 do sistema foi lançada,
          sendo a primeira versão estável e utilizável pelos bibliotecarios.
        </p>
      </Card>
    </Container>
  );
}
