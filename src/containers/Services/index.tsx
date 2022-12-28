import { motion } from 'framer-motion';
import { Card, Container } from './styles';
import { ImBook, ImBooks } from 'react-icons/im';
import { FaBookReader } from 'react-icons/fa';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { AnimatedTitle } from '../../components/AnimatedTitle';

export function Services() {
  const serviceData = [
    {
      icon: ImBook,
      title: 'Livros',
      content:
        'O foco principal do sistema é a organização dos livros presentes no acervo da Biblioteca Neilyta, permitindo o cadastro, alteração, arquivamento e empréstimo das obras de maneira rápida e controlada.',
    },
    {
      icon: FaBookReader,
      title: 'Leitores',
      content:
        'A eficácia do sistema também abrange a sessão de leitores, ele possibilita a listagem de todos os leitores cadastrados no sistema, além do raking dos que mais leram em um determinado mês ou ano.',
    },
    {
      icon: TbArrowsLeftRight,
      title: 'Requisições',
      content:
        'Ao um escolher um livro e um autor, uma requisição é criada e os prazos de entrega são automaticamente calculados e exibidos pelo sistema, além de alertar as pendências e listar todas as requisições do sistema.',
    },
    {
      icon: ImBooks,
      title: 'Gerenciamento',
      content:
        'A Biblioteca Digital traz a visão de digital ao gereciamente da biblioteca, permitindo fazer cadastros, alterações, exclusões e revisões de forma rápida e prática e sem usar nenhuma folha de papel.',
    },
  ];

  return (
    <Container id="servicos">
      <div className="content">
        {serviceData.map((service, index) => (
          <Card key={index}>
            <motion.div
              initial={{ opacity: 0, y: '-0.5rem' }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="icon"
            >
              <service.icon />
            </motion.div>
            <h2>
              <AnimatedTitle text={service.title} />{' '}
            </h2>
            <p>{service.content}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
