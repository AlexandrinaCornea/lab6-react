import { useState } from 'react';

import { stages } from '../../constants/stages';
import { words } from '../../constants/words';
import { randomIndex } from '../../utils/randomIndex';

import s from './styles.module.css';

import Image from '../Image';
import Keyboard from '../Keyboard';
import WordLetter from '../WordLetter';

const wordsLength = words.length;
const maxMistakes = stages.length - 1;

function App() {
  const [index, setIndex] = useState(() => randomIndex(wordsLength));
  const [guessedLetters, setGuessedLetters] = useState(() => new Set());

  const word = words[index];
  const uniqueLetters = new Set(word);
  const mistakesCount = [...guessedLetters].filter(
    (letter) => !word.includes(letter),
  ).length;
  const won = [...uniqueLetters].every((letter) => guessedLetters.has(letter));
  const lost = mistakesCount >= maxMistakes;

  const handleLetterClick = (letter) => {
    setGuessedLetters((prev) => {
      if (prev.has(letter)) {
        return prev;
      }

      return new Set(prev).add(letter);
    });
  };

  const handleRestart = () => {
    setIndex(randomIndex(wordsLength));
    setGuessedLetters(new Set());
  };

  return (
    <div className={s.appWrapper}>
      {won && <h1 className={s.win}>YOU WON</h1>}
      {lost && <h1 className={s.lose}>YOU LOST</h1>}

      <Image src={stages[mistakesCount]} alt='hangman image' />

      <div className={s.wordContainer}>
        {[...word].map((letter, i) => (
          <WordLetter
            key={i}
            guessedLetters={guessedLetters}
            conclusion={won ? 'won' : lost ? 'lost' : null}>
            {letter}
          </WordLetter>
        ))}
      </div>

      {won || lost ? (
        <button className={s.restart} onClick={handleRestart}>
          TRY AGAIN
        </button>
      ) : (
        <Keyboard
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterClick}
        />
      )}
    </div>
  );
}

export default App;
