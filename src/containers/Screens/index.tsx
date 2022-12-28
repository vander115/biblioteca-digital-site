import { motion } from 'framer-motion';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { Card, Container } from './styles';

export function Screens() {
  const screenData = [
    {
      subtitle: 'Tela de login do sistema.',
      image_url: '/telas/tela0.png',
    },
    {
      subtitle: 'Tela de gerenciamento de livros.',
      image_url: '/telas/tela1.png',
    },
    {
      subtitle: 'Tela de gêneros de livros do Sistema.',
      image_url: '/telas/tela2.png',
    },
    {
      subtitle: 'Tela de gerencimento de requisições do Sistema.',
      image_url: '/telas/tela3.png',
    },
    {
      subtitle: 'Tela de gerenciamento de turmas do Sistema.',
      image_url: '/telas/tela4.png',
    },
    {
      subtitle: 'Tela de gerencimento de alunos do Sistema.',
      image_url: '/telas/tela5.png',
    },
    {
      subtitle: 'Tela de gerenciamento de funcionarios do Sistema.',
      image_url: '/telas/tela6.png',
    },
    {
      subtitle: 'Tela de generecimento de dados do Sistema.',
      image_url: '/telas/tela7.png',
    },
    {
      subtitle: 'Tela de exibição sobre os desenvolvedores do sistema.',
      image_url: '/telas/tela8.png',
    },
  ];
  return (
    <Container id="telas">
      <Card>
        <h2>
          <AnimatedTitle text="Telas do Sistema" />
        </h2>
        <div className="screens">
          {screenData.map((screen, index) => (
            <figure>
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                key={index}
                src={screen.image_url}
                alt={screen.subtitle}
              />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                {screen.subtitle}
              </motion.span>
            </figure>
          ))}
        </div>
      </Card>
    </Container>
  );
}
