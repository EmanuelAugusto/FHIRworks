export class System {
  protected system?: string;
  protected code?: string;

  setSystem(value: string): System {
    this.system = value;

    return this;
  }

  getSystem(value: any): string {
    return this.system;
  }

  setCode(value: string): System {
    this.code = value;

    return this;
  }

  getCode(value: any): string {
    return this.code;
  }
}
