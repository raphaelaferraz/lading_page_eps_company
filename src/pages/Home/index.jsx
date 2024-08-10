import Titulo from "../../components/Titulo";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <main>
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