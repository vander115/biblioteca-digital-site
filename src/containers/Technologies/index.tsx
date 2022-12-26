import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, spring } from 'framer-motion';
import { Card, Container } from './styles';
import { useInViewport } from 'react-in-viewport';

interface ITechProps {
  changeTheme: () => void;
}

export function Technologies({ changeTheme }: ITechProps) {
  const [isOpen, setOpen] = useState(false);

  // const myRef = useRef(null);
  // const { inViewport } = useInViewport(myRef);

  // useEffect(() => {
  //   inViewport ? changeTheme() : changeTheme();
  // }, [inViewport]);

  return (
    <Container>
      <Card>
        <h2>Tecnoligias utilizadas</h2>
        <div className="technologies">
          <h3>Front-End</h3>
          <div className="front">
            <div className="technologie">
              <svg
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
              >
                <path
                  d="M12 3.5H5.5v3h6v3l-3 1-3-1V8M1.5.5h14l-1 12-6 2-6-2-1-12z"
                  stroke="currentColor"
                ></path>
              </svg>
              <span>HTML</span>
            </div>
            <div className="technologie">
              <svg
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
              >
                <path
                  d="M5 3.5h6.5v3M7 6.5h4.5m0 0v3l-3 1-3-1V8M1.5.5h14l-1 12-6 2-6-2-1-12z"
                  stroke="currentColor"
                ></path>
              </svg>
              <span>CSS</span>
            </div>
            <div className="technologie">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
              >
                <path
                  d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 100 3h1a1.5 1.5 0 010 3h-1A1.5 1.5 0 018.5 11m-2-5v5a1.5 1.5 0 01-3 0M.5.5h14v14H.5V.5z"
                  stroke="currentColor"
                ></path>
              </svg>
              <span>JavaScript</span>
            </div>
          </div>
          <h3>Back-End</h3>
          <div className="back"></div>
        </div>
      </Card>
    </Container>
  );
}
