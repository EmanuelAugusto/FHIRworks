export class Notes {
    protected text?: string;
  
    public getText(): string {
      return this.text;
    }
  
    public setText(value: string): Notes {
      this.text = value;
  
      return this;
    }
  }
  