import React from 'react'
// import { useContext } from 'react'
// import { HeroContext } from '../context/HeroContext'
// import { useCounter } from '../../hooks/useCounter'
import '../../../src/styles.css'

export const Pagination = ({ page, increment, decrement, lastPage  }) => {
    
    const prevPage = () => {
        if(page>1){
            decrement()
        }
    }

    const nextPage = () => {
        if(page<lastPage) {
            increment()
        }
    }

    

    return (
        <>
        <div>
            <div className='containerPagination'>
                <button className='button button1' onClick={prevPage}>{'<'}</button>
                <p>{page}</p>
                <button className='button button1' onClick={nextPage}>{'>'}</button>
            </div>
        </div>
            
        </>
    )
}
