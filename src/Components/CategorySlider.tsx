import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


import { GlobalContext } from '../context/GlobalState';


const Slide = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  /* Resmi kutuya uyacak şekilde kesmeye yarar*/
    transition-timing-function: ease-in-out;
      }

  /* Slider container için minimum boyut ayarı */
  height: 400px;
`;

const CustomDots = styled.ul`
  position: absolute;
  bottom: 20px; /* Noktaların yerleşimini ayarlar */
  left: 50%;
  transform: translateX(-50%);
  display: flex !important;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin: 0 5px;

    button {
      font-size: 0;
      background: #ddd;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      border: none;

      &:before {
        content: "";
      }
    }

    &.slick-active button {
      background: #fff;
    }
  }
`;



const SimpleSlider: React.FC = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useContext must be used within a GlobalProvider');
  }

  const { slide2 } = context;

  const settings = {
    dots: true,//noktalar var veya yok
    infinite: true,//sonsuz döngü
    speed: 400,
    slidesToShow: 1,//her sslaytta tek resim gösterilir
    slidesToScroll: 1,//her slayt geçişidne tek tek geçer
    autoplay: true, // Otomatik geçişi aktif eder
    autoplaySpeed: 3000, // Her slaytın ne kadar süreyle görüntüleneceğini belirler (ms cinsinden)
    arrows: false, // Okları gizler
    appendDots: (dots: React.ReactNode) => <CustomDots>{dots}</CustomDots>, // Noktaları özelleştirir

  };


  return (//slider olultururken settins elemanlarını alıp datadaki elemanlar için birer slider oluşturulur.Slide değişkeni dizideki gerçek elemanları temsil eder. index de map fonksiyonun her bir döngüdeki sırasını belirtir.Reactta döngüler ve listelerle oluşturulan bileşenlerin bir keyi olması gerektiği için key değerine indexi verdim
    <Slider {...settings}>
      {slide2.map((slide2, index) => (
        <Slide key={index}>
          <img src={slide2.src} alt={slide2.alt} />
        </Slide>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
