'use client'

import { useQuery } from "@tanstack/react-query";
import FilterBar from "./FilterBar";
import TodoItem from "./TodoItem";
import { getTodos } from "../services/todos";
import { Todo } from '../types/types';
import { useFilter } from "../hooks/useFilter";
import TodoItemSkeleton from "./skeletons/TodoItemSkeleton";

export default function TodoList() {
  const { data: todos = [], isLoading } = useQuery({ queryKey: ['todos'], queryFn: getTodos });
  const { filteredTodos, handleChangeCategory, selectedCategory, handleCheckTodo } = useFilter(todos)

  return (
    <>
      <FilterBar
        selectedCategory={selectedCategory}
        onSelect={handleChangeCategory}
      />
      <div className="my-3 w-full flex flex-col gap-4">
        {filteredTodos.map((todo: Todo) => (
          <TodoItem
          key={todo.id}
          todo={todo}
          onCheckTodo={handleCheckTodo}
          />
        ))}
        {isLoading && <RenderLoadingState />}
      </div>
    </>
  )
}


const RenderLoadingState = () => {
  return (
    <>
    {[1,2,3,4,5].map(item => (
      <TodoItemSkeleton key={item} />
    ))}
    </>
  )
}