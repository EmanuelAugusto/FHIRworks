export class Meta {
  protected lastUpdated?: string;
  protected profile?: Array<string>;

  public getLastUpdated(): string {
    return this.lastUpdated;
  }

  public setLastUpdated(value: string): Meta {
    this.lastUpdated = value;

    return this;
  }

  public getProfile(): Array<string> {
    return this.profile;
  }

  public setProfile(value: Array<string>): Meta {
    this.profile = value;

    return this;
  }
}
