import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login"
import { login } from "./login.service"
import { BrowserRouter } from "react-router-dom"
jest.mock("./login.service")


test('Check Login', async () => {

    (login as jest.Mock).mockResolvedValue({ result: false })

    render(<BrowserRouter>
        <Login />
    </BrowserRouter>);

    const input1 = screen.getByTestId("txt-input1");
    fireEvent.change(input1, { target: { value: '20' } })

    const input2 = screen.getByTestId("txt-input2");
    fireEvent.change(input1, { target: { value: '20' } })


    const button = screen.getByText("LOGIN");
    expect(button).toBeInTheDocument();
    fireEvent.click(button)

    const label = await screen.findByText("FAILED")
    expect(label).toBeInTheDocument();
})