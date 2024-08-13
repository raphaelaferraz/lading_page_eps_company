import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import BotaoPrimario from '../BotaoPrimario';
import BotaoSecundario from '../BotaoSecundario';

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getMenuImage = () => {
    if (menuOpen) {
      return "/close.svg";
    } else {
      return "/menu.svg";
    }
  };

  return ReactDOM.createPortal(
    <header className={`${styles.header} ${scroll ? styles.scrolled : ''} ${menuOpen ? styles["menu-ativo"] : ''}`}>
      <section className={styles.header__section}>
        <div className={styles.header__container}>
          {window.innerWidth > 768 ? <img className={styles.header__container__imagem} src="/logo-desktop.svg"/> : <img className={styles.header__container__imagem} src="/logo-mobile.svg"/>}
        </div>
        <input type="checkbox" id="menuToggle" className={styles.header__menu} onChange={toggleMenu}/>
        <label htmlFor="menuToggle" className={styles.header__menu__label}>
          <img src={getMenuImage()} alt={menuOpen ? 'Close' : 'Menu'} className={menuOpen ? styles.header__menu__label__close : styles.header__menu__label__open} />
        </label>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__link} href="/">Produtos</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__link} href="/">Aplicações do Isopor</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__link} href="/">Sobre nós</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__link} href="/">Contato</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={`${styles.header__nav__list__item__link} ${styles.header__nav__list__item__link__botao}`} href="/">Faça seu orçamento</a>
            </li>
          </ul>
        </nav>
      </section>

      <div className={styles["header__container-infos"]}>
        <h1 className={styles["header__container-infos__titulo"]}>Transforme seu ambiente 
        com isopor <span className={styles["header__container-infos__titulo__span-vermelho"]}>sob </span><span className={styles["header__container-infos__titulo__span-azul"]}>medida</span>!</h1>
      </div>

      <div className={`${styles["header__container-botoes"]} ${menuOpen ? styles["hidden"] : ''}`}>
        <BotaoSecundario 
          texto="Conheça nossos produtos"
          caminho="/produtos"
        />
        <BotaoPrimario 
          texto="Faça seu orçamento"
          caminho="/produtos"
        />
      </div>
    </header>, document.getElementById('header')
  );
}
