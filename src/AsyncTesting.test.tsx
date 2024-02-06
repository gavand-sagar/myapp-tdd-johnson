import { fireEvent, render, screen } from "@testing-library/react"
import AsyncTesting from "./AsyncTesting"
import { getCatFact } from "./AsyncCall";
jest.mock('./AsyncCall')

test('Button works',async ()=>{
    (getCatFact as jest.Mock).mockResolvedValue({fact:"Apple"})
    render(<AsyncTesting/>)
    const btn = screen.getByText('Click me');
    fireEvent.click(btn)
    const div = await screen.findByText('Apple')
    expect(div).toBeInTheDocument();
})