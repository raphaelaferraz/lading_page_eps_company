import Titulo from "../../components/Titulo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardAplicacoes from "../../components/CardAplicacoes";

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
      <Footer />
    </main>
  );
}