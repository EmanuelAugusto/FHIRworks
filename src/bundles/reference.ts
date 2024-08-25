export class Reference {
    protected reference?: string;
  
    public getReference(): string {
      return this.reference;
    }
  
    public setReference(value: string): Reference {
      this.reference = value;
  
      return this;
    }
  }
  