import Image from "next/image";
import style from "./about.module.scss";
import Header from "../../components/Header/Header";

export default function Home() {
    const statInfoArr = [
        { count: "3", description: "Locations" },
        { count: "1995", description: "Founded" },
        { count: "65+", description: "Staff Members" },
        { count: "100%", description: "Satisfied Customers" }
    ]

    return <>
        <Header />
        <section className={style.aboutUs}>
            <div className={style.pictures}>
                <div className={style.img_dish}></div>
                <div className={style.img_contacts}></div>
            </div>
            <div className={style.infoAboutUS}>
                <h1>We provide healthy food for your family.</h1>
                <h3>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h3>
                <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
            </div>

        </section>

        <section className={style.statistic}>
            <div className={style.statistic_info}>
                <div className={style.title}>
                    <h1>A little information for our valuable guest</h1>
                    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>

                <div className={style.stat_wrapper}>
                    {statInfoArr.map((el, i) => <div className={style.statisticBlock} key={i}>
                        <h4>{el.count}</h4>
                        <p className={style.descr}>{el.description}</p>
                    </div>)}
                </div>

            </div>

            <div className={style.food_picture}></div>
        </section>

    </>;
}