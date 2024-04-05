import Wrapper from '../../assets/wrappers/Lists'
import { useAppContext } from '../../context/appContext'
import { Link } from 'react-router-dom'
import { ListModal } from '../../components'
import { useEffect } from 'react'
import Alert from '../../components/Alert'

const Lists = () => {
  const { lists, displayModal, modal, getLists, showAlert } = useAppContext()

  useEffect(() => {
    getLists()
  }, [modal])

  return (
    <Wrapper>
      {modal && <ListModal />}
      {showAlert && <Alert />}
      <button className='design-btn create-list' onClick={displayModal}>
        Create new list
      </button>
      <div className='lists-container'>
        {lists.map((list, index) => {
          return (
            <article key={index}>
              <h1 className='list-name'>{list.listName}</h1>
              <Link to={`/lists/${list._id}`}>View List</Link>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Lists
