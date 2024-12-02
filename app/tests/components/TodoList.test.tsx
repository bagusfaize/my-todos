import { it, expect, describe} from 'vitest';
import { fireEvent, render, screen } from "@testing-library/react";
import { Todo } from '@/app/types/types';
import TodoList from '../../components/TodoList';

const mockTodos: Todo[] = [
    { id: 1, task: 'Task 1', category: 'work', completed: false, createdAt: new Date().toISOString() },
    { id: 2, task: 'Task 2', category: 'work', completed: false, createdAt: new Date().toISOString() },
    { id: 3, task: 'Task 3', category: 'personal', completed: true, createdAt: new Date().toISOString() },
];

describe('TodoList', () => {
    it('should render list of todo', () => {
        render(<TodoList todos={mockTodos} isLoading={false} />);

        mockTodos.forEach((todo) => {
            const todoItem = screen.getByText(todo.task);
            expect(todoItem).toBeInTheDocument();
        })
    });

    it('should render todo based on category', () => {
        const workBtn = screen.getByTestId('work-filter-btn');
        fireEvent.click(workBtn);

        const workTodos = screen.getAllByTestId('todo-item'); 
        expect(workTodos.length).toBe(2);
        workTodos.forEach((item) => {
            expect(item).toHaveTextContent('work');
        })

    })
})