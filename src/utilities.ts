const CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
const HYPHEN_REGEX = /-([a-z])/g;
const NO_HYPHEN_REGEX = /^[^-]+$/;
const VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;

/**
 * Checks whether to skip camelCase.
 */
const skipCamelCase = (property: string) =>
  !property ||
  NO_HYPHEN_REGEX.test(property) ||
  CUSTOM_PROPERTY_REGEX.test(property);

/**
 * Replacer that capitalizes first character.
 */
const capitalize = (match: string, character: string) =>
  character.toUpperCase();

/**
 * Replacer that removes beginning hyphen of vendor prefix property.
 */
const trimHyphen = (match: string, prefix: string) => `${prefix}-`;

/**
 * CamelCases a CSS property.
 */
export const camelCase = (property: string) => {
  if (skipCamelCase(property)) {
    return property;
  }

  property = property.toLowerCase();
  property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
  return property.replace(HYPHEN_REGEX, capitalize);
};
