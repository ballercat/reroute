import make, { push, find } from './stack';
import context, { copy } from './context';

const handlePush = (stack, action) => {
  const found = find(stack, action);
  return found ? push(stack, copy(found)) : push(stack, context(action));
};

export const reduce = (stack = make(), action) => {
  switch(action.type) {
    case 'PUSH':
      return handlePush(stack, action);
    default:
      return stack;
  };
};

