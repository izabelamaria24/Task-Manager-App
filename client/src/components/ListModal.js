import Wrapper from '../assets/wrappers/ListModal'
import { useAppContext } from '../context/appContext'
import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'

const ListModal = () => {
  const [list, setList] = useState('')
  const [listItems, setListItems] = useState([])
  const [listItem, setListItem] = useState('')

  const { closeModal, addList } = useAppContext()

  const handleClick = () => {
    setListItems([...listItems, listItem])
    setListItem('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addList(list, listItems)
  }

  return (
    <Wrapper>
      <section className='modal-content'>
        <nav className='modal-nav'>
          <button className='modal-close' onClick={closeModal}>
            <AiOutlineClose />
          </button>
          <button onClick={(e) => handleSubmit(e)} className='modal-done'>
            Done
          </button>
        </nav>

        <section className='list-content'>
          <input
            type='text'
            name='list'
            className='list-name'
            onChange={(e) => setList(e.target.value)}
            value={list}
            placeholder='List name'
          ></input>
          <textarea
            name='listItem'
            value={listItem}
            onChange={(e) => setListItem(e.target.value)}
          />
          <button className='design-btn' onClick={handleClick}>
            Add List Item
          </button>

          {listItems.map((item, index) => {
            return <article key={index}>{item}</article>
          })}
        </section>
      </section>
    </Wrapper>
  )
}

export default ListModal
