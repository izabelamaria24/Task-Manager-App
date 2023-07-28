import Wrapper from '../../assets/wrappers/AddTask'
import RadioFormRow from '../../components/RadioFormRow'
import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import Alert from '../../components/Alert'
import categories from '../../utils/categories'

const AddTask = () => {
  const { displayAlert, addTask, showAlert, isLoading } = useAppContext()

  const [task, setTask] = useState({ category: '', title: '' })

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!task.category || !task.title) {
      displayAlert('warning', 'Please provide task title and category')
      return
    }

    addTask(task)
    setTask({ category: '', title: '' })
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h1>AddTask</h1>
      <form action='submit'>
        <input
          onChange={handleChange}
          type='text'
          name='title'
          value={task.title}
          className='task-title-input'
          placeholder='What are you planning?'
        />

        <h1>Select task category: </h1>

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

        <button
          onClick={handleSubmit}
          type='submit'
          className='btn add-task-btn'
          disabled={isLoading}
        >
          Add Task
        </button>
      </form>
    </Wrapper>
  )
}

export default AddTask
