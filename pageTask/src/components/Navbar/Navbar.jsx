
import {  useNavigate } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {

    const navigate = useNavigate()

  return (
    <div className={style.nav}>
        
        <nav >
                <ul>
                    <li onClick={() => navigate('/')}>
                        Home
                    </li>
                    <li onClick={() => navigate('/contact')}>
                        Contact
                    </li>
                    <li onClick={() => navigate('/task')}>
                        Task
                    </li>
                </ul>
        </nav>
        
    </div>
  )
}

export default Navbar