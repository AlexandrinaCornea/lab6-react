import { letters } from '../../constants/letters';

import s from './styles.module.css';

import Letter from '../Letter';

const Keyboard = ({ guessedLetters, onLetterClick }) => {
  return (
    <div className={s.lettersContainer}>
      {letters.map((letter) => (
        <Letter
          key={letter}
          disabled={guessedLetters.has(letter)}
          onAction={() => onLetterClick(letter)}>
          {letter}
        </Letter>
      ))}
    </div>
  );
};

export default Keyboard;
