import React, { useEffect, useState } from "react"
import { useFetch } from '../../hooks/useFetch'
import { HeroContext } from "./HeroContext"

export const HeroProvider = ({children}) => { 

    const {data, isLoading} = useFetch('https://akabab.github.io/superhero-api/api/all.json')
    const getHeroByName = (search) => {
        if(search !== ''){
            const searchHero = search.toLowerCase()
            const valueFilter = data?.filter((hero) => hero.name.toLowerCase().includes(searchHero))
            return valueFilter
        }
    }
    
    return(
        <div className="containerHero">
            <HeroContext.Provider value={{data, isLoading, getHeroByName}}>
                {children}
            </HeroContext.Provider>

        </div>
    )
}