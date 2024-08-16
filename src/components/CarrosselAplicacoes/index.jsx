import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import CardAplicacoes from '../CardAplicacoes';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CarrosselAplicacoes() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }}
    >
      <SwiperSlide>
        <CardAplicacoes
          background='transparente'
          icone='/home-card-aplicacoes.svg'
          titulo='Contrapiso Leve e Resistente'
          descricao='O isopor é uma solução leve e resistente para contrapisos, proporcionando uma base estável e duradoura para diversos tipos de revestimento. Ideal para quem busca praticidade e qualidade.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardAplicacoes
          background='vermelho'
          icone='/recorte-card-aplicacoes.svg'
          titulo='Recorte Sob Medida'
          descricao='Com recortes sob medida, o isopor pode ser adaptado para atender a diversas necessidades, desde projetos decorativos até aplicações industriais, oferecendo sempre alta precisão e acabamento.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardAplicacoes
          background='transparente'
          icone='/isolamento-termico-card-aplicacoes.svg'
          titulo='Isolamento Térmico Eficiente'
          descricao='O isopor oferece excelente isolamento térmico, mantendo a temperatura ideal em qualquer estação do ano. Isso resulta em maior conforto e redução no consumo de energia.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardAplicacoes
          background='transparente'
          icone='/embalagem-card-aplicacoes.svg'
          titulo='Embalagens Seguras e Práticas'
          descricao='Nossos cubinhos de isopor garantem proteção máxima para produtos diversos, sendo leves e de fácil manuseio. Perfeito para proteger itens frágeis durante o transporte.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardAplicacoes
          background='vermelho'
          icone='/escultura-card-aplicacoes.svg'
          titulo='Esculturas e Projetos Artísticos'
          descricao='O isopor é perfeito para a criação de esculturas e projetos artísticos devido à sua facilidade de moldagem e leveza. Ideal para artistas e designers que buscam inovação e criatividade em suas obras.'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardAplicacoes
          background='transparente'
          icone='/solucoes-sustentaveis-card-aplicacoes.svg'
          titulo='Soluções Sustentáveis'
          descricao='O isopor é um material reciclável, contribuindo para a sustentabilidade e reduzindo o impacto ambiental. Uma escolha consciente para quem se preocupa com o meio ambiente.'
        />
      </SwiperSlide>
    </Swiper>
  );
}
