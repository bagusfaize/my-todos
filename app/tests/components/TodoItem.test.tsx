import { it, expect, describe, vi} from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoItem from '../../components/TodoItem';
import { Todo } from '@/app/types/types';
import dayjs from 'dayjs';


describe('TodoItem', () => {

    const mockHandler = vi.fn();

    it('should render todo item', () => {
        const mockTodo: Todo = {
            id: 1,
            task: 'Todo Title',
            category: 'Category',
            completed: false,
            createdAt: new Date().toISOString(),
        }

        render(<TodoItem todo={mockTodo} onCheckTodo={mockHandler} />);
        
        const title = screen.getByText(mockTodo.task);
        expect(title).toBeInTheDocument();

        const category = screen.getByText(mockTodo.category);
        expect(category).toBeInTheDocument();

        const formattedDate = dayjs(mockTodo.createdAt).format('YYYY/MM/DD HH:mm')
        const date = screen.getByText(formattedDate);
        expect(date).toBeInTheDocument();

    });

    it('should not show strikethrough on title when completed false', () => {
        const mockUncompletedTodo: Todo = {
            id: 1,
            task: 'Todo Uncompleted',
            category: 'Category',
            completed: false,
            createdAt: new Date().toISOString(),
        }

        render(<TodoItem todo={mockUncompletedTodo} onCheckTodo={mockHandler} />);
        
        const title = screen.getByText(mockUncompletedTodo.task);

        expect(title).not.toHaveClass('line-through');
    });

    it('should show strikethrough on title when completed true', () => {
       const mockCompletedTodo: Todo = {
            id: 1,
            task: 'Todo Completed',
            category: 'Category',
            completed: true,
            createdAt: new Date().toISOString(),
        }

        render(<TodoItem todo={mockCompletedTodo} onCheckTodo={mockHandler} />);
        
        const title = screen.getByText(mockCompletedTodo.task);

        expect(title).toHaveClass('line-through');
    });
})