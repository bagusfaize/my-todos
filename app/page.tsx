'use client';

import { useQuery } from "@tanstack/react-query";
import TodoList from "./components/TodoList";
import { getTodos } from "./services/todos";

export default function Home() {
  const { data: todos = [], isLoading } = useQuery({ queryKey: ['todos'], queryFn: getTodos });

  return (
    <div className="flex min-h-screen justify-center p-5 pb-20 gap-16 bg-slate-100">
      <main className="lg:w-1/2 flex flex-col gap-3">
        <TodoList
          todos={todos}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}
