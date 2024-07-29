import Link from 'next/link'
import style from './header.module.css'

export default function Header() {
    return <header>
        <div className={style.grey_container}>
            <div className={style.wrapper}>
                <div className={style.info}>
                    <div className={style.phone}>
                        <div className={style.imgPhone}></div>
                        <p>(414) 857 - 0107</p>
                    </div>
                    <div className={style.mail}>
                        <div className={style.imgMail}></div>
                        <a href=''>yummy@bistrobliss</a>
                    </div>
                    <div className={style.icons}>
                        <div className={style.iconBlock}>
                            <div className={style.twitter}></div>
                        </div>
                        <div className={style.iconBlock}>
                            <div className={style.facebook}></div>
                        </div>
                        <div className={style.iconBlock}>
                            <div className={style.instagram}></div>
                        </div>
                        <div className={style.iconBlock}>
                            <div className={style.gitHub}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.white_container}>
            <div className={style.logo}>
                <div></div>
                <h1>Bistro Bliss</h1>
            </div>
            <nav className={style.navig_btn}>
                <button><Link href={'/'}>Home</Link></button>
                <button><Link href={'/about'}>About</Link></button>
                <button><Link href={'/menu'}>Menu</Link></button>
            </nav>
            <button>Book A Table</button>
        </div>
    </header>
}