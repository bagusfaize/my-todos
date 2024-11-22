import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center p-5 pb-20 gap-16 bg-slate-100">
      <main className="lg:w-1/2 flex flex-col gap-3">
        <TodoList />
      </main>
    </div>
  );
}
