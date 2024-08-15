import Titulo from "../../components/Titulo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardAplicacoes from "../../components/CardAplicacoes";
import CardProduto from "../../components/CardProduto";
import CardResumoProduto from "../../components/CardResumoProduto";
import Formulario from "../../components/Formulario";
import BotaoWhatsapp from "../../components/BotaoWhatsapp";
import styles from "./styles.module.scss";
import BotaoPrimario from "../../components/BotaoPrimario";
import BotaoSecundario from "../../components/BotaoSecundario";

export default function Home() {
  return (
    <main>
      <Header />
      <section id={"principais-produtos"} className={styles["secao-principais-produtos"]}>
        <Titulo 
          conteudo="Confira nossos principais produtos"
          cor="#1E52CF"
        />

        <div className={styles["secao-principais-produtos__container"]}>
          <CardResumoProduto
            titulo="Placas de Isopor"
            descricao="Sob medida"
            textoBotao="Ver mais"
            imagem="/placas-card-produto.png"
            linkBotao="/"
          />

          <CardResumoProduto
            titulo="Cubos de Isopor"
            descricao="Sob medida"
            textoBotao="Ver mais"
            imagem="/cubos-isopor-card-produto.png"
            linkBotao="/"
          />

          <CardResumoProduto
            titulo="Letras de Isopor"
            descricao="Sob medida"
            textoBotao="Ver mais"
            imagem="/letras-personalizadas-card-produto.png"
            linkBotao="/"
          />

          <CardResumoProduto
            titulo="Contrapiso"
            descricao="Sob medida"
            textoBotao="Ver mais"
            imagem="/contrapiso-card-produto.png"
            linkBotao="/"
          />
        </div>
      </section>

      <section className={styles["secao-aplicacoes"]}>
        <Titulo 
          conteudo="Entenda quais são as aplicações do isopor"
          cor="#C1292E"
        />

        <div className={styles["secao-aplicacoes__container"]}>

          <div className={styles["secao-aplicacoes__container__div"]}>
            <CardAplicacoes 
              background="transparente"
              icone="/home-card-aplicacoes.svg"
              titulo="Contrapiso Leve e Resistente"
              descricao="O isopor é uma solução leve e resistente para contrapisos, proporcionando uma base estável e duradoura para diversos tipos de revestimento. Ideal para quem busca praticidade e qualidade na construção e reforma de pisos."
            />
            <CardAplicacoes 
              background="vermelho"
              icone="/recorte-card-aplicacoes.svg"
              titulo="Recorte Sob Medida"
              descricao="Com recortes sob medida, o isopor pode ser adaptado para atender a diversas necessidades, desde projetos decorativos até aplicações industriais, oferecendo sempre alta precisão e acabamento."
            />
            <CardAplicacoes 
              background="transparente"
              icone="/isolamento-termico-card-aplicacoes.svg"
              titulo="Isolamento Térmico Eficiente"
              descricao="O isopor oferece excelente isolamento térmico, mantendo a temperatura ideal em qualquer estação do ano. Isso resulta em maior conforto e redução no consumo de energia."
            />
          </div>

          <div className={styles["secao-aplicacoes__container__div"]}>
            <CardAplicacoes 
              background="transparente"
              icone="/embalagem-card-aplicacoes.svg"
              titulo="Embalagens Seguras e Práticas"
              descricao="Nossos cubinhos de isopor garantem proteção máxima para produtos diversos, sendo leves e de fácil manuseio. Perfeito para proteger itens frágeis durante o transporte."
            />
            <CardAplicacoes 
              background="vermelho"
              icone="/escultura-card-aplicacoes.svg"
              titulo="Esculturas e Projetos Artísticos"
              descricao="O isopor é perfeito para a criação de esculturas e projetos artísticos devido à sua facilidade de moldagem e leveza. Ideal para artistas e designers que buscam inovação e criatividade em suas obras."
            />
            <CardAplicacoes 
              background="transparente"
              icone="/solucoes-sustentaveis-card-aplicacoes.svg"
              titulo="Soluções Sustentáveis"
              descricao="O isopor é um material reciclável, contribuindo para a sustentabilidade e reduzindo o impacto ambiental. Uma escolha consciente para quem se preocupa com o meio ambiente."
            />
          </div>
        </div>
      </section>
      
      <section className={styles["secao-produto"]}>
        <Titulo 
          conteudo="Entenda quais são as aplicações do isopor"
          cor="#1E52CF"
        />

        <div className={styles["secao-produto__container"]}>
          <CardProduto 
            titulo="Placas de Isopor"
            descricao="Placas de isopor para isolamento térmico e acústico, com diversas espessuras e tamanhos. Ideal para quem busca conforto térmico e acústico em ambientes residenciais e comerciais."
            textoBotao="Faça seu orçamento"
            imagem="/placas-card-produto.png"
            linkBotao="/"
          />

          <CardProduto 
            titulo="Cubos de Isopor"
            descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            textoBotao="Faça seu orçamento"
            imagem="/cubos-isopor-card-produto.png"
            linkBotao="/"
          />
        </div>
      </section>

      <section className={styles["secao-historia"]}>
        <Titulo 
          conteudo="Conheça nossa história"
          cor="#C1292E"
        />

        <div className={styles["secao-historia__container"]}>
          <div className={styles["secao-historia__container__div-imagem"]}>
            <img className={styles["secao-historia__container__div-imagem__imagem"]} src="/imagem-historia.png" alt="Imagem de uma fábrica de isopor" />
          </div>

          <div className={styles["secao-historia__container__div-texto"]}>
            <h3 className={styles["secao-historia__container__div-texto__titulo"]}>Sobre a EPS Company</h3>

            <p className={styles["secao-historia__container__div-texto__descricao"]}>
              Fundada em 2016, a EPS Company se especializou em recortes personalizados de placas de isopor sob medida, oferecendo uma variedade de produtos que atendem às mais diversas necessidades. Nossos produtos são ideais para isolamento térmico, revestimento de pisos e embalagens de produtos diversos, garantindo qualidade e inovação em cada detalhe. Escolha a EPS Company e transforme seu ambiente com soluções em isopor de alta performance.
            </p>

            <div className={styles["secao-historia__container__div-texto__botoes"]}>
              <BotaoPrimario 
                texto="Faça seu orçamento conosco"
                caminho="/"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles["secao-contato"]}>
        <Titulo 
          conteudo="Conheça nossa história"
          cor="#1E52CF"
        />

        <div className={styles["secao-contato__container"]}>
          <div>
            <div className={styles["secao-contato__container__div-texto"]}>
              <p className={styles["secao-contato__container__div-texto__titulo"]}>Endereço</p>
              <div className={styles["secao-contato__container__div-texto__endereco"]}>
                <img className={styles["secao-contato__container__div-texto__endereco__imagem"]} src="/icone-localizacao.svg" alt="Ícone de localização" />
                <p className={styles["secao-contato__container__div-texto__endereco__paragrafo"]}>R. Rio Paranapanema, 750 - Chácara Jaraguá, São Paulo - SP, 05240-090 </p>
              </div>
            </div>

            <div className={styles["secao-contato__container__div-texto"]}>
              <p className={`${styles["secao-contato__container__div-texto__titulo"]} ${styles.contato}`}>Contatos</p>
              <div className={styles["secao-contato__container__div-texto__contatos"]}>
                <img className={styles["secao-contato__container__div-texto__contatos__imagem"]} src="/icone-email.svg" alt="Ícone de email" />
                <a href="mailto:epscompani@gmail.com" className={styles["secao-contato__container__div-texto__contatos__paragrafo"]}>epscompani@gmail.com</a>
              </div>
              <div className={styles["secao-contato__container__div-texto__contatos"]}>
                <img className={styles["secao-contato__container__div-texto__contatos__imagem"]} src="/icone-whatsapp-reduzido.svg" alt="Ícone de whatsapp" />
                <a href="https://wa.me/5511954686050" className={styles["secao-contato__container__div-texto__contatos__paragrafo"]}>(11) 95468-6050</a>
              </div>

              <div className={styles["secao-contato__container__div-texto__div-botoes"]}>
                <BotaoSecundario 
                  texto="Como chegar"
                  caminho="/"
                />

                <BotaoPrimario
                  texto="Faça seu orçamento"
                  caminho="/"
                />
              </div>
            </div>
          </div>

          <div className={styles["secao-contato__container__div-mapa"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.8669993696412!2d-46.76891982584992!3d-23.429171156746822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefc931fe119c1%3A0xe8cea3fb0373a191!2sR.%20Rio%20Paranapanema%2C%20750%20-%20Ch%C3%A1cara%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005240-090!5e0!3m2!1spt-BR!2sbr!4v1723746041773!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles["secao-formulario"]}>
        <Titulo 
          conteudo="Faça seu orçamento"
          cor="#C1292E"
        />

        <div className={styles["secao-formulario__container"]}>
          <Formulario />
        </div>
      </section>

      <BotaoWhatsapp numero="5511954686050" mensagem="Olá, gostaria de fazer um orçamento"/>
      <Footer />
    </main>
  );
}