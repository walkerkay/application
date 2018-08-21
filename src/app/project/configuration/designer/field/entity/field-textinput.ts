import { FieldBase } from './field-base';

export class FieldTextInput extends FieldBase<string> {

  type = 1;

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || '';
  }
}
