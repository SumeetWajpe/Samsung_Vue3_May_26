import {
  describe,
  it,
  test,
  expect,
  toBe,
  beforeEach,
  afterEach,
} from "vitest";
function sum(x, y) {
  return x + y;
}

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// OR
// test suite
describe("test for addition operation", () => {
  beforeEach(() => {
    console.log("Executed before every test !");
  });
  afterEach(() => {
    console.log("Executed after every test !");
  });
  // test case
  it("adds two numbers", () => {
    console.log("Adding two number");
    expect(sum(1, 2)).toBe(3);
  });
  it("adds two strings", () => {
    console.log("Adding two strings");
    expect(sum("Hello ", "Vitest")).toBe("Hello Vitest");
  });
});
