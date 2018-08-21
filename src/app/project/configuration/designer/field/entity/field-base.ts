export class FieldBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  orderNo: number;
  type: number;
  size: number;
  className: string;
  helpText: string;
  placeHolder: string;
  selected: boolean;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    orderNo?: number,
    type?: number,
    size?: number,
    className?: string,
    helpText?: string,
    placeHolder?: string,
    selected?: boolean
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.orderNo = options.orderNo === undefined ? 1 : options.orderNo;
    this.type = options.type;
    this.size = options.size || 1;
    this.className = options.className || '';
    this.helpText = options.helpText || '';
    this.placeHolder = options.placeHolder || '';
    this.selected = options.selected || false;
  }
}
