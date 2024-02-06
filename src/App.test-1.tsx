import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import { MemoryRouter } from "react-router-dom"
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers"

test('login comp', () => {
    render(<MemoryRouter>
        <App />
    </MemoryRouter>)
    
    const button = screen.getByText('NAV')
    fireEvent.click(button)
    const text = screen.getByText('Login');
    expect(text).toBeInTheDocument();
})