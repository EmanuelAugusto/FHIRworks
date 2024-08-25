import { Entry } from './entry';
import { EntryReference } from './entry-reference';
import { Identifier } from './identifier';
import { Meta } from './meta';
import { Notes } from './notes';
import { Reference } from './reference';
import { Type } from './type';

export class Observation {
  protected resourceType?: string = 'Observation';
  protected meta?: Meta;
  protected status?: string;
  protected category?: Array<Identifier> = [];
  protected code?: Type;
  protected subject?: Identifier;
  protected effectiveDateTime?: string;
  protected issued?: string;
  protected performer?: Type;
  protected valueCodeableConcept?: Array<Identifier> = [];
  protected interpretation?: Array<Type> = [];
  protected note?: Array<Notes>;
  protected method?: Notes;
  protected specimen?: Reference;
  protected referenceRange?: Array<Notes> = [];

  // Getters
  public getResourceType(): string | undefined {
    return this.resourceType;
  }

  public getMeta(): Meta | undefined {
    return this.meta;
  }

  public getStatus(): string | undefined {
    return this.status;
  }

  public getCategory(): Array<Identifier> {
    return this.category;
  }

  public getCode(): Type {
    return this.code;
  }

  public getSubject(): Identifier | undefined {
    return this.subject;
  }

  public getEffectiveDateTime(): string | undefined {
    return this.effectiveDateTime;
  }

  public getIssued(): string | undefined {
    return this.issued;
  }

  public getPerformer(): Type {
    return this.performer;
  }

  public getValueCodeableConcept(): Array<Identifier> {
    return this.valueCodeableConcept;
  }

  public getInterpretation(): Array<Type> {
    return this.interpretation;
  }

  public getNote(): Array<Notes> | undefined {
    return this.note;
  }

  public getMethod(): Notes | undefined {
    return this.method;
  }

  public getSpecimen(): Reference | undefined {
    return this.specimen;
  }

  public getReferenceRange(): Array<Notes> {
    return this.referenceRange;
  }

  // Setters
  public setResourceType(value: string): Observation {
    this.resourceType = value;
    return this;
  }

  public setMeta(value: Meta): Observation {
    this.meta = value;
    return this;
  }

  public setStatus(value: string): Observation {
    this.status = value;

    return this;
  }

  public setCategory(value: Array<Identifier>): Observation {
    this.category = value;

    return this;
  }

  public setCode(value: Type): Observation {
    this.code = value;

    return this;
  }

  public setSubject(value: Identifier): Observation {
    this.subject = value;

    return this;
  }

  public setEffectiveDateTime(value: string): Observation {
    this.effectiveDateTime = value;

    return this;
  }

  public setIssued(value: string): Observation {
    this.issued = value;

    return this;
  }

  public setPerformer(value: Type): Observation {
    this.performer = value;

    return this;
  }

  public setValueCodeableConcept(value: Array<Identifier>): Observation {
    this.valueCodeableConcept = value;

    return this;
  }

  public setInterpretation(value: Array<Type>): Observation {
    this.interpretation = value;

    return this;
  }

  public setNote(value: Array<Notes>): Observation {
    this.note = value;

    return this;
  }

  public setMethod(value: Notes): Observation {
    this.method = value;

    return this;
  }

  public setSpecimen(value: Reference): Observation {
    this.specimen = value;

    return this;
  }

  public setReferenceRange(value: Array<Notes>): Observation {
    this.referenceRange = value;

    return this;
  }
}
