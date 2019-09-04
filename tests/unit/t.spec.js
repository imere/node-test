import { add } from "../../web/src/index.js";

describe('add', function () {
  it('1 to be 1', function () {
    expect(add(1)).toBe(1)
  })

  it('2 to be 3', function () {
    expect(add(2)).toBe(3)
  })
})
