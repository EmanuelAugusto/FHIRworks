import { Identifier } from './identifier';
import { Meta } from './meta';

export class Bundle {
  protected resourceType: string;
  protected type: string;
  protected timestamp: string;
  protected meta: Meta;
  protected identifier: Identifier;

  protected entry: Array<any> = [];

  public getResourceType(): string {
    return this.resourceType;
  }

  public getIdentifier(): Identifier {
    return this.identifier;
  }

  public setIdentifier(value: Identifier): Bundle {
    this.identifier = value;

    return this;
  }

  public getMeta(): Meta {
    return this.meta;
  }

  public setMeta(value: Meta): Bundle {
    this.meta = value;

    return this;
  }

  public getType(): string {
    return this.type;
  }

  public getTimestamp(): string {
    return this.timestamp;
  }

  public getEntry(): Array<any> {
    return this.entry;
  }

  public setResourceType(value: string): Bundle {
    this.resourceType = value;

    return this;
  }

  public setType(value: string): Bundle {
    this.type = value;

    return this;
  }

  public setTimestamp(value: string): Bundle {
    this.timestamp = value;
    return this;
  }

  public pushEntry(value: any): Bundle {
    this.entry.push(value);

    return this;
  }
}
