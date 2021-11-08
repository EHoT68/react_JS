import userEvent from '@testing-library/user-event'
import { Chat } from "./chat";
import { renderWithRedux } from "../../../utils/render-with-redux";


let state = null;

beforeEach(() => {
  state = {
    messages: {
      messages: { room1: [{ author: "ehottest@mail.ru", message: "Test" }] },
    },
  };
});


describe("Chat component", () => {
  it("should render Chat without props", () => {
    const { container } = renderWithRedux(<Chat title="room1" />, state);

    const nodes = [...container.querySelectorAll(".text")];
   
    expect(nodes[0]).toHaveTextContent("room1");
    //expect(nodes[1]).toHaveTextContent("ehottest@mail.ru: Test");
   });

   it("should render Chat selected props", () => {
   const { getByRole } = renderWithRedux(<Chat title="room1" selected={true}/>, state);

   expect(getByRole("button")).toHaveClass("Mui-selected")
   });
   it("should render chat with handleListItemClick prop", () => {
      const handleListItemClick = jest.fn()
  
      const { getByRole } = renderWithRedux(
        <Chat title="room1" handleListItemClick={handleListItemClick} />,
        {
          initialState: state,
        },
      )
  
      userEvent.click(getByRole("button"))
  
      expect(handleListItemClick).toBeCalledTimes(1)
    })
    it("snapshot", () => {
      const { container } = renderWithRedux(<Chat title="room1" />, {
      initialState: state,
      })
    
      expect(container).toMatchSnapshot()
      })
})