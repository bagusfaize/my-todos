import { useCallback, useEffect, useMemo, useState } from "react";
import { Todo } from "../types/types";

export const useFilter = (initialTodos: Todo[]) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    useEffect(() => {
        if (initialTodos.length) {
            setTodos(initialTodos)
        }
    }, [initialTodos])
    

    const handleChangeCategory = useCallback((category: string) => {
        setSelectedCategory(category);
    }, []);

    const handleCheckTodo = useCallback((todo: Todo) => {
        const selectedId = todo.id;
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === selectedId) {
                    return { ...todo, completed: !todo.completed};
                }
                return todo;
            })
        })
    }, []);

    const filteredTodos = useMemo(() => {
        let result = [...todos];

        // filter by category
        if (!selectedCategory || selectedCategory === 'all') {
            result = todos
        } else {
            result = todos.filter(todo => todo.category === selectedCategory);
        }

        // sort by newest date
        result.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        })

        // sort by date and order by completed
        result.sort((a, b) => {
            if (a.completed !== b.completed) {
              return a.completed ? 1 : -1;
            }
          
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });

        return result;
    }
    , [todos, selectedCategory])

    return {
        handleChangeCategory,
        selectedCategory,
        filteredTodos,
        handleCheckTodo,
    };
}