import test from 'ava';
import { reduce } from '../src/history-stack-reducer';
import make from '../src/history-stack';

test('push returns a new object', t => {
  const stack = make();
  t.not(
    reduce(stack, { type: 'PUSH', path: 'foo' }),
    stack,
    'reducer creates a new stack'
  );
});

test('stack-reducer new context push', t => {
  const stack = reduce(make(), { type: 'PUSH', path: 'foo' });
  t.is(stack.length, 1, 'adds to stack');
  t.is(stack[0].path, 'foo', 'sets correct path');
});

