import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'

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
    <section>
      <h1>{activeList.listName}</h1>
      <div>
        {activeList.listItems.map((listItem) => (
          <h2 key={listItem._id}>{listItem.description}</h2>
        ))}
      </div>
    </section>
  )
}

export default SingleList
