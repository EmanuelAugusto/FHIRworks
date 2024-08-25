export class Entry {
  protected fullUrl?: string;
  protected resource?: any;

  public getFullUrl(): string {
    return this.fullUrl;
  }

  public setFullUrl(value: string): Entry {
    this.fullUrl = value;

    return this;
  }

  public getResource(): string {
    return this.resource;
  }

  public setResource(value: any): Entry {
    this.resource = value;

    return this;
  }
}
