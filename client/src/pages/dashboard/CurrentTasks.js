import getDates from '../../utils/dates'
import Wrapper from '../../assets/wrappers/CurrentTasks'

const CurrentTasks = () => {
  const { nextSevenDays } = getDates()

  return (
    <Wrapper>
      <section className='calendar'>
        {nextSevenDays.map((date, index) => {
          return (
            <article key={index}>
              <div className='week'>{date.split('-')[0]}</div>
              <div className='day'>{date.split('-')[2]}</div>
              <div className='month'>{date.split('-')[1]}</div>
            </article>
          )
        })}
      </section>
      <section></section>
    </Wrapper>
  )
}
export default CurrentTasks
