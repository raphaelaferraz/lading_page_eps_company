import Titulo from "../../components/Titulo";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <Titulo 
        conteudo="Confira nossos principais produtos"
        cor="#1E52CF"
      />
    </div>
  );
}