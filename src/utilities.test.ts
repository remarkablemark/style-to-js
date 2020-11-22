import { camelCase } from './utilities';

describe('camelCase', () => {
  it('does nothing for empty string', () => {
    expect(camelCase('')).toBe('');
  });

  // no hyphen
  it.each([
    ['foo', 'foo'],
    ['fooBar', 'fooBar'],
  ])('does nothing for string without hyphen: "%s"', (property, expected) => {
    expect(camelCase(property)).toBe(expected);
  });

  // custom property
  it.each([
    ['--fooBar', '--fooBar'],
    ['--foo-bar', '--foo-bar'],
    ['--foo-100', '--foo-100'],
  ])('does nothing for custom property: "%s"', (property, expected) => {
    expect(camelCase(property)).toBe(expected);
  });

  it.each([
    ['foo-bar', 'fooBar'],
    ['foo-bar-baz', 'fooBarBaz'],
    ['CAMEL-CASE', 'camelCase'],
  ])('converts "%s" to "%s"', (property, expected) => {
    expect(camelCase(property)).toBe(expected);
  });
});
