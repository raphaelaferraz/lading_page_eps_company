import Titulo from "../../components/Titulo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardAplicacoes from "../../components/CardAplicacoes";
import CardProduto from "../../components/CardProduto";
import CardResumoProduto from "../../components/CardResumoProduto";
import styles from "./styles.module.scss";
import Formulario from "../../components/Formulario";

export default function Home() {
  

  return (
    <main>
      <Header />
      <Titulo 
        conteudo="Confira nossos principais produtos"
        cor="#1E52CF"
      />
      
      <CardAplicacoes 
        background="transparente"
        icone="/home-card-aplicacoes.svg"
        titulo="Contrapiso Leve e Resistente"
        descricao="O isopor é uma solução leve e resistente para contrapisos, proporcionando uma base estável e duradoura para diversos tipos de revestimento. Ideal para quem busca praticidade e qualidade na construção e reforma de pisos."
      />

      <CardProduto 
        titulo="Placas de Isopor"
        descricao="Placas de isopor para isolamento térmico e acústico, com diversas espessuras e tamanhos. Ideal para quem busca conforto térmico e acústico em ambientes residenciais e comerciais."
        textoBotao="Faça seu orçamento"
        imagem="/placas-card-produto.png"
        linkBotao="/"
      />

      <CardResumoProduto 
        titulo="Placas de Isopor"
        descricao="Sob medida"
        textoBotao="Ver mais"
        imagem="/placas-card-produto.png"
        linkBotao="/"
      />

      <Formulario />

      <div className={styles["container-botao"]}>
        <a href="https://wa.me/5511954686050" className={styles["container-botao__link"]}>
          <img src="/whatsapp.svg" alt="WhatsApp"/>
        </a>
      </div>
      <Footer />
    </main>
  );
}