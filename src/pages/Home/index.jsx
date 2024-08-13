import Titulo from "../../components/Titulo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
      <Footer />
    </main>
  );
}