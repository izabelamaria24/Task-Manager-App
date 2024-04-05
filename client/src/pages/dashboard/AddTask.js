import Wrapper from '../../assets/wrappers/AddTask'
import RadioFormRow from '../../components/RadioFormRow'
import React, { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import Alert from '../../components/Alert'
import categories from '../../utils/categories'
import Calendar from '../../components/Calendar'

const AddTask = () => {
  const currentDate = new Date()
  const { displayAlert, addTask, showAlert, isLoading } = useAppContext()

  const [task, setTask] = useState({
    category: '',
    title: '',
    time: {
      hour: '',
      date: {
        selectedDay: currentDate.getDate(),
        selectedMonth: currentDate.getMonth(),
        selectedYear: currentDate.getFullYear(),
      },
    },
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setTask((prevTask) => ({
      ...prevTask,
      [name]:
        typeof prevTask[name] === 'object'
          ? { ...prevTask[name], [e.target.dataset.nested]: value }
          : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!task.category || !task.title) {
      displayAlert('warning', 'Please provide task title and category')
      return
    }

    addTask(task)
    setTask({
      category: '',
      title: '',
      time: {
        hour: '',
        date: {
          selectedDay: currentDate.getDate(),
          selectedMonth: currentDate.getMonth(),
          selectedYear: currentDate.getFullYear(),
        },
      },
    })
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h1 className='add-task'>AddTask</h1>
      <form className='add-task-form' action='submit'>
        <input
          onChange={handleChange}
          type='text'
          name='title'
          value={task.title}
          className='task-title-input'
          placeholder='What are you planning?'
        />

        <h1 className='add-task-subsection'>Select task category: </h1>

        <section className='categories'>
          {categories.map((category) => {
            return (
              <RadioFormRow
                key={category.id}
                handleChange={handleChange}
                labelText={category.name}
                name='category'
                value={category.name}
                imgUrl={category.imgUrl}
                checked={task.category === category.name}
              />
            )
          })}
        </section>

        <h1 className='add-task-subsection'>Select task date:</h1>

        <h1 className='add-task-subsection calendar-title'>When do you plan to finish the task?</h1>

        <Calendar task={task} setTask={setTask} />

        <h2 className='add-task-subsection'>Select hour:</h2>
        <input
          onChange={handleChange}
          name='time'
          type='time'
          value={task.time.hour}
          data-nested='hour'
          className='select-hour'
        ></input>

        <button
          onClick={handleSubmit}
          type='submit'
          className='btn design-btn'
          disabled={isLoading}
        >
          Add Task
        </button>
      </form>
    </Wrapper>
  )
}

export default AddTask
