import { fireEvent, render, screen } from "@testing-library/react"
import ReduxComponent from "./ReduxComponent"
import { Provider } from "react-redux"
import { store } from "./store"

test('redux compo', () => {
    render(
        <Provider store={store}>
            <ReduxComponent />
        </Provider>)
    //const btn = screen.getByText('+')
    // fireEvent.click(btn)
    const counterLabel = screen.getByText('0')
    expect(counterLabel).toBeInTheDocument()
    const btn = screen.getByText('PLUS')
    fireEvent.click(btn)

    const counterLabel1 = screen.getByText('1')
    expect(counterLabel1).toBeInTheDocument()
})