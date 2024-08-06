import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}
// {isLoggedIn, component:Component}: PrivateProps // destruction and rename component
// export const Private = ({isLoggedIn, component:Component}: PrivateProps) => {
export const Private = (pp: PrivateProps) => {
    if (pp.isLoggedIn) {
        const {component : Component} = pp
        return <Component name='Vishwas'/>
    } else {
        return <Login />
    }
}