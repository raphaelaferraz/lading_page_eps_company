import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Titulo({ conteudo, cor }) {
  return (
    <section className={styles.secao}>
      <h2 className={styles.secao__titulo}>{conteudo}</h2>
      {/* adiciona cor de fundo do span de acordo com a prop */}
      <div className={styles.secao__span} style={{ background: cor }} />
    </section>
  )
}

Titulo.propTypes = {
  conteudo: PropTypes.string.isRequired,
  cor: PropTypes.string,
};
