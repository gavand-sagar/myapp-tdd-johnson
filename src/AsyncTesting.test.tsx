import { fireEvent, render, screen } from "@testing-library/react"
import AsyncTesting from "./AsyncTesting"

test('Button works',async ()=>{
    render(<AsyncTesting/>)
    const btn = screen.getByText('Click me');
    fireEvent.click(btn)
    const div = await screen.findByText('Apple',{},{timeout:16000})
    expect(div).toBeInTheDocument();
},16000)