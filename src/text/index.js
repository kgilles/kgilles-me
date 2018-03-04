import texts from './en_US';

function t(key) {
  const text = key.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), texts || this);
  return text !== undefined ? text : `[${key}]`;
}

export default t;
