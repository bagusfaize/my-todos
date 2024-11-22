import dayjs from "dayjs";
import { Todo } from "../types/types"

type TodoItemProps = {
  todo: Todo,
  onCheckTodo: (todo: Todo) => void
}

export default function TodoItem({
  todo,
  onCheckTodo,
}: TodoItemProps) {

  const handleChangeTodo = () => onCheckTodo(todo)

  return (
    <div className="bg-white flex items-center justify-between p-5 w-full rounded">
      <div className="flex gap-4 items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          onChange={handleChangeTodo}
          checked={todo.completed}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-2xl"
        />
        <div>
          <div className={`text-lg font-semibold capitalize ${todo.completed ? 'line-through text-slate-600' : ''}`}>
            {todo.task}
          </div>
          <div className="text-sm text-slate-600 capitalize">
            {todo.category}
          </div>
        </div>
      </div>
      <div className="text-sm text-slate-600">
        {dayjs(todo.createdAt).format('YYYY/MM/DD HH:mm')}
      </div>
    </div>
  )
}
