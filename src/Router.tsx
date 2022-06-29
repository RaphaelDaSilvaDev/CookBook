import { Routes, Route } from 'react-router-dom'
import { Category } from './pages/Category'
import { Home } from './pages/Home'
import { Recipe } from './pages/Recipe'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:category' element={<Category />} />
            <Route path='/user/:slug' element={<Recipe />} />
        </Routes>
    )
}