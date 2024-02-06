import { render, screen } from "@testing-library/react"
import UserInformation from "./UserInformation"
import { getDataFromAPI } from "./SomeAnotherFile"
jest.mock("./SomeAnotherFile")

test('UserInformation', () => {
    (getDataFromAPI as jest.Mock).mockReturnValue("AMIT")
    render(<UserInformation/>)
    const text = screen.getByText("AMIT");
    expect(text).toBeInTheDocument()
})