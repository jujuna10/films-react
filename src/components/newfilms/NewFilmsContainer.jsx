import React from 'react'
import NewFilmsPresentation from './NewFilmsPresentation';
import barImage from '../../assets/bar.png';
import pandaImage from '../../assets/panda.jpg';
import diunImage from '../../assets/diun.png';
import vonkaImage from '../../assets/vonka.png';
import vsImage from '../../assets/vs.png';
import first from '../../assets/1.png';
import second from '../../assets/2.png';
import third from '../../assets/3.png';
import four from '../../assets/4.png';
import five from '../../assets/5.png';


export default function NewFilmsContainer() {

  const moviePosters = [
    barImage,
    pandaImage,
    diunImage,
    vonkaImage,
    vsImage,
    first,
    second,
    third,
    four,
    five
  ];

  const filmsName = [
    'გზისპირა ბარი',
    'კუნგ ფუ პანდა 4',
    'დიუნი:ნაწილი 2',
    'ვონკა',
    'მეტოქეები',
    'სუპერ მარიო ძმების ფილმი',
    'მიგრაცია',
    'მეფუტკრე',
    'დახსნა 2',
    'მეამბოხე მთვარე-ნაწილი პირველი'

  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
      
      
      
      


  return (
    <NewFilmsPresentation posters={moviePosters} names={filmsName} settings={settings}/>
    // <img src={moviePosters[0]} alt="" />
  )
}
