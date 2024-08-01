'use client'

import Header from '@/components/Header/Header'
import style from './id.module.scss'
import { useParams } from 'next/navigation'
import storage from '../../../storage/storage'
import { useEffect, useState } from 'react'

export default function Func() {
    const { id } = useParams()
    const [currentItem, setCurrentItem] = useState([])

    useEffect(() => {
       const filteredData = storage.filter(el => el.id == id)
       setCurrentItem(filteredData)
    }, [])

    return <>
        <Header></Header>

        <div className={style.dish_wrapper}>
            <div className={`${currentItem[0]?.img} ${style.img}`}></div>
            <div className={style.dish_info}>
                <h1>{currentItem[0]?.dish}</h1>
                <h2>{currentItem[0]?.description}</h2>
                <p>Total: {currentItem[0]?.price}</p>
            </div>
        </div>
    </>
}