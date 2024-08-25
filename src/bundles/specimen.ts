import { Entry } from './entry';
import { EntryReference } from './entry-reference';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Notes } from './notes';
import { Reference } from './reference';
import { Type } from './type';

export class Specimen {
  protected resourceType?: string = 'Specimen';
  protected meta?: Meta;
  protected type?: Type;

  // Getters
  public getResourceType(): string {
    return this.resourceType;
  }

  public getMeta(): Meta | undefined {
    return this.meta;
  }

  public getType(): Type {
    return this.type;
  }

  // Setters
  public setResourceType(value: string): Specimen {
    this.resourceType = value;

    return this;
  }

  public setMeta(value: Meta): Specimen {
    this.meta = value;

    return this;
  }

  public setType(value: Type): Specimen {
    this.type = value;

    return this;
  }
}
