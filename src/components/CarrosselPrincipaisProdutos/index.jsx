import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import CardResumoProduto from '../CardResumoProduto';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function CarrosselPrincipaisProdutos() {
  return (
    <Swiper
      pagination={{
        type: 'fraction'
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1028: {
          slidesPerView: 3
        },
        1440: {
          slidesPerView: 4
        }
      }}
    >
      <SwiperSlide>
        <CardResumoProduto
          titulo='Placas de Isopor'
          descricao='Sob medida'
          textoBotao='Ver mais'
          imagem='/placas-card-produto.png'
          linkBotao='/'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardResumoProduto
          titulo='Cubos de Isopor'
          descricao='Sob medida'
          textoBotao='Ver mais'
          imagem='/cubos-isopor-card-produto.png'
          linkBotao='/'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardResumoProduto
          titulo='Letras de Isopor'
          descricao='Sob medida'
          textoBotao='Ver mais'
          imagem='/letras-personalizadas-card-produto.png'
          linkBotao='/'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardResumoProduto
          titulo='Contrapiso'
          descricao='Sob medida'
          textoBotao='Ver mais'
          imagem='/contrapiso-card-produto.png'
          linkBotao='/'
        />
      </SwiperSlide>
    </Swiper>
  );
}
