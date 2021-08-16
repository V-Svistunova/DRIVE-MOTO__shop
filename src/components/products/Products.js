import s from "./Products.module.scss"

// components
import SectionProduct from "./../sectionProduct/SectionProduct";

//images
import productImg1 from './../../assets/images/product/img-1.png';
import productImg2 from './../../assets/images/product/img-2.png';
import productImg3 from './../../assets/images/product/img-3.png';
import productImg4 from './../../assets/images/product/img-4.png';
import productImg5 from './../../assets/images/product/img-5.png';
import productImg6 from './../../assets/images/product/img-6.png';



function Products(props) {
  const dataProduct1 = {
    title: "Квадроциклы",
    img: productImg1,
    link: "/1",
  }

  const dataProduct2 = {
      title: "Гидроциклы",
      img: productImg2,
      link: "/2"
  }

  const dataProduct3 = {
      title: "Катера",
      img: productImg3,
      link: "/3"
  }

  const dataProduct4 = {
      title: "Снегоходы",
      img: productImg4,
      link: "/4"
  }

  const dataProduct5 = {
      title: "Вездеходы",
      img: productImg5,
      link: "/5"
  }

  const dataProduct6 = {
      title: "Двигатели",
      img: productImg6,
      link: "/6"
  }

  return (
    <div className={s.products}>
      <SectionProduct title={dataProduct1.title} link={dataProduct1.link} img={dataProduct1.img} />
      <SectionProduct title={dataProduct2.title} link={dataProduct2.link} img={dataProduct2.img} />
      <SectionProduct title={dataProduct3.title} link={dataProduct3.link} img={dataProduct3.img} />
      <SectionProduct title={dataProduct4.title} link={dataProduct4.link} img={dataProduct4.img} />
      <SectionProduct title={dataProduct5.title} link={dataProduct5.link} img={dataProduct5.img} />
      <SectionProduct title={dataProduct6.title} link={dataProduct6.link} img={dataProduct6.img} />
    </div>      
  );
}

export default Products;