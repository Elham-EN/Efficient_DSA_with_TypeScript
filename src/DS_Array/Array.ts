//Create an Array Data Structure from scratch

type NumberIndexedObject = {
  //Array index is an number
  //Can accept an element of any type
  [index: number]: any;
};

// Our Array can contain string, number and other types
export default class ArrayClass<T> {
  private length: number; //size of array
  private data: NumberIndexedObject; //an object

  public constructor() {
    //Initialize the properties
    this.length = 0;
    this.data = Object.create({});
  }

  /**
   * Get element at given index (Access item)
   * @param index Index of value to return
   * @returns Value (Item)
   * @error Out of range if non-existent
   */
  public getItem(index: number): T {
    // Index must be positive & index cannot be
    // greater than the array size
    if (index >= 0 && index < this.length) {
      return this.data[index];
    }
    throw new Error("Out of bound/range").message;
  }

  /**
   * Get number of elements in the array
   * @returns length of the array
   */
  public getArraySize(): number {
    return this.length;
  }

  /**
   * Add Element at the end of array
   * @param item Value/Object to push
   */
  public addItemEnd(item: T): number {
    // Add item to the end of array
    this.data[this.length] = item;
    // Add 1 to the array length (new index)
    ++this.length;
    return this.length;
  }

  /**
   * Remove the last element of array
   * @returns Value/Object at the index
   * @error Out of range
   */
  public removeItemEnd(): T {
    //What if there is no element in the array and remove what?
    if (this.length > 0) {
      // Retrieve last item
      const lastItem = this.data[this.length - 1];
      // Delete last item (remove property from object)
      delete this.data[this.length - 1];
      // Decrement array length by 1 (remove empty index)
      --this.length;
      return lastItem;
    }
    throw new Error("No element in the array").message;
  }

  /**
   * Delete Item at a specific position in the array
   * @param index array index position to delete
   * @returns value/object at index
   * @error Out of range
   */
  public deleteItemAtIndex(index: number): T {
    if (index >= 0 && index < this.length) {
      const item = this.data[index];
      this.shiftItemsLeftAfterIndex(index);
      return item;
    }
    throw new Error("Out of bound/ranger");
  }

  /**
   * Shift items to left from where the index start from
   * Example: Arr = [1, 2, 3, 4]
   *         index: [0][1][2][3]
   * let say delete item 3 at index 2
   */
  private shiftItemsLeftAfterIndex(index: number): void {
    // i = 2 and length = 3 (4 - 1)
    for (let i = index; i < this.length - 1; i++) {
      //data[2] = data[3], now at index 2 the value is 4
      this.data[i] = this.data[i + 1]; //(shifted)
    }
    //now length size is 3
    --this.length;
    //delete data[3]
    delete this.data[this.length];
  }

  /**
   * Inset a given value (item) at a specific index
   * @param index array index position to insert at
   * @param item: insert item to array
   * @returns length of array after insertion
   * @error Out of range
   */
  public insertItemAtIndex(index: number, item: T): number {
    if (index >= 0 && index < this.length) {
      this.shiftItemsRightAtIndex(index);
      this.data[index] = item;
      return this.length;
    }
    throw new Error("Out of bound/range").message;
  }

  private shiftItemsRightAtIndex(index: number): void {
    ++this.length;
    for (let i = this.length - 1; i > index; --i) {
      //Shift item at the right index
      this.data[i] = this.data[i - 1];
    }
    delete this.data[index];
  }
}

// const arrInstance = new ArrayClass<number>();
// arrInstance.addItemEnd(1);
// arrInstance.addItemEnd(2);
// arrInstance.addItemEnd(3);
// arrInstance.addItemEnd(4);
// arrInstance.getItem(2);
// console.log(arrInstance);

// console.log(arrInstance.getArraySize());
// arrInstance.deleteItemAtIndex(2);
// arrInstance.insertItemAtIndex(2, 50);
// arrInstance.deleteItemAtIndex(3);
// console.log(arrInstance);

// const arrNumInstance = new ArrayClass<number>();
// arrNumInstance.addItemEnd(6);
// arrNumInstance.addItemEnd(7);
// console.log(arrNumInstance.getArraySize());
// arrNumInstance.removeItemEnd();
// arrNumInstance.removeItemEnd();
// console.log(arrNumInstance.getArraySize());
// arrNumInstance.removeItemEnd();
// console.log(arrNumInstance);

// const arrStringInstance = new ArrayClass<string>();
// arrStringInstance.addItemEnd("Jake");
// arrStringInstance.addItemEnd("Finn");
// console.log(arrStringInstance);
