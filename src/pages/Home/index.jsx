import Titulo from "../../components/Titulo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardAplicacoes from "../../components/CardAplicacoes";
import CardProduto from "../../components/CardProduto";
import CardResumoProduto from "../../components/CardResumoProduto";
import Input from "../../components/Input";
import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import Textarea from "../../components/Textarea";

export default function Home() {

  const [nome, setNome] = useState('');

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
        linkBotao="/"
      />

      <CardResumoProduto 
        titulo="Placas de Isopor"
        descricao="Sob medida"
        textoBotao="Ver mais"
        imagem="/placas-card-produto.png"
        linkBotao="/"
      />

      <Input 
        label={"nome"}
        type={"text"}
        name={"nome"}
        value={nome}
        placeholder={"Digite seu nome"}
        onChange={setNome}
      />

      <Dropdown 
        id={"estado"}
        label={"Estado"}
        options={["São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo"]}
        value={"São Paulo"}
        onChange={(value) => console.log(value)}
      />

      <Textarea 
        id={"mensagem"}
        label={"Mensagem"}
        name={"mensagem"}
        value={""}
        placeholder={"Digite sua mensagem"}
        onChange={(value) => console.log(value)}
      />

      <Footer />
    </main>
  );
}