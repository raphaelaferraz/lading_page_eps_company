import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function BotaoPrimario({ texto, caminho }) {
  return (
    <a className={styles.botao} href={caminho}>
      {texto}
    </a>
  );
}

BotaoPrimario.propTypes = {
  texto: PropTypes.string.isRequired,
  caminho: PropTypes.string.isRequired,
};