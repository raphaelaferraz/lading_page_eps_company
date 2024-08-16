import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
      
        <div className={styles["footer__container-imagem"]}>
          <img src="/logo-footer.svg" alt="EPS Company" className={styles["footer__container-imagem__imagem"]}/>
        </div>

        <ul className={styles.footer__container__lista}>
          <li className={styles.footer__container__lista__item}>
            <a className={styles.footer__container__lista__item__link} href="https://www.facebook.com/epscompany" rel="noreferrer">
              <img className={styles.footer__container__lista__item__link__imagem} src="/icone-facebook.svg" alt="Facebook" />
              Facebook
            </a>
          </li>

          <li className={styles.footer__container__lista__item}>
            <a className={styles.footer__container__lista__item__link} href="https://www.instagram.com/epscompany" rel="noreferrer">
              <img className={styles.footer__container__lista__item__link__imagem} src="/icone-instagram.svg" alt="Instagram" />
              Instagram
            </a>
          </li>

          <li className={styles.footer__container__lista__item}>
            <a className={styles.footer__container__lista__item__link} href="https://wa.me/5511954686050" rel="noreferrer">
              <img className={styles.footer__container__lista__item__link__imagem} src="/icone-whatsapp.svg" alt="WhatsApp" />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className={styles["footer__container-copy"]}>
        <p className={styles["footer__container-copy__paragrafo"]}>Todos os direitos reservados | &copy; 2024 EPS Company </p>
      </div>
    </footer>
  )
}