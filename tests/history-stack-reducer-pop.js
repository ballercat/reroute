import test from 'ava';
import { reduce } from '../src/history-stack-reducer';
import context from '../src/context';
import make from '../src/history-stack';

test('stack-reducer pop', t => {
  let stack = make([
    context({ path: 'foo' }),
    context({ path: 'bar' })
  ]);
  // a popstate event will fire with the previous state in the stack
  stack = reduce(stack, { type: 'POP', ...stack[0] });
  t.is(stack.length, 1);
});

