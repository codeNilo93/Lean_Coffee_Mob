import {render, screen} from '@testing-library/react'


it("should persist with the data stored in localStorage", () => {
    // set the localStorage to a value other than 0
    localStorage.setItem("count", 15);
  
    // render the App and check it initialises to the value in localStorage
    render(<App />);
    screen.getByText(/Number: 15/);
  
    // click the increment button and check the localStorage is updated
    const incrementButton = screen.getByText(/\+1/);
    fireEvent.click(incrementButton);
    screen.getByText(/Number: 16/);
    expect(localStorage.getItem("count")).toBe("16");
  });