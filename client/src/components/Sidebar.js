import Wrapper from '../assets/wrappers/Sidebar'
import { useAppContext } from '../context/appContext'
import links from '../utils/links'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const { showSidebar } = useAppContext()

  return (
    <Wrapper>
      <div
        className={`${
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }`}
      >
        {links.map((item) => {
          return (
            <Link className='sidebar-link' key={item.id} to={item.link}>
              {item.name}
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Sidebar
