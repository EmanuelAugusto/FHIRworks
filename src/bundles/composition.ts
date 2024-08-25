import { Entry } from './entry';
import { EntryReference } from './entry-reference';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Reference } from './reference';
import { Type } from './type';

export class Composition {
  protected resourceType: string;
  protected meta: Meta;
  protected status: string;
  protected type: Type;
  protected subject: Identifier;
  protected date: string;
  protected author: Array<Identifier> = [];
  protected title: string;
  protected section: Array<EntryReference<Reference>> = [];

  public getResourceType(): string {
    return this.resourceType;
  }

  public setResourceType(value: string): Composition {
    this.resourceType = value;

    return this;
  }

  public getMeta(): Meta {
    return this.meta;
  }

  public setMeta(value: Meta): Composition {
    this.meta = value;

    return this;
  }

  public getStatus(): string {
    return this.status;
  }

  public setStatus(value: string): Composition {
    this.status = value;

    return this;
  }

  public getType(): Type {
    return this.type;
  }

  public setType(value: Type): Composition {
    this.type = value;

    return this;
  }

  public getSubject(): Identifier {
    return this.subject;
  }

  public setSubject(value: Identifier): Composition {
    this.subject = value;

    return this;
  }

  public getDate(): string {
    return this.date;
  }

  public setDate(value: string): Composition {
    this.date = value;

    return this;
  }

  public getAuthor(): Array<Identifier> {
    return this.author;
  }

  public setAuthor(value: Array<Identifier>): Composition {
    this.author = value;

    return this;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(value: string): Composition {
    this.title = value;

    return this;
  }

  public getSection(): Array<EntryReference<Reference>> {
    return this.section;
  }

  public setSection(value: EntryReference<Reference>): Composition {
    this.section.push(value);

    return this;
  }
}
