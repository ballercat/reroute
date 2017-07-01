import Immutable from 'seamless-immutable';

const __INITIAL__ = '__INITIAL__';
// Date.now() is not sufficient for some scenarios when the same time can be generated fro two contexts.
// each Date.now() has a counter appended to it.
let __CONTEXT_COUNTER__ = 0;

export const copy = context => context.merge({ id: Date.now() });

const context = (meta = {
  path: __INITIAL__
}) =>
  Immutable({
    ...meta,
    id: Date.now() + (__CONTEXT_COUNTER__++)
  });


export default context;

