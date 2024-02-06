import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Increment button should exist', () => {
    
    render(<Counter />);
    const button = screen.getByTestId("btn-inc");
    expect(button).toBeInTheDocument();
});

test('Increment button should not disabled', () => {
    render(<Counter />);
    const button = screen.getByTestId("btn-inc");
    expect(button).not.toBeDisabled();
});

test('Label should exists', () => {
    render(<Counter />);
    const label = screen.getByTestId("lbl-value");
    expect(label).toBeInTheDocument();
});

test('Label should have 0 as intial value', () => {
    render(<Counter />);
    const label = screen.getByTestId("lbl-value");
    expect(label.innerHTML).toBe("0");
});

test('Label should be incremented when button pressed', () => {
    render(<Counter/>);
    const label = screen.getByTestId("lbl-value");
    expect(label.innerHTML).toBe("0");
    const button = screen.getByTestId("btn-inc");
    fireEvent.click(button);
    expect(label.innerHTML).toBe("1");
});



test('Label should not be incremented after 5', () => {
    render(<Counter/>);
    const label = screen.getByTestId("lbl-value");
    expect(label.innerHTML).toBe("0");
    const button = screen.getByTestId("btn-inc");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(label.innerHTML).toBe("5");
});



test('Label should not be incremented after 5', () => {
    render(<Counter max={10}/>);
    const label = screen.getByTestId("lbl-value");
    expect(label.innerHTML).toBe("0");
    const button = screen.getByTestId("btn-inc");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(label.innerHTML).toBe("10");
});
