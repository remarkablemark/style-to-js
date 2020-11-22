const CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
const HYPHEN_REGEX = /-([a-z])/g;
const NO_HYPHEN_REGEX = /^[^-]+$/;
const VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o)-/;

/**
 * CamelCases a CSS property.
 */
export const camelCase = (property: string) => {
  if (
    !property ||
    NO_HYPHEN_REGEX.test(property) ||
    CUSTOM_PROPERTY_REGEX.test(property)
  ) {
    return property;
  }

  return property
    .toLowerCase()
    .replace(VENDOR_PREFIX_REGEX, (_, prefix) => `${prefix}-`)
    .replace(HYPHEN_REGEX, (_, character) => character.toUpperCase());
};
