import { Character, Word } from './styles';

interface IAnimatedTextProps {
  text: string;
  textDelay?: number;
}

export function AnimatedTitle({ text, textDelay = 0 }: IAnimatedTextProps) {
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const charAnimation = {
    hidden: {
      opacity: 0,
      y: `0.5em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      {text.split(' ').map((word, index) => (
        <Word
          aria-hidden="true"
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={wordAnimation}
          transition={{
            delayChildren: 0.25,
            staggerChildren: 0.05,
          }}
        >
          {word.split('').map((character, index) => (
            <Character aria-hidden="true" key={index} variants={charAnimation}>
              {character}
            </Character>
          ))}
        </Word>
      ))}
    </>
  );
}
