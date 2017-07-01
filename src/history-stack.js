import Immutable from 'seamless-immutable';
import { invalidStateError } from './errors';
import invariant from 'invariant';
import has from 'has';

const hasId = obj => has(obj, 'id');
const hasPath = obj => has(obj, 'path');
const isEqual = (l, r) => l === r;
const matchId = (l, r) => isEqual(l.id, r.id);
const matchTimestamp = (l, r) => isEqual(l.timestamp, r.timestamp);
const matchPath = (l, r) => isEqual(l.path, r.path);

const compare = (left = {}, right = {}) => {
  if (hasId(left) && hasId(right)) {
    return matchId(left, right) && matchTimestamp(left, right);
  }

  if (hasPath(left)) {
    return matchPath(left, right) && matchTimestamp(left, right);
  }

  return false;
}

export const push = (stack, state) => {
  if (find(stack, state))
    return stack;

  invariant(
    hasId(state) || hasPath(state),
    invalidStateError()
  );

  return stack.concat(state);
};

export const pop = stack => stack.slice(0, -1);

export const find = (stack, state) => {
  const length = stack.length;
  for (let i = length - 1; i > -1; i--) {
    if (compare(state, stack[i]))
      return stack[i];
  }

  return null;
};

export const current = (stack, state) => {
  const last = stack.slice(-1)[0];
  return state ? compare(state, last) : last;
};

export const previous = (stack, state) => {
  const previous = stack.slice(-2, -1)[0];
  return state ? compare(state, previous) : previous;
};

const make = (states = []) => {
  return Immutable(states);
};

export default make;

