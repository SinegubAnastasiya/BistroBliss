"use client"
import Image from "next/image";
import style from "./menu.module.scss";
import Header from "../../components/Header/Header";
import Link from 'next/link'
import menuArr from "@/storage/storage";

export default function Home() {

    return <>
        <Header />
        <div className={style.menu_wrapper}>
            <div className={style.menu_title}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>

            <div className={style.container}>
                {menuArr.map((el, id) => <Link href={`/menu/${el.id}`} key={id}>
                    <div className={style.item}>
                        <div className={el.img}></div>
                        <div className={style.text_container}>
                            <p className={style.price}>{el.price}</p>
                            <h2>{el.dish}</h2>
                            <p>{el.description}</p>
                        </div>
                    </div>
                </Link>
                )}
            </div>
        </div>

    </>;
}