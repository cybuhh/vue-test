import { get } from 'axios';
// import pick from 'lodash.pick';

function status(serverUrl) {
  return get(`${serverUrl}:9615`).then(result => result && result.data);
}

function start() {
}

export { status, start };
