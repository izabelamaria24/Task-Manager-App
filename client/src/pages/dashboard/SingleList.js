import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/SingleList'

const SingleList = () => {
  const { id } = useParams()
  const { getSingleList, activeList, loading } = useAppContext()

  useEffect(() => {
    getSingleList(id)
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!activeList) {
    return <div>List not found</div>
  }

  // Check if listItems exists before mapping
  if (!activeList.listItems || activeList.listItems.length === 0) {
    return <div>No items in this list</div>
  }

  return (
  <Wrapper>
      <section>
        <h1 className='list-name'>{activeList.listName}</h1>
        <ul className='list-items'>
          {activeList.listItems.map((listItem) => (
            <li key={listItem._id}>{listItem.description}</li>
          ))}
        </ul>
      </section>
  </Wrapper>
  )
}

export default SingleList
