import Link from 'next/link'
import style from './footer.module.scss'

export default function Footer() {
    return <footer className={style.wrapper}>
            <div className={style.main_info}>
                <div className={style.logo}>
                    <div></div>
                    <h1>Bistro Bliss</h1>
                </div>
                <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
            </div>
            <nav>
                <h2>Pages</h2>
                <p>Home</p>
                <p>About</p>
                <p>Menu</p>
                <p>Pricing</p>
                <p>Blog</p>
                <p>Contact</p>
                <p>Delivery</p>
            </nav>
            <nav>
                <h2>Utility Pages</h2>
                <p>Start Herte</p>
                <p>Styleguide</p>
                <p>Password Protected</p>
                <p>404 Not Found</p>
                <p>Licenses</p>
                <p>Changelog</p>
                <p>View More</p>
            </nav>
            <nav>
                <h2>Follow Us On Instagram</h2>
                <div className={style.instaImg}>
                    <div className={style.soup}></div>
                    <div className={style.potato}></div>
                    <div className={style.salad}></div>
                    <div className={style.pancakes}></div>
                </div>
            </nav>

    </footer>
}