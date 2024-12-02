import { it, expect, describe, vi } from 'vitest'
import FilterBar from '../../components/FilterBar'
import { render, screen } from '@testing-library/react'

describe('FilterBar', () => {
    const mockHandler = vi.fn();

    it('should change color to green to highlight selected category', () => {
        render(<FilterBar selectedCategory='all' onSelect={mockHandler} />);

        const selectedButton = screen.getByRole('button', {name: 'all'});
        expect(selectedButton).toHaveClass('bg-green-300')
    })
})