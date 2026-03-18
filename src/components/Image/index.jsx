import s from './styles.module.css';

const Image = ({ src, alt }) => (
  <div className={s.imgContainer}>
    <img className={s.img} src={src} alt={alt} />
  </div>
);

export default Image;
