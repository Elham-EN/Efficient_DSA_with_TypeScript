import { describe, test, expect } from "@jest/globals";
import ArrayClass from "../DS_Array/Array";

describe("Test Array Class", function () {
  const arrIntInstance = new ArrayClass<number>();
  test("Array should add item [1,2,3]", function () {
    arrIntInstance.addItemEnd(1);
    arrIntInstance.addItemEnd(2);
    arrIntInstance.addItemEnd(3);
    expect(arrIntInstance).toMatchObject({
      data: { "0": 1, "1": 2, "2": 3 },
      length: 3,
    });
  });
});
