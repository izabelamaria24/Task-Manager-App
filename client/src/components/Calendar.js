import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/Calendar'

const Calendar = ({ task, setTask }) => {
  const currentDate = new Date()

  const {
    date: { selectedDay, selectedMonth },
  } = task.time

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const checkMonth = () => {
    const currentYear = currentDate.getFullYear()

    if (selectedMonth === 1) {
      if (currentYear % 4 == 0 && currentYear % 100 != 0) return 29
      return 28
    }

    if (
      (selectedMonth < 8 && selectedMonth % 2 == 0) ||
      (selectedMonth >= 8 && selectedMonth % 2)
    )
      return 31
    return 30
  }

  const renderDays = () => {
    const days = []
    for (let i = 1; i <= checkMonth(); i++) {
      let classNames = ''
      if (i === selectedDay) {
        classNames = 'selected'
      } else if ([8, 10, 27].includes(i)) {
        classNames = 'event'
      }

      days.push(
        <li key={i}>
          <a
            href='#'
            title={i}
            data-value={i}
            className={classNames}
            onClick={(e) => handleDayClick(e, i)}
          >
            {i}
          </a>
        </li>
      )
    }
    return days
  }

  const handleDayClick = (e, day) => {
    e.preventDefault()
    setTask({
      ...task,
      time: { ...task.time, date: { ...task.time.date, selectedDay: day } },
    })
  }
  const handleMonthClick = (e, month) => {
    e.preventDefault()
    setTask({
      ...task,
      time: { ...task.time, date: { ...task.time.date, selectedMonth: month } },
    })
  }

  return (
    <Wrapper>
      <div className='calendar'>
        <div className='col leftCol'>
          <div className='content'>
            <h1 className='date'>
              Friday
              <span>
                {months[selectedMonth]} {selectedDay}
                {selectedDay === 1
                  ? 'st'
                  : selectedDay === 2
                  ? 'nd'
                  : selectedDay === 3
                  ? 'rd'
                  : 'th'}
              </span>
            </h1>
          </div>
        </div>
        <div className='col rightCol'>
          <div className='content'>
            <h2 className='year'>{currentDate.getFullYear()}</h2>
            <ul className='months'>
              {months.map((month, index) => (
                <li key={month}>
                  <a
                    href='#'
                    title={month}
                    data-value={month}
                    onClick={(e) => handleMonthClick(e, index)}
                  >
                    {month.substring(0, 3)}
                  </a>
                </li>
              ))}
            </ul>
            <div className='clearfix'></div>
            {/* <ul className='weekday'>
              {weekDays.map((weekDay, index) => (
                <li key={weekDay}>
                  <a href='#' title={weekDay} data-value={index + 1}>
                    {weekDay}
                  </a>
                </li>
              ))}
            </ul> */}
            <div className='clearfix'></div>
            <ul className='days'>{renderDays()}</ul>
            <div className='clearfix'></div>
          </div>
        </div>

        <div className='clearfix'></div>
      </div>
    </Wrapper>
  )
}

export default Calendar
