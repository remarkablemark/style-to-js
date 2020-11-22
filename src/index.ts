import StyleToObject from 'style-to-object';
import { camelCase } from './utilities';

type StyleObject = Record<string, string>;

/**
 * Parses CSS inline style to JavaScript object (camelCased).
 */
export default function StyleToJS(style: string): StyleObject {
  if (!style || typeof style !== 'string') {
    return {};
  }

  const output: StyleObject = {};

  StyleToObject(style, (property, value) => {
    // skip CSS comment
    if (property && value) {
      output[camelCase(property)] = value;
    }
  });

  return output;
}
