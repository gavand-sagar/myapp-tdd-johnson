import { fireEvent, render, screen } from "@testing-library/react"
import ReduxComponent from "./ReduxComponent"
import { Provider } from "react-redux"
import { store } from "./store"

test('redux compo', () => {
    render(<Provider store={store}>
        <ReduxComponent />
    </Provider>)
    const btn = screen.getByText('+')
    // fireEvent.click(btn)
    const counterLabel = screen.getByText('0')
    expect(counterLabel).toBeInTheDocument()
})