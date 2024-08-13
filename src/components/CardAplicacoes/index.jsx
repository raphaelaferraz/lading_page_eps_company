import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function CardAplicacoes({ background, icone, titulo, descricao }) {
  const containerClass = background === 'transparente' ? styles.transparente : styles.vermelho;

  return (
    <div className={`${styles.container} ${containerClass}`}>
      <div className={styles["container__container-icone"]}>
        <img src={icone} alt={titulo} className={styles["container__container-icone__icone"]} />
      </div>

      <div className={styles["container__container-texto"]}>
        <p className={`${styles["container__container-texto__titulo"]}`}>{titulo}</p>
        <p className={styles["container__container-texto__descricao"]}>{descricao}</p>
      </div>
    </div>
  )
}

CardAplicacoes.propTypes = {
  background: PropTypes.string.isRequired,
  icone: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};
