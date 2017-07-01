import Immutable from 'seamless-immutable';

const __INITIAL__ = '__INITIAL__';
// Date.now() is not sufficient for some scenarios when the same time can be generated fro two contexts.
// Instead the time created and identifier are sepparated
let __CONTEXT_COUNTER__ = 0;

export const copy = (state, meta = { id: __CONTEXT_COUNTER__++ }) =>
  state.merge(
    meta,
    {
      timestamp: Date.now()
    }
  );

const state = (meta = {
  path: __INITIAL__
}, data = {}) =>
  Immutable({
    ...meta,
    data,
    id: (__CONTEXT_COUNTER__++),
    timestamp: Date.now()
  });


export default state;

