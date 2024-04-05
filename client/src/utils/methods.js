const calculateDaysBetweenDates = (date) => {
  const dateString =
    date.selectedYear.toString() +
    '-' +
    (date.selectedMonth + 1).toString() +
    '-' +
    date.selectedDay.toString()

  const date1Obj = new Date(dateString)
  const date2Obj = new Date()

  console.log(date1Obj, date2Obj)

  // Calculate the time difference in milliseconds
  const timeDifference = Math.abs(date2Obj - date1Obj)

  // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
  const daysDifference = Math.ceil(timeDifference / (24 * 60 * 60 * 1000))

  return daysDifference
}

export { calculateDaysBetweenDates }
