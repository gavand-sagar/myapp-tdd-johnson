import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import { MemoryRouter } from "react-router-dom"
import { login } from "./login.service"
jest.mock("./login.service")


test('login comp',async () => {
    (login as jest.Mock).mockResolvedValue({ result: true })

    render(
        <MemoryRouter initialEntries={['/login']}>
            <App />
        </MemoryRouter>
    )


    const text = screen.getByText('LOGIN');
    fireEvent.click(text);


    const d = await screen.findByText('Dashboard');
    expect(d).toBeInTheDocument()


})