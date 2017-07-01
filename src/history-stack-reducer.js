import make, { push, pop, find, previous } from './history-stack';
import state, { copy } from './state';

// Handle push state
const handlePush = (stack, action) => {
  const found = find(stack, action);
  return found ? push(stack, copy(found)) : push(stack, state(action));
};

// Handle pop state
const handlePop = (stack, action) => {
  const found = find(stack, action);
  if (found && previous(stack, found))
    return pop(stack);
  return stack;
};

export const reduce = (stack = make(), { type, ...rest }) => {
  switch(type) {
    case 'PUSH':
      return handlePush(stack, rest);
    case 'POP':
      return handlePop(stack, rest);
    default:
      return stack;
  };
};

