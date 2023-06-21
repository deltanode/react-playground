const mockFunc = jest.fn(() => {
  return "hello testing"
})

test("check return value of mock function", () => {
  expect(mockFunc()).toBe("hello testing")
})
