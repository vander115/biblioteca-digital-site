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
        'Oferece-se, da melhor maneira possível, o controle de livros da Biblioteca Neilyta, contando com a listagem completa de todos os livros e também a classificação do livro mais lido do ano ou mês.',
    },
    {
      icon: FaBookReader,
      title: 'Leitores',
      content:
        'Disponibiliza-s um rápido e eficaz levantamento de informações, contando com o acesso a lista completa de leitores (ativos e inativos) e com a visualização do leitor ou leitora do mês.',
    },
    {
      icon: TbArrowsLeftRight,
      title: 'Requisições',
      content:
        'Ao um escolher um livro e um autor, uma requisição é criada e os prazos de entrega são automaticamente calculados pelo sistema, além de alertar as pendências e listar todas as requisições do sistema.',
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
