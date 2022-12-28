import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Character = styled(motion.span)`
  display: inline-block;
  margin-right: 0.05rem;
`;

export const Word = styled(motion.span)`
  & + span {
    margin-left: 0.35rem;
  }
  display: inline-block;

  white-space: nowrap;
`;
