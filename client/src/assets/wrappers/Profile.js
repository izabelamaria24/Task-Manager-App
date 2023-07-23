import styled from 'styled-components'

const Profile = styled.section`
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  width: 100%;

  .profile {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Profile
