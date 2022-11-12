import ArrayClass from "./Array";

//Reverse a String: "hello" => "olleh"
export default function reverseAString(aString: string): string {
  const lArrStrObj = new ArrayClass<string>();
  let lStrArr = aString.split("");
  let startIndex = 0;
  let lReverseStrArr = new Array<string>();

  for (let i = 0; i < lStrArr.length; i++) {
    lArrStrObj.addItemEnd(lStrArr[i].toLowerCase());
  }

  for (let i = lArrStrObj.getArraySize() - 1; i >= 0; i--) {
    lArrStrObj.insertItemAtIndex(startIndex, lStrArr[i]);
    startIndex++;
  }

  for (let i = lArrStrObj.getArraySize() - 1; i >= lStrArr.length; i--) {
    lArrStrObj.deleteItemAtIndex(i);
  }

  for (let i = 0; i <= lArrStrObj.getArraySize() - 1; i++) {
    lReverseStrArr[i] = lArrStrObj.getItem(i);
  }

  //Convert array to string and replace comma with no space
  // ["o","l","l","e","h"] => o,l,l,e,h => olleh
  const reversedWord = lReverseStrArr.join("").replace(",", "");

  return reversedWord;
}
