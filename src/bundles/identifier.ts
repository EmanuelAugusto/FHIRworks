export class Identifier {
  protected system: string;
  protected value: string;

  public getValue(): string {
    return this.value;
  }

  public setValue(value: string): Identifier {
    this.value = value;

    return this;
  }

  public getSystem(): string {
    return this.system;
  }

  public setSystem(value: string): Identifier {
    this.system = value;

    return this;
  }
}
