import Wrapper from '../assets/wrappers/Alert'

import errorIcon from '../assets/icons/error-icon.png'
import successIcon from '../assets/icons/success-icon.png'
import warningIcon from '../assets/icons/warning-icon.png'
import { useAppContext } from '../context/appContext'

const Alert = () => {
  const { alertText, alertType } = useAppContext()

  return (
    <Wrapper type={alertType}>
      <div>
        <img
          src={
            alertType === 'error'
              ? errorIcon
              : alertType === 'success'
              ? successIcon
              : warningIcon
          }
          className='alert-icon'
          alt='alert-icon'
        />
      </div>
      <h3>{alertText}</h3>
    </Wrapper>
  )
}
export default Alert
