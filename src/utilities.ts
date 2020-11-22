const CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
const NO_HYPHEN_REGEX = /^[^-]+$/;
const HYPHEN_REGEX = /-([a-z])/g;

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
    .replace(HYPHEN_REGEX, (_, character) => character.toUpperCase());
};
