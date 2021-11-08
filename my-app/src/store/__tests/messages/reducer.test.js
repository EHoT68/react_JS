import { messagesReducer, sendMessage, GET_MESSAGES_SUCESS } from "../../messages"

describe("message reducer", () => {
   it("send message", () => {
      const state = messagesReducer(
         { messages: {} },
         sendMessage({ author: "Bot", message: "Test" }, "room1"),
      )

      expect(state.messages.room1.length).toBe(1)
      expect(state.messages.room1[0].author).toBe("Bot")
      expect(state.messages.room1[0]).toHaveProperty("message", "Test")
   })
   it("get messages", () => {
      const state = messagesReducer(
        { messages: {} },
        { type: GET_MESSAGES_SUCESS, payload: { room1: [1, 2, 3, 4] } },
      )
  
      expect(Object.keys(state.messages)).toEqual(["room1"])
      expect(state.messages.room1).toEqual([1, 2, 3, 4])
   })
   it("default messages", () => {
      const state = messagesReducer({ messages: 1 })
      expect(state.messages).toBe(1)
   })
});