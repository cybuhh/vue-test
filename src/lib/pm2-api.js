import { get } from 'axios';
// import pick from 'lodash.pick';

function status(serverUrl) {
  return get(`${serverUrl}:9615`).then(result => result && result.data);
}

function start(serverUrl, appName) {
  return get(`http://${serverUrl}:3000/app/${appName}/start`).then(result => result);
}

function restart(serverUrl, appName) {
  return get(`http://${serverUrl}:3000/app/${appName}/restart`).then(result => result);
}

function stop(serverUrl, appName) {
  return get(`http://${serverUrl}:3000/app/${appName}/stop`).then(result => result);
}

function scale(serverUrl, appName, instances) {
  return get(`http://${serverUrl}:3000/app/${appName}/scale?instances=${instances}`).then(result => result);
}

export { status, start, restart, stop, scale };
