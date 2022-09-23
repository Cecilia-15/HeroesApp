import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/NavBar'
import { HeroProvider } from '../context/HeroProvider'
import { HeroByPublisherPage } from '../pages/HeroByPublisherPage'
import { HeroPage } from '../pages/HeroPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRoutes = () => {
  return (
    <>
      <HeroProvider>
        <Navbar />

        <div className="container">
        <Routes>

            <Route path='/publisher' element={<HeroByPublisherPage />} />

            <Route path='search' element={<SearchPage />} />
            <Route path='hero/:heroId' element={<HeroPage />} />           

            <Route path='/' element={<Navigate to='/publisher' />} />
        </Routes> 
        </div>

      </HeroProvider>
    </>
  )
}
