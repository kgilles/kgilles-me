import texts from './en_US';

function t(key) {
  const text = key.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), texts || self);
  return text !== undefined ? text : '';
}

export default t;
