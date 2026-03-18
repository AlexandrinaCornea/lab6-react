import s from './styles.module.css';

const Letter = ({ children, disabled, onAction }) => {
  return (
    <button
      className={`${s.letter} ${disabled ? s.disabled : ''}`}
      disabled={disabled}
      onClick={onAction}>
      {children}
    </button>
  );
};

export default Letter;
