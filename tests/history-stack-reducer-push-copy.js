import test from 'ava';
import { reduce } from '../src/history-stack-reducer';
import state from '../src/state';
import make from '../src/history-stack';

test('stack-reducer copy context push', t => {
  var stack  = make([state({ path: 'foo' })]);
  stack = reduce(stack, { type: 'PUSH', path: 'foo' });
  t.is(stack.length, 2, 'adds a new context');
  t.not(stack[0], stack[1], 'contexts are immutable copies');
});
