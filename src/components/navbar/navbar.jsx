import { useEffect, useState } from 'react'
import { getTopNav } from '../../data/navbars'
const Navbar = () => {
  const [navItems, setNavItems] = useState([])
  const [collapse, setCollapse] = useState('nav_menu')
  const [toggleIcon, setToggleIcon] = useState('toggler_icon')

  useEffect(() => {
    setNavItems(getTopNav())
  }, [])

  const onToggle = () => {
    collapse === 'nav_menu'
      ? setCollapse('nav_menu nav_collapse')
      : setCollapse('nav_menu')

    toggleIcon === 'toggler_icon'
      ? setToggleIcon('toggler_icon toggle')
      : setToggleIcon('toggler_icon')
  }

  return (
    <div className="nav_wrapper">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav_brand">
            Logo
          </a>

          <ul className={collapse}>
            {navItems.map((item) => (
              <li key={item.id} className="nav_item">
                <a href={item.href} className="nav_link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={toggleIcon} onClick={onToggle}>
            <div className="line_1"></div>
            <div className="line_2"></div>
            <div className="line_3"></div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
