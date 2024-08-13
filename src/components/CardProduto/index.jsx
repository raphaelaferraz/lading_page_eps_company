import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import BotaoPrimario from '../BotaoPrimario';

export default function CardProduto({ titulo, descricao, textoBotao, imagem, linkBotao }) {
  return (
    <div className={styles.container}>
      <div className={styles["container__container-imagem"]}>
        <img src={imagem} alt={titulo} className={styles["container__container-imagem__imagem"]} />
      </div>

      <div className={styles["container__container-texto"]}>
        <p className={`${styles["container__container-texto__titulo"]}`}>{titulo}</p>
        <p className={styles["container__container-texto__descricao"]}>{descricao}</p>
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

CardProduto.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  textoBotao: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  linkBotao: PropTypes.string.isRequired,
};