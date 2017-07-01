import make, { push, pop, find, previous } from "./history-stack";
import state, { copy } from "./state";

// Handle push-state
const handlePush = (stack, meta) => {
  const found = find(stack, meta);
  if (found) return push(stack, copy(found, meta));

  return push(stack, state(meta));
};

// Handle pop-state
const handlePop = (stack, meta) => {
  const found = find(stack, meta);
  if (found && previous(stack, found)) return pop(stack);
  return stack;
};

export const reduce = (stack = make(), { type, ...meta }) => {
  switch (type) {
    case "PUSH":
      return handlePush(stack, meta);
    case "POP":
      return handlePop(stack, meta);
    default:
      return stack;
  }
};
