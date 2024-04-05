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
        <Link to='/social/requests'>{friendRequests.length === 0 ? 'No friend requests' : `${friendRequests.length} Friend Requests`}</Link>
      </div>

      <section className='possible-requests'>
        {users &&
          users.map((currentUser) => {
            return (
              <article>
                <div className= 'request-username'>{currentUser.name}</div>
                <button className='btn design-btn' onClick={() => sendFriendRequest(currentUser._id)}>
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
