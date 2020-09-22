interface Rule {
  type: "required" | "length";
}

interface Require extends Rule {
  type: "required";
}

interface Length extends Rule {
  type: "length";
  options: MinMaxOptions;
}

export function required(): Require {
  return { type: "required" };
}

interface MinMaxOptions {
  min: number;
  max: number;
}

export function length(options: MinMaxOptions): Length {
  return { type: "length", options };
}

type Validator = Require | Length;

export interface Status {
  valid: boolean;
  message?: string;
}

export function validate(value: string, validators: Validator[]): Status {
  for (const validator of validators) {
    if (validator.type === "required" && (!value || !value.length)) {
      return {
        valid: false,
        message: "该表单的内容为必填项",
      };
    }

    if (
      validator.type === "length" &&
      (value.length < validator.options.min ||
        value.length > validator.options.max)
    ) {
      return {
        valid: false,
        message: `字段内容长度不能小于 ${validator.options.min}, 并且不能大于 ${validator.options.max}`,
      };
    }
  }

  return { valid: true };
}
