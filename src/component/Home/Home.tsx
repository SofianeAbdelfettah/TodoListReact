import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DateTime } from 'luxon'
import uuid from 'react-uuid'
import { capitalizeFirstLetter } from '../../utils/'
import ErrorMessage from '../ErrorMessage/'
import { ERRORTYPE } from '../../types/types'
import { DeleteOutlined } from '@ant-design/icons'

type FormData = {
  todoInput: string
}
type todo = {
  value: string
  selected: boolean
  id: string
}

const Home = () => {
  const [getTodos, setTodos] = useState<todo[]>([])

  const { register, handleSubmit, errors } = useForm<FormData>()

  const updateTodo = (newTodo: todo) => {
    const newTodos: todo[] = getTodos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
    setTodos(newTodos)
  }

  const deleteTodo = (id: string) => setTodos(getTodos.filter((todo) => todo.id !== id))

  const onSubmit = ({ todoInput }: { todoInput: string }) => {
    const newTodos: todo[] = [...getTodos, { value: todoInput, selected: false, id: uuid() }]
    setTodos(newTodos)
  }

  const date = DateTime.local().setLocale('fr')
  const dayOfTheWeek = capitalizeFirstLetter(date.get('weekdayLong').toString())
  const monthShortened = capitalizeFirstLetter(date.get('monthLong').toString().substring(0, 3))

  return (
    <div className="bg-blue-300 flex place-content-center	place-items-center h-screen">
      <div className="bg-white w-1/6 h-3/6 shadow-2xl p-5 flex-col box-border">
        <div className="flex justify-between items-center">
          <div className="flex">
            <h1 className="text-5xl">{date.get('day')}</h1>
            <div>
              <h3>{date.get('year')}</h3>
              <h3 className="">{monthShortened}</h3>
            </div>
          </div>
          <h1 className="text-xl">{dayOfTheWeek}</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-col flex-1 h-full">
          <div className="flex justify-between">
            <input
              name="todoInput"
              placeholder="Todo"
              ref={register({
                validate: {
                  isEmpty: (value) => !!value.trim(),
                  alreadyExist: (value) => {
                    return getTodos.filter((todo) => todo.value === value).length === 0
                  },
                },
              })}
              className="w-4/6 border-solid border-gray-400 border-2 rounded"
            />
            <button type="submit" className="bg-green-300 rounded p-1 w-3/12">
              Add
            </button>
          </div>
          <div className="h-4/6">
            {errors.todoInput?.type === 'isEmpty' && (
              <ErrorMessage message="Todo is required" type={ERRORTYPE.error} />
            )}
            {errors.todoInput?.type === 'alreadyExist' && (
              <ErrorMessage message="This todo already Exist" type={ERRORTYPE.error} />
            )}
            {getTodos.map(({ value, selected, id }: todo) => (
              <div key={uuid()} className="flex justify-between items-center">
                <h1 className={selected ? 'line-through' : ''}>{value}</h1>
                <div className="flex place-items-center place-content-between w-1/4">
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => updateTodo({ value, selected: !selected, id })}
                  />
                  <DeleteOutlined onClick={() => deleteTodo(id)} />
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
