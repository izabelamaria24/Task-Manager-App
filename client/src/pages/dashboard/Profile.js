import Wrapper from '../../assets/wrappers/Profile'
import { useAppContext } from '../../context/appContext'
import { FormRow } from '../../components'

const Profile = () => {
  const { user } = useAppContext()

  return (
    <Wrapper>
      <h1>Profile</h1>
      <div className='profile'>
        <FormRow labelText='name' name='name' value={user.name} type='text' />
        <FormRow
          labelText='email'
          name='email'
          value={user.email}
          type='text'
        />
      </div>
    </Wrapper>
  )
}
export default Profile
