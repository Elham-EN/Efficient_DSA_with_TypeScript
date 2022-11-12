import ArrayClass from "./Array";

//Reverse a String: "hello" => "olleh"
export function reverseAString(aString: string): string {
  if (aString.length > 1) {
    const t0 = performance.now();
    const lArrStrObj = new ArrayClass<string>();
    let lStrArr = aString.split("");
    let startIndex = 0;
    let lReverseStrArr = new Array<string>();
    for (let i = lStrArr.length - 1; i >= 0; i--) {
      lArrStrObj.insertItemAtIndex(startIndex, lStrArr[i]);
      lReverseStrArr[startIndex] = lArrStrObj.getItem(startIndex);
      startIndex++;
    }
    const reversedWord = lReverseStrArr.join("").replace(",", "");
    const t1 = performance.now();
    console.log(`Call to reverseAString took ${t1 - t0} milliseconds.`);
    return reversedWord;
  }
  throw new Error("String must be greater than 1").message;
}

//This function is more efficent in term of time complexity - O(n)
export function reverseAString2(aString: string): string {
  if (aString.length > 1) {
    const t0 = performance.now();
    const lStrArr = aString.split("");
    let lReverseStrArr = new Array<string>();
    let startIndex = 0;
    for (let i = lStrArr.length - 1; i >= 0; i--) {
      lReverseStrArr[startIndex] = lStrArr[i];
      startIndex++;
    }
    const reversedWord = lReverseStrArr.join("").replace(",", "");
    const t1 = performance.now();
    console.log(`Call to reverseAString2 took ${t1 - t0} milliseconds.`);
    return reversedWord;
  }
  throw new Error("String must be greater than 1").message;
}

//Convert array to string and replace comma with no space
// ["o","l","l","e","h"] => o,l,l,e,h => olleh
