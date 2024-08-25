export class EntryReference<T> {
  protected entry?: Array<T> = [];

  public getEntry(): Array<T> {
    return this.entry;
  }

  public setEntry(value: T): EntryReference<T> {
    this.entry.push(value);

    return this;
  }
}
