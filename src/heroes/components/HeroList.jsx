import React, { useContext, useMemo } from 'react'
import { HeroContext } from '../context/HeroContext'
import { HeroCard } from './HeroCard'
import { Pagination } from './Pagination'
import { useCounter } from '../../hooks/useCounter'


export const HeroList = () => {
  const {data, isLoading} = useContext(HeroContext)

  const { counter, decrement, increment, reset } = useCounter(1)
  const maxHeroes = 20;
  const lastPage = Math.ceil((data?.length || 0) / maxHeroes)

  return (
    <>
      <Pagination
        page={counter}
        decrement={decrement}
        increment={increment}
        lastPage={lastPage}
      />
 
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 list'>  
    
        { isLoading ?
            <p>Im loading...</p>
            :
            data?.slice((counter - 1) * 20, ((counter - 1) * 20) + 20 ).map(hero => (
              <HeroCard key={hero.id} data={hero} />
            ))
        }
    </div>
    </>
  )
}
