import test from 'ava';
import { reduce } from '../src/stack-reducer';
import context from '../src/context';
import make from '../src/stack';

test('stack-reducer pop', t => {
  let stack = make([
    context({ path: 'foo' }),
    context({ path: 'bar' })
  ]);
  stack = reduce(stack, { type: 'POP', id: stack[1].id });
  t.is(stack.length, 1);
});

