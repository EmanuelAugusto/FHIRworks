export class Type {
  protected coding?: Array<any> = [];

  setCoding(value: any): Type {
    this.coding.push(value);

    return this;
  }

  getCoding(value: any): Array<any> {
    return this.coding;
  }
}
