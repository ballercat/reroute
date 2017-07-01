import Immutable from 'seamless-immutable';
import { invalidContextError } from './errors';
import invariant from 'invariant';
import has from 'has';

const hasId = obj => has(obj, 'id');
const hasPath = obj => has(obj, 'path');
const isEqual = (l, r) => l === r;

const compare = (left = {}, right = {}) =>
  hasId(left) && hasId(right) ?
  isEqual(left.id, right.id) :
    hasPath(left) ?
    isEqual(left.path, right.path) :
    false;

export const push = (stack, context) => {
  if (find(stack, context))
    return stack;

  invariant(
    hasId(context) || hasPath(context),
    invalidContextError()
  );

  return stack.concat(context);
};

export const pop = stack => stack.slice(0, -1);

export const find = (stack, context) => {
  const length = stack.length;
  for (let i = length - 1; i > -1; i--) {
    if (compare(context, stack[i]))
      return stack[i];
  }

  return null;
};

export const current = (stack, context) => {
  const last = stack.slice(-1)[0];
  return context ? compare(context, last) : last;
};

export const previous = (stack, context) => {
  const previous = stack.slice(-2, -1)[0];
  return context ? compare(context, previous) : previous;
};

const make = (contents = []) => {
  return Immutable(contents);
};

export default make;

