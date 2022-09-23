import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { startLogout } from '../../store/auth/thunks';

// TODO: Primera Tarea: En el componente Navbar.jsx agregar la clase active utilizando el callback que ofrecen los NavLinks de react-router-dom en su atributo className.

export const Navbar = () => {

    const navigate = useNavigate();
    const { displayName } = useSelector(state => state.auth)
    const { logout } = useContext(AuthContext)
    const dispatch = useDispatch()

    const isActive = ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`
    
    const onLogout = () => {
        dispatch(startLogout())
        logout();

        navigate('/login', {
            replace: true
        })
    }
        

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={isActive} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>
 
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className="user">
                        { displayName }
                   </span>
                   <button 
                        className='btn nav-item nav-link'
                        onClick={onLogout}
                   > 
                        Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}