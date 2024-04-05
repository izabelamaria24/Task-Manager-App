import getDates from '../../utils/dates'
import Wrapper from '../../assets/wrappers/CurrentTasks'
import { useState, useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { calculateDaysBetweenDates } from '../../utils/methods'

const CurrentTasks = () => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const [countDays, setCountDays] = useState(7)
  const { nextSevenDays, lastSevenDays } = getDates(countDays)
  const { getTasks, isLoading, tasks, user, updateTask, totalScore } =
    useAppContext()

  useEffect(() => {
    getTasks()
  }, [])

  const updateScore = (filteredTask) => {
    filteredTask.completed = !filteredTask.completed

    if (!filteredTask.score)
      filteredTask.score =
        filteredTask.score + calculateDaysBetweenDates(filteredTask.time.date)

    updateTask(filteredTask)
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <Wrapper>
      <h1 className='username'>
        Hello, {user.name.split(' ')[1]}. You have {totalScore} points!
      </h1>
      <section className='calendar'>
        {nextSevenDays.map((date, index) => {
          let day = date.split('-')[2]
          const week = date.split('-')[0]
          const month = date.split('-')[1]

          const filteredTasks = tasks.filter((task) => {
            const {
              time: {
                date: { selectedDay, selectedMonth, selectedYear },
              },
            } = task

            if (day[0] == '0')
              return (
                selectedDay.toString() === day[1] &&
                selectedMonth === months.indexOf(month)
              )

            return (
              selectedDay.toString() === day &&
              selectedMonth === months.indexOf(month)
            )
          })

          return (
            <article key={index}>
              <div className='date'>
                <div className='week'>{week}</div>
                <div className='day'>{day}</div>
                <div className='month'>{month}</div>
              </div>

              <div className='tasks'>
                {filteredTasks.map((filteredTask) => (
                  <article key={filteredTask._id}>
                    <input
                      type='checkbox'
                      id='completed'
                      name='completed'
                      value={filteredTask.completed}
                      onChange={() => updateScore(filteredTask)}
                      checked={filteredTask.completed}
                    />
                    <label
                      htmlFor='completed'
                      data-content={filteredTask.title}
                    >
                      {filteredTask.title}
                    </label>
                  </article>
                ))}
              </div>
            </article>
          )
        })}
        <button
          onClick={() =>
            setCountDays((prevDays) => prevDays + 7 * (prevDays / 7))
          }
        >
          View more
        </button>
      </section>
    </Wrapper>
  )
}
export default CurrentTasks
