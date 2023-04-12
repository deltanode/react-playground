/**
 * Testing javascript code using jest
 */

import { sum } from "../sum"

test("Check sum of 2 positive number", () => {
  expect(sum(2, 5)).toBe(7)
})
