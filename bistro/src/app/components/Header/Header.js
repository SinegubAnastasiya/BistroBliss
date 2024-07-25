import style from './header.module.css'

export default function Header() {
    return <header>
        <div className={style.wrapper}>
            <div className={style.grey_container}>
                <div className={style.info}>
                    <div className={style.phone}>
                        <div className={style.imgPhone}></div>
                        <p>(414) 857 - 0107</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
}