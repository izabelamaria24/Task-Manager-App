import React, { useState } from 'react'
import TimePicker from 'react-time-picker'

function MyTimePicker() {
  return (
    <div>
      <label>Select a time:</label>
      <TimePicker
        onChange={handleTimeChange}
        value={timeValue}
        format='HH:mm'
        disableClock={false} // Set to true to disable the clock UI
      />
      <p>Selected time: {timeValue}</p>
    </div>
  )
}

export default MyTimePicker
