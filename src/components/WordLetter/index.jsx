import s from './styles.module.css';

const WordLetter = ({ children, guessedLetters, conclusion }) => {
  const show = guessedLetters.has(children);

  return (
    <span
      className={`${show || conclusion ? '' : s.underline} ${s.wordLetter} ${conclusion === 'won' ? s.guessed : ''} ${conclusion === 'lost' && show ? s.notGuessed : ''}`}>
      {show || conclusion ? children : null}
    </span>
  );
};

export default WordLetter;
