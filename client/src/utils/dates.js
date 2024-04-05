import moment from 'moment'

const getDates = (countDays) => {
  // Get the current date
  const currentDate = moment()

  // Create an array to store the last and another one for the next 7 days' dates
  const lastSevenDays = []
  const nextSevenDays = []

  // Loop through the last 7 days and add each date to the array
  for (let i = 0; i < countDays; i++) {
    const date = currentDate.clone().subtract(i, 'days')
    lastSevenDays.push(date.format('ddd-MMM-DD'))
  }

  // Loop through the next 7 days and add each date to the array
  for (let i = 0; i < countDays; i++) {
    const date = currentDate.clone().add(i, 'days')
    nextSevenDays.push(date.format('ddd-MMM-DD'))
  }

  return { lastSevenDays, nextSevenDays }
}

export default getDates
