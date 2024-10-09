import React from 'react'
import NewSSerialsPresentation from './NewSerialsPresentation'
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.png'
import s5 from '../../assets/s5.png'
import s6 from '../../assets/s6.png'
import s7 from '../../assets/s7.png'
import s8 from '../../assets/s8.png'
import s9 from '../../assets/s9.png'
import s10 from '../../assets/s10.png'
import s11 from '../../assets/s11.png'
import s12 from '../../assets/s12.png'
import s13 from '../../assets/s13.png'
import s14 from '../../assets/s14.png'
import s15 from '../../assets/s15.png'
import s16 from '../../assets/s16.png'
import s17 from '../../assets/s17.png'



export default function NewSerialsContainer() {

    const serialsPoster = [
        s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17
    ]

    const serialsName = ['სამი სხეულის პრობლემა','სნოუფოლი','ბიჭები (2019)','ბრიჯერტონი (2020)','კობრა კაი','ერთი დღე','სიოგუნი (2024)','ქაღალდის სახლი: ბერლინი','კონტინენტალი: ჯონ ვიკის სამყაროდან','დეიზი ჯონსი და ჯგუფი THE SIX (2023)','თეთრი სახლის სანტექნიკოსები (2023)','ვან პისი (2023)','საიდუმლო შეჭრა (2023)','ქასთლვანია: ნოქტიურონი (2023)','ბუნკერი (2023)','ასოკა (2023)','სიყვარული და სიკვდილი (2023)']


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
          
          
          

  return (
    <NewSSerialsPresentation poster={serialsPoster} names={serialsName} settings={settings}/>
  )
}
