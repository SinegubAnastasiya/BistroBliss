import style from "./page.module.scss";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  const menuArr = [
    { img: style.breakf, title: 'Breakfast', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: style.main, title: 'Main Dishes', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: style.drinks, title: 'Drinks', text: 'In the new era of technology we look in the future with certainty and pride for our life.' },
    { img: style.dessert, title: 'Desserts', text: 'In the new era of technology we look in the future with certainty and pride for our life.' }
  ]

  const servicesArr = [
    { img: style.catering, title: 'Caterings', text: 'In the new era of technology we look in the future with certainty for life.' },
    { img: style.birthday, title: 'Birthdays', text: 'In the new era of technology we look in the future with certainty for life.' },
    { img: style.wedding, title: 'Weddings', text: 'In the new era of technology we look in the future with certainty for life.' },
    { img: style.events, title: 'Events', text: 'In the new era of technology we look in the future with certainty for life.' }
  ];

  return <>
    <Header />
    <main>
      <div className={style.main_image}>
        <div className={style.title}>
          <h1>Best food for your taste</h1>
          <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        </div>

        <div className={style.btns}>
          <button className={style.btn_reserve}>Book A Table</button>
          <button className={style.btn_menu}>Explore Menu</button>
        </div>
      </div>

      <div className={style.section_2}>
        <h1>Browse Our Menu</h1>

        <div className={style.menu}>
          {menuArr.map((el, i) => <div className={style.dishes} key={i}>
            <div className={el.img}></div>
            <h2 className={style.title}>{el.title}</h2>
            <p>{el.text}</p>
            <a href="" className={style.link}>Explore Menu</a>
          </div>)}
        </div>

      </div>

      <div className={style.section_3}>
        <h1 className={style.service_title}>We also offer unique services for your events</h1>

        <div className={style.services_sect}>
          {servicesArr.map((el, i) => <div className={style.services} key={i}>
            <div className={el.img}></div>
            <h2>{el.title}</h2>
            <p>{el.text}</p>
          </div>
          )}
        </div>

      </div>
    </main>
    <Footer />
  </>;
}