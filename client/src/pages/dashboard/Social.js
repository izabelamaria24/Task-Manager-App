import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/Social'
import Alert from '../../components/Alert'
import { Link } from 'react-router-dom'

const Social = () => {
  const [searchValue, setSearchValue] = useState('')
  const {
    user,
    users,
    getUsers,
    sendFriendRequest,
    showAlert,
    friendRequests,
  } = useAppContext()

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    getUsers(e.target.value)
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <div className='social'>
        <input
          placeholder='Search People...'
          value={searchValue}
          onChange={handleChange}
        />
        <Link to='/social/requests'>{`{}Requests ${friendRequests.length}`}</Link>
      </div>

      <section>
        {users &&
          users.map((currentUser) => {
            console.log(currentUser._id)
            return (
              <article>
                <div>{currentUser.name}</div>
                <button onClick={() => sendFriendRequest(currentUser._id)}>
                  Friend request
                </button>
              </article>
            )
          })}
      </section>
    </Wrapper>
  )
}

export default Social
