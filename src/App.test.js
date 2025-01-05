import { getByLabelText, render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm'
import { initializeTimes, updateTimes, fetchAPI} from './components/Main'

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Date");
    expect(headingElement).toBeInTheDocument();
})

test("initializeTimes returns the correct expected value", () => {
  const today = new Date();
  const initialState = initializeTimes();
  const expectedResult = fetchAPI(today);
  expect(initialState).toEqual(expectedResult);
});



test('updateTimes returns the same value provided in the state', () => {
  const state = ["17:00", "18:00", "19:00", "20:00"];
  const action = { type: 'UPDATE_TIMES', payload: state }; 
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});


describe("BookingForm Component", () => {
  const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  it("should render all form fields with correct HTML5 validation attributes", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Date/i);
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();

    const timeSelect = screen.getByLabelText(/Time/i);
    expect(timeSelect).toBeRequired();

    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();

    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  it("should validate the form's JavaScript validation logic", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByRole("button", { name: /Make a Reservation/i });

    
    expect(submitButton).toBeDisabled();

    const dateInput = screen.getByLabelText(/Date/i);
    const timeSelect = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);

    
    fireEvent.change(dateInput, { target: { value: "2023-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    
    expect(submitButton).not.toBeDisabled();
  });

  it("should call submitForm with correct data on form submission", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Date/i);
    const timeSelect = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole("button", { name: /Make a Reservation/i });

    
    fireEvent.change(dateInput, { target: { value: "2023-12-25" } });
    fireEvent.change(timeSelect, { target: { value: "12:00 PM" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });
    fireEvent.change(occasionSelect, { target: { value: "birthday" } });

    
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2023-12-25",
      time: "12:00 PM",
      guests: "3",
      occasion: "birthday",
    });
  });
});