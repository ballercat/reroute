import test from 'ava';
import { reduce } from '../src/stack-reducer';
import context from '../src/context';
import make, { push } from '../src/stack';

test('stack-reducer copy context push', t => {
  var stack  = make([context({ path: 'foo' })]);
  stack = reduce(stack, { type: 'PUSH', path: 'foo' });
  t.is(stack.length, 2, 'adds a new context');
  t.not(stack[0], stack[1], 'contexts are immutable copies');
});
