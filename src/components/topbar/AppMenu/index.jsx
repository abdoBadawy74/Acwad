import { Collapse } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { basePath } from '@/states/constants'

const AppMenu = ({ mobileMenuOpen, ulClassName }) => {
  const { pathname } = useLocation()

  const menuItems = [
    { label: 'Home', url: '/home' },
    { label: 'About', url: '/about' },
    { label: 'Works', url: '/portfolio/list' },
    // { label: 'Career', url: '/career' },
    { label: 'Contact us', url: '/contact' },
  ]

  return (
    <Collapse in={mobileMenuOpen} className="navbar-collapse">
      <div>
        <ul className={`navbar-nav navbar-nav-scroll mx-auto ${ulClassName ?? ''}`}>
          {menuItems.map((item, idx) => (
            <li key={idx} className="nav-item">
              <Link className={`nav-link ${pathname === item.url ? 'active' : ''}`} to={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Collapse>
  )
}

export default AppMenu
