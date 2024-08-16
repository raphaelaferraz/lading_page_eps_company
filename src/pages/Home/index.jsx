import Titulo from '../../components/Titulo';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CardAplicacoes from '../../components/CardAplicacoes';
import CardProduto from '../../components/CardProduto';
import Formulario from '../../components/Formulario';
import BotaoWhatsapp from '../../components/BotaoWhatsapp';
import styles from './styles.module.scss';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoSecundario from '../../components/BotaoSecundario';
import { useEffect, useState } from 'react';
import CarrosselPrincipaisProdutos from '../../components/CarrosselPrincipaisProdutos';
import CarrosselAplicacoes from '../../components/CarrosselAplicacoes';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <Header />
      <section id={'principais-produtos'} className={styles['secao-principais-produtos']}
      >
        <Titulo conteudo='Confira nossos principais produtos' cor='#1E52CF' />

        <div className={styles['secao-principais-produtos__container']}>
          <CarrosselPrincipaisProdutos />
        </div>
      </section>

      <section id={'aplicacoes'} className={styles['secao-aplicacoes']}>
        <Titulo
          conteudo='Entenda quais são as aplicações do isopor'
          cor='#C1292E'
        />
        <div className={styles['secao-aplicacoes__container']}>
          {isMobile ? (
            <CarrosselAplicacoes />
          ) : (
            <>
              <div className={styles['secao-aplicacoes__container__div']}>
                <CardAplicacoes
                  background='transparente'
                  icone='/home-card-aplicacoes.svg'
                  titulo='Contrapiso Leve e Resistente'
                  descricao='O isopor é uma solução leve e resistente para contrapisos, proporcionando uma base estável e duradoura para diversos tipos de revestimento. Ideal para quem busca praticidade e qualidade na construção e reforma de pisos.'
                />
                <CardAplicacoes
                  background='vermelho'
                  icone='/recorte-card-aplicacoes.svg'
                  titulo='Recorte Sob Medida'
                  descricao='Com recortes sob medida, o isopor pode ser adaptado para atender a diversas necessidades, desde projetos decorativos até aplicações industriais, oferecendo sempre alta precisão e acabamento.'
                />
                <CardAplicacoes
                  background='transparente'
                  icone='/isolamento-termico-card-aplicacoes.svg'
                  titulo='Isolamento Térmico Eficiente'
                  descricao='O isopor oferece excelente isolamento térmico, mantendo a temperatura ideal em qualquer estação do ano. Isso resulta em maior conforto e redução no consumo de energia.'
                />
              </div>

              <div className={styles['secao-aplicacoes__container__div']}>
                <CardAplicacoes
                  background='transparente'
                  icone='/embalagem-card-aplicacoes.svg'
                  titulo='Embalagens Seguras e Práticas'
                  descricao='Nossos cubinhos de isopor garantem proteção máxima para produtos diversos, sendo leves e de fácil manuseio. Perfeito para proteger itens frágeis durante o transporte.'
                />
                <CardAplicacoes
                  background='vermelho'
                  icone='/escultura-card-aplicacoes.svg'
                  titulo='Esculturas e Projetos Artísticos'
                  descricao='O isopor é perfeito para a criação de esculturas e projetos artísticos devido à sua facilidade de moldagem e leveza. Ideal para artistas e designers que buscam inovação e criatividade em suas obras.'
                />
                <CardAplicacoes
                  background='transparente'
                  icone='/solucoes-sustentaveis-card-aplicacoes.svg'
                  titulo='Soluções Sustentáveis'
                  descricao='O isopor é um material reciclável, contribuindo para a sustentabilidade e reduzindo o impacto ambiental. Uma escolha consciente para quem se preocupa com o meio ambiente.'
                />
              </div>
            </>
          )}
        </div>
      </section>

      <section id={'produtos'} className={styles['secao-produto']}>
        <Titulo
          conteudo='Entenda quais são as aplicações do isopor'
          cor='#1E52CF'
        />

        <div className={styles['secao-produto__container']}>
          <CardProduto
            id='placas'
            titulo='Placas de Isopor'
            descricao='Placas de isopor fabricadas sob medida para atender a qualquer objetivo, seja para isolamento térmico, acústico ou outros projetos específicos. Disponíveis em diferentes tipos, como T1, T2 e T3, essas placas podem ser produzidas em diversas espessuras e tamanhos, proporcionando soluções personalizadas para ambientes residenciais, comerciais e industriais. Atendemos tanto pequenas quanto grandes quantidades, garantindo flexibilidade nas encomendas. Para mais informações ou para especificações técnicas, entre em contato com a equipe da EPS Company.'
            textoBotao='Faça seu orçamento'
            imagem='/placas-card-produto.png'
            linkBotao='#formulario'
          />

          <CardProduto
            id={'cubos'}
            titulo='Cubos de Isopor'
            descricao='Cubos de isopor versáteis, ideais para embalagens que protegem produtos durante o transporte e armazenamento. Podem ser confeccionados em diferentes tipos de isopor e são personalizados em tamanhos variados conforme suas preferências. Cada pedido é entregue em sacos de 250 litros, com a quantidade ajustada às necessidades do seu projeto. Garantimos qualidade e precisão em cada peça. Para detalhes adicionais ou para fazer seu pedido personalizado, fale com nossa equipe.'
            textoBotao='Faça seu orçamento'
            imagem='/cubos-isopor-card-produto.png'
            linkBotao='#formulario'
          />

          <CardProduto
            id={'letras'}
            titulo='Letras de Isopor'
            descricao='Letras personalizadas em isopor, perfeitas para destacar fachadas de lojas, empresas ou outros meios de comunicação visual. Disponíveis em diferentes tipos de isopor, essas letras podem ser moldadas em diversos tamanhos e estilos, atendendo às necessidades específicas de sua marca ou evento. Seja para decoração, publicidade ou sinalização, oferecemos soluções criativas e de alta qualidade. Para saber mais sobre as opções de personalização e cores disponíveis, entre em contato com a EPS Company.'
            textoBotao='Faça seu orçamento'
            imagem='/letras-personalizadas-card-produto.png'
            linkBotao='#formulario'
          />

          <CardProduto
            id={'contrapiso'}
            titulo='Contrapiso'
            descricao='Placas de isopor para contrapiso, disponíveis em diversos tamanhos e tipos, proporcionando uma base leve, resistente e de fácil instalação. Ideais para projetos de construção e reforma, essas placas são uma solução eficiente para melhorar o isolamento térmico e acústico de qualquer ambiente. Desenvolvemos produtos sob medida para atender a diferentes especificações de obras. Para mais informações ou para consultar as opções disponíveis, entre em contato com nossa equipe especializada.'
            textoBotao='Faça seu orçamento'
            imagem='/contrapiso-card-produto.png'
            linkBotao='#formulario'
          />
        </div>
      </section>

      <section id={'historia'} className={styles['secao-historia']}>
        <Titulo conteudo='Conheça nossa história' cor='#C1292E' />

        <div className={styles['secao-historia__container']}>
          <div className={styles['secao-historia__container__div-imagem']}>
            <img
              className={
                styles['secao-historia__container__div-imagem__imagem']
              }
              src='/imagem-historia.png'
              alt='Imagem de uma fábrica de isopor'
            />
          </div>

          <div className={styles['secao-historia__container__div-texto']}>
            <h3
              className={styles['secao-historia__container__div-texto__titulo']}
            >
              Sobre a EPS Company
            </h3>

            <p
              className={
                styles['secao-historia__container__div-texto__descricao']
              }
            >
              Fundada em 2016, a EPS Company se especializou em recortes
              personalizados de placas de isopor sob medida, oferecendo uma
              variedade de produtos que atendem às mais diversas necessidades.
              Nossos produtos são ideais para isolamento térmico, revestimento
              de pisos e embalagens de produtos diversos, garantindo qualidade e
              inovação em cada detalhe. Escolha a EPS Company e transforme seu
              ambiente com soluções em isopor de alta performance.
            </p>

            <div
              className={styles['secao-historia__container__div-texto__botoes']}
            >
              <BotaoPrimario texto='Faça seu orçamento conosco' caminho='#formulario' />
            </div>
          </div>
        </div>
      </section>

      <section id={'contato'} className={styles['secao-contato']}>
        <Titulo conteudo='Entre em contato conosco' cor='#1E52CF' />

        <div className={styles['secao-contato__container']}>
          <div>
            <div className={styles['secao-contato__container__div-texto']}>
              <p
                className={
                  styles['secao-contato__container__div-texto__titulo']
                }
              >
                Endereço
              </p>
              <div
                className={
                  styles['secao-contato__container__div-texto__endereco']
                }
              >
                <img
                  className={
                    styles[
                      'secao-contato__container__div-texto__endereco__imagem'
                    ]
                  }
                  src='/icone-localizacao.svg'
                  alt='Ícone de localização'
                />
                <a href="https://maps.app.goo.gl/HUZVxqZxSEVCR24T8"
                  className={
                    styles[
                      'secao-contato__container__div-texto__endereco__paragrafo'
                    ]
                  }
                >
                  R. Rio Paranapanema, 750 - Chácara Jaraguá, São Paulo - SP,
                  05240-090
                </a>
              </div>
            </div>

            <div className={styles['secao-contato__container__div-texto']}>
              <p
                className={`${styles['secao-contato__container__div-texto__titulo']} ${styles.contato}`}
              >
                Contatos
              </p>
              <div
                className={
                  styles['secao-contato__container__div-texto__contatos']
                }
              >
                <img
                  className={
                    styles[
                      'secao-contato__container__div-texto__contatos__imagem'
                    ]
                  }
                  src='/icone-email.svg'
                  alt='Ícone de email'
                />
                <a
                  href='mailto:epscompani@gmail.com'
                  className={
                    styles[
                      'secao-contato__container__div-texto__contatos__paragrafo'
                    ]
                  }
                >
                  epscompani@gmail.com
                </a>
              </div>
              <div
                className={
                  styles['secao-contato__container__div-texto__contatos']
                }
              >
                <img
                  className={
                    styles[
                      'secao-contato__container__div-texto__contatos__imagem'
                    ]
                  }
                  src='/icone-whatsapp-reduzido.svg'
                  alt='Ícone de whatsapp'
                />
                <a
                  href='https://wa.me/5511954686050'
                  className={
                    styles[
                      'secao-contato__container__div-texto__contatos__paragrafo'
                    ]
                  }
                >
                  (11) 95468-6050
                </a>
              </div>

              <div
                className={
                  styles['secao-contato__container__div-texto__div-botoes']
                }
              >
                <BotaoSecundario texto='Como chegar' caminho='https://maps.app.goo.gl/HUZVxqZxSEVCR24T8' />

                <BotaoPrimario texto='Faça seu orçamento' caminho='#formulario' />
              </div>
            </div>
          </div>

          <div className={styles['secao-contato__container__div-mapa']}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.8669993696412!2d-46.76891982584992!3d-23.429171156746822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefc931fe119c1%3A0xe8cea3fb0373a191!2sR.%20Rio%20Paranapanema%2C%20750%20-%20Ch%C3%A1cara%20Jaragu%C3%A1%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005240-090!5e0!3m2!1spt-BR!2sbr!4v1723746041773!5m2!1spt-BR!2sbr'
              width='400'
              height='300'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </section>

      <section id={'formulario'} className={styles['secao-formulario']}>
        <Titulo conteudo='Faça seu orçamento' cor='#C1292E' />

        <div className={styles['secao-formulario__container']}>
          <Formulario />
        </div>
      </section>

      <BotaoWhatsapp
        numero='5511954686050'
        mensagem='Olá, gostaria de fazer um orçamento'
      />
      <Footer />
    </main>
  );
}
