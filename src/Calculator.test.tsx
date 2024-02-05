import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('Input1 exists', () => {
    render(<Calculator />);
    const input1 = screen.getByTestId("txt-input1");
    expect(input1).toBeInTheDocument();
});

test('Input2 exists', () => {
    render(<Calculator />);
    const input2 = screen.getByTestId("txt-input2");
    expect(input2).toBeInTheDocument();
});


test('button exists', () => {
    render(<Calculator />);
    const button = screen.getByTestId("btn-calculate");
    expect(button).toBeInTheDocument();
});


test('output label exists', () => {
    render(<Calculator />);
    const label = screen.getByTestId("lbl-output");
    expect(label).toBeInTheDocument();
});


test('check addition', () => {
    render(<Calculator />)
    const input1 = screen.getByTestId("txt-input1");
    fireEvent.change(input1, { target: { value: '20' } })
    const input2 = screen.getByTestId("txt-input2");
    fireEvent.change(input2, { target: { value: '30' } })

    const button = screen.getByTestId("btn-calculate");
    fireEvent.click(button);
    const label = screen.getByTestId("lbl-output");
    expect(label.innerHTML).toBe('50')
})


test('check addition', () => {
    render(<Calculator />)
    const input1 = screen.getByTestId("txt-input1");
    fireEvent.change(input1, { target: { value: '-20' } })
    const input2 = screen.getByTestId("txt-input2");
    fireEvent.change(input2, { target: { value: '-30' } })

    const button = screen.getByTestId("btn-calculate");
    fireEvent.click(button);
    const label = screen.getByTestId("lbl-output");
    expect(label.innerHTML).toBe('-50')
})


test('check additions of empty inputs', () => {
    render(<Calculator />)
    const input1 = screen.getByTestId("txt-input1");
    fireEvent.change(input1, { target: { value: '' } })
    const input2 = screen.getByTestId("txt-input2");
    fireEvent.change(input2, { target: { value: '' } })

    const button = screen.getByTestId("btn-calculate");
    fireEvent.click(button);
    const label = screen.getByTestId("lbl-output");
    expect(label.innerHTML).toBe('Enter a value')

})