import test from 'ava';
import { changeURL } from '../src/actions';
import { reduce } from '../src/stack-reducer';
import context from '../src/context';
import make, { push } from '../src/stack';

test('stack-reducer push returns a new object', t => {
  const stack = make();
  t.not(
    reduce(stack, { type: 'PUSH', path: 'foo' }),
    stack,
    'stack is immutable'
  );
});

test('stack-reducer new context push', t => {
  const stack = reduce(make(), { type: 'PUSH', path: 'foo' });
  t.is(stack.length, 1, 'adds to stack');
  t.is(stack[0].path, 'foo', 'sets correct path');
});

test('stack-reducer copy context push', t => {
  const stack = reduce(
    push(make(), context({ path: 'foo' })),
    { type: 'PUSH', path: 'foo' }
  );

  t.truthy(stack[1], 'cretes a new copy');
  t.not(stack[0], stack[1], 'contexts are immutable copies');
});


