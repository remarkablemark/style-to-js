import styleToJS from '.';

it('parses empty style to object', () => {
  expect(styleToJS('')).toEqual({});
});

it('does not parse CSS comment', () => {
  expect(styleToJS('/* comment */')).toEqual({});
});

// invalid argument
it.each([undefined, null, 0, 1, true, false, {}, [], () => {}, new Date()])(
  'parses "%s" to empty object',
  (text) => {
    expect(styleToJS(text as string)).toEqual({});
  }
);

it.each(['top:', ':12px', ':', ';'])('parses "%s" to empty object', (text) => {
  expect(styleToJS(text)).toEqual({});
});

it('parses common styles to object', () => {
  const style = `
    color: #f00;
    font-size: 42px;
    z-index: -1;
  `;
  expect(styleToJS(style)).toMatchSnapshot();
});

it('parses style with vendor prefix to object', () => {
  const style = `
    display: -ms-grid;
    display: grid;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    background: -webkit-gradient(linear, left top, left bottom, from(white), to(black));
    background: -o-linear-gradient(top, white, black);
    background: linear-gradient(to bottom, white, black);
  `;
  expect(styleToJS(style)).toMatchSnapshot();
});

it('parses background style to object', () => {
  const style =
    'background: url(data:image/png; base64,ivborw0kggoaaaansaaaabgdbtueaalgpc/xhbqaaaafzmuexurczmzpf399fx1+bm5mzy9avzxbesmgces5/p8/t9furvcrmu73jwlzosgsiizurcjo/ad+eqjjb4hv8bft+idpqocx1wjosbfhh2xssxeiyn3uli/6mnree07uiwjev8u8czwyuqdlkpg1bkb4nnm+veanfhqn1k4+gpt6ugqcvu2h2ovuif)';
  expect(styleToJS(style)).toMatchSnapshot();
});

it('parses style with no spaces to object', () => {
  const style =
    'border-bottom-left-radius:1em;border-right-style:solid;Z-Index:-1;-moz-border-radius-bottomleft:20px';
  expect(styleToJS(style)).toMatchSnapshot();
});
