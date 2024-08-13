import Titulo from "../../components/Titulo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardAplicacoes from "../../components/CardAplicacoes";
import CardProduto from "../../components/CardProduto";

export default function Home() {
  return (
    <main>
      <Header />
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
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
      />
      <Footer />
    </main>
  );
}