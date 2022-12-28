import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';

import devsBanner from '../../assets/banner-dev.jpg';
import infoLogo from '../../assets/dev-logo.png';
import { Card, Container, Devs } from './styles';
import { AnimatedTitle } from '../../components/AnimatedTitle';

interface IDevsProps {
  changeTheme: (value: boolean) => void;
}

export function Developers({ changeTheme }: IDevsProps) {
  const devRef = useRef(null);
  const { inViewport } = useInViewport(devRef);
  const [isOpen, setIsOpen] = useState(true);

  const devsData = [
    {
      name: 'Airtalison do Nascimento da Silva',
      image_url: '/devs-images/airtalisson.jpg',
    },
    {
      name: 'Alysson Bernado Carvalho',
      image_url: '/devs-images/alysson.jpg',
    },
    {
      name: 'Ana Kecia da Silva',
      image_url: '/devs-images/anakecia.jpg',
    },
    {
      name: 'André Ribeiro Mendes',
      image_url: '/devs-images/andre.jpg',
    },
    {
      name: 'Antônia Cintia Nascimento Queiroz',
      image_url: '/devs-images/cintia.jpg',
    },
    {
      name: 'Antônia Marilane Misquita de Sousa',
      image_url: '/devs-images/mary.jpg',
    },
    {
      name: 'Antônio Janilson de Souza Carvalho',
      image_url: '/devs-images/janilson.jpg',
    },
    {
      name: 'Antônio Ronaldo Oliveira',
      image_url: '/devs-images/ronaldo.jpg',
    },
    {
      name: 'Caroline Rodrigues Siqueira',
      image_url: '/devs-images/karol.jpg',
    },
    {
      name: 'Crislano Silva Justino',
      image_url: '/devs-images/crislano.jpg',
    },
    {
      name: 'Daniel Ripardo Silva',
      image_url: '/devs-images/daniel.jpg',
    },
    {
      name: 'Danilo Victor Pacheco de Lima',
      image_url: '/devs-images/danilo.jpg',
    },
    {
      name: 'Débora Patricy Ferreira Sousa',
      image_url: '/devs-images/debora.jpg',
    },
    {
      name: 'Érica Mirele Marques Sampaio',
      image_url: '/devs-images/erika.jpg',
    },
    {
      name: 'Francisco Andyl David Caetano',
      image_url: '/devs-images/andyl.jpg',
    },
    {
      name: 'Francisco Darlan Lima Marques',
      image_url: '/devs-images/darlan.jpg',
    },
    {
      name: 'Gustavo Brito do Nascimento',
      image_url: '/devs-images/gustavo.jpg',
    },
    {
      name: 'João Márcio Ferreira Lopes',
      image_url: '/devs-images/marcio.jpg',
    },
    {
      name: 'José Vanderlei Furtuna Tomé',
      image_url: '/devs-images/vander.jpg',
    },
    {
      name: 'Josilene de Oliveira Paulo',
      image_url: '/devs-images/josy.jpg',
    },
    {
      name: 'Lara Stefanny Tomaz Menezes',
      image_url: '/devs-images/lara.jpg',
    },
    {
      name: 'Lidiele Carolino Marques',
      image_url: '/devs-images/diely.jpg',
    },
    {
      name: 'Lorrana Quele Alvez Silva',
      image_url: '/devs-images/lorrana.jpg',
    },
    {
      name: 'Lucas do Nascimento de Oliveira',
      image_url: '/devs-images/lucas.jpg',
    },
    {
      name: 'Marcelino Marques da Silva',
      image_url: '/devs-images/marcelino.jpg',
    },
    {
      name: 'Maria Bianca Sousa Prestes',
      image_url: '/devs-images/bianca.jpg',
    },
    {
      name: 'Maria Clara Luiz Fontelene',
      image_url: '/devs-images/clara.jpg',
    },
    {
      name: 'Maria Clarisse Nascimento Franco',
      image_url: '/devs-images/clarisse.jpg',
    },
    {
      name: 'Maria Luciana Morais da Silva',
      image_url: '/devs-images/luciana.jpg',
    },
    {
      name: 'Maria Renata da Ponte Alves',
      image_url: '/devs-images/renata.jpg',
    },
    {
      name: 'Mario André Araújo Albuquerque',
      image_url: '/devs-images/mario.jpg',
    },
    {
      name: 'Maycon Marcelino do Nascimento',
      image_url: '/devs-images/maycon.jpg',
    },
    {
      name: 'Melissa Marques André',
      image_url: '/devs-images/melissa.jpg',
    },
    {
      name: 'Mirele Ricardo Andrade',
      image_url: '/devs-images/mirele.jpg',
    },
    {
      name: 'Natanha Gomes Fidelis',
      image_url: '/devs-images/natasha.jpg',
    },
    {
      name: 'Pedro Henrique Mariano Barbosa',
      image_url: '/devs-images/pedro.jpg',
    },
    {
      name: 'Rennan Victor Eduardo Oliveira',
      image_url: '/devs-images/rennan.jpg',
    },
    {
      name: 'Thais Hellen de Sousa Mendes',
      image_url: '/devs-images/thais.jpg',
    },
    {
      name: 'Victória Ellen Paixão dos Santos',
      image_url: '/devs-images/victoria.jpg',
    },
    {
      name: 'Wellington de Sousa Farias',
      image_url: '/devs-images/welio.jpg',
    },
    {
      name: 'Willian de Souza Mendes',
      image_url: '/devs-images/willian.jpg',
    },
  ];

  useEffect(() => {
    changeTheme(inViewport);
  }, [inViewport]);

  return (
    <Container id="desenvolvedores">
      <Card ref={devRef}>
        <div className="banner">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="devs-banner"
            src={devsBanner}
            alt=""
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="devs-logo"
            src={infoLogo}
            alt=""
          />
        </div>
        <div className="about-team">
          <h2>
            <AnimatedTitle text="3º Informática 2020-2022" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2 }}
          >
            A turma do <mark>3º Informática</mark> nasce com desejo de mudança.
            Em 2020, a turma se concretizou graças a{' '}
            <mark>EEEP Francisca Neilyta Carneiro Albuquerque</mark>. A busca
            por caminhos naturais e pela conquista de sonhos futuros é a sede
            desses estudantes desde o início da caminhada escolar e, com isso, o
            desejado diploma de ensino médio e do curso técnico vieram apenas
            como consequência de tanto <mark>aprendizado</mark>,{' '}
            <mark>companheirismo</mark>, <mark>valores</mark> e{' '}
            <mark>empatia</mark> com os colegas de classe. Eles tiveraram a
            brilhante ideia de programar um <mark>sistema</mark> para a{' '}
            <mark>biblioteca</mark> da escola, ideia que já tinha sido
            contretizada anos passados, porém, o sistema não foi concluído com
            sucesso. Nesse contexto, a turma está empenhada para realizar com
            êxito a entrega do sistema da <mark>Biblioteca Digital</mark> da
            escola de ensino de tempo integral.
          </motion.p>
        </div>
        <div className="devs">
          <motion.div
            initial={{ opacity: 0, scaleX: 0.5 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="trigger"
          >
            <h2>Alunos da Turma</h2>
            <div className="show">
              <label className="switch">
                <input
                  className="show"
                  onChange={() => setIsOpen((prev) => !prev)}
                  type="checkbox"
                  defaultChecked={true}
                />
                <span className="slider round"></span>
              </label>
              <div className="icon">
                {isOpen ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
          </motion.div>
          <Devs open={isOpen}>
            {devsData.map((dev, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="dev-card"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  key={index}
                  src={dev.image_url}
                  alt={`Foto de ${dev.name}`}
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2 }}
                >
                  {dev.name}
                </motion.p>
              </motion.div>
            ))}
          </Devs>
        </div>
      </Card>
    </Container>
  );
}
