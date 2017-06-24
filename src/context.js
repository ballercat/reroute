import Immutable from 'seamless-immutable';

const __INITIAL__ = '__INITIAL__';

export const copy = context => context.merge({ id: Date.now() });

const context = (meta = {
  path: __INITIAL__
}) =>
  Immutable({
    ...meta,
    id: Date.now()
  });


export default context;

