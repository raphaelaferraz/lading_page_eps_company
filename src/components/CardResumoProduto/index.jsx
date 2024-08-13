import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import BotaoPrimario from '../BotaoPrimario';

export default function CardResumoProduto({ titulo, descricao, textoBotao, linkBotao, imagem }) {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${imagem})` }}>
      <div className={styles["container__container-texto"]}>
        <div className={styles["container__container-texto__div"]}>
          <p className={`${styles["container__container-texto__div__titulo"]}`}>{titulo}</p>
          <p className={styles["container__container-texto__div__descricao"]}>{descricao}</p>
        </div>
        <div className={styles["container__container-texto__botao"]}>
          <BotaoPrimario 
            texto={textoBotao}
            caminho={linkBotao}
          />
        </div>
      </div>
    </div>
  )
}

CardResumoProduto.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  textoBotao: PropTypes.string.isRequired,
  linkBotao: PropTypes.string.isRequired,
};