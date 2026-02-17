import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const defaultProps = {
    title: 'Test Product',
    price: '$99.99',
    image: 'test-image.jpg',
  };

  it('renders product information correctly', () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('calls onAddToCart when the add button is clicked', () => {
    const onAddToCart = vi.fn();
    render(<ProductCard {...defaultProps} onAddToCart={onAddToCart} />);

    const addButton = screen.getByLabelText('Add to cart');
    fireEvent.click(addButton);

    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });

  it('stops propagation when the add button is clicked', () => {
    const onAddToCart = vi.fn();
    const onParentClick = vi.fn();

    render(
      <div onClick={onParentClick}>
        <ProductCard {...defaultProps} onAddToCart={onAddToCart} />
      </div>
    );

    const addButton = screen.getByLabelText('Add to cart');
    fireEvent.click(addButton);

    expect(onAddToCart).toHaveBeenCalledTimes(1);
    expect(onParentClick).not.toHaveBeenCalled();
  });

  it('renders with a tag when provided', () => {
    render(<ProductCard {...defaultProps} tag="New" />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });
});
