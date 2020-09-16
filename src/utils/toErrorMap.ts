import { FieldError } from '../generated/graphql';

export const toErrorMap = (errors: FieldError[]) => {
  const erroMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    erroMap[field] = message;
  });

  return erroMap;
};
