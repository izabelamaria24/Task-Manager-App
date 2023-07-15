import Wrapper from '../assets/wrappers/Error'
import error from '../assets/images/error.svg'

const Error = () => {
  return (
    <Wrapper>
      <section className='error-content'>
        <h1>Error! It looks like page was not found... :( </h1>
      </section>
      <section className='error-image'>
        <img src={error} className='img' alt='error-img'></img>
      </section>
    </Wrapper>
  )
}
export default Error
