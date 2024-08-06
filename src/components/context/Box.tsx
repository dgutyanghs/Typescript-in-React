import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
    const theme1 = useContext(ThemeContext)

    return <div style={{ backgroundColor: theme1.primary.main, color: theme1.primary.text}}> Theme context</div>
}