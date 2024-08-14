import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export default function BotaoWhatsapp({ numero, mensagem }) {
  const mensagemCodificada = encodeURIComponent(mensagem);

  return (
    <div className={styles["container-botao"]}>
      <a href={`https://wa.me/${numero}?text=${mensagemCodificada}`} className={styles["container-botao__link"]}>
        <img src="/whatsapp.svg" alt="WhatsApp"/>
      </a>
    </div>
  )
}

BotaoWhatsapp.propTypes = {
  numero: PropTypes.string.isRequired,
  mensagem: PropTypes.string
};