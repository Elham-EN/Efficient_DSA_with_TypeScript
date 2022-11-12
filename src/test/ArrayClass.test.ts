import { describe, test, expect } from "@jest/globals";
import ArrayClass from "../DS_Array/Array";
import { reverseAString, reverseAString2 } from "../DS_Array/ReverseAString";

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

describe("Test ReverseAString Function", function () {
  test(`Should reverse "hello" to "olleh"`, function () {
    const reversedWord = reverseAString("hello");
    expect(reversedWord).toBe("olleh");
  });
  test(`Should reverse "mike" to "ekim"`, function () {
    const reversedWord = reverseAString("mike");
    expect(reversedWord).toBe("ekim");
  });
  test(`Should throw error if string size is less than 2"`, function () {
    const reversedWord = reverseAString("mk");
  });
});

describe("Test ReverseAString2 Function", function () {
  test(`Should reverse "hello" to "olleh"`, function () {
    const reversedWord = reverseAString2("hello");
    expect(reversedWord).toBe("olleh");
  });
  test(`Should reverse "mike" to "ekim"`, function () {
    const reversedWord = reverseAString2("mike");
    expect(reversedWord).toBe("ekim");
  });
  test(`Should throw error if string size is less than 2"`, function () {
    const reversedWord = reverseAString2("mk");
  });
});
