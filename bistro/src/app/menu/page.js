import Image from "next/image";
import style from "./menu.module.scss";
import Header from "../../components/Header/Header";

export default function Home() {

    const menuArr = [
        { img: style.img_egg, price: "$ 9.99", dish: "Fried Eggs", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
        { img: style.img_pizza, price: "$ 15.99", dish: "Hawaiian Pizza", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
        { img: style.img_cocktail, price: "$ 7.25", dish: "Martinez Cocktail", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
        { img: style.img_cake, price: "$ 20.99", dish: "Butterscotch Cake", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
        { img: style.img_lemonade, price: "$ 5.89", dish: "Mint Lemonade", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
        { img: style.img_icecream, price: "$ 18.05", dish: "Chocolate Icecream", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
        { img: style.img_burger, price: "$ 12.55", dish: "Cheese Burger", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
        { img: style.img_waffles, price: "$ 12.99", dish: "Classic Waffles", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
    ]

    return <>
        <Header />
        <div className={style.menu_wrapper}>
            <div className={style.menu_title}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>

            <div className={style.container}>
                {menuArr.map((el, i) => 
                    <div className={style.item}>
                        <div className={el.img}></div>
                        <div className={style.text_container}>
                            <p className={style.price}>{el.price}</p>
                            <h2>{el.dish}</h2>
                            <p>{el.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>

    </>;
}