const MINUTE = 60;
const HOUR = 60 * 60;
const DAY = 60 * 60 * 24;

export default function (uptime) {
  const sec = parseInt(uptime % MINUTE, 10);
  const min = parseInt((uptime % HOUR) / MINUTE, 10);
  const hr = parseInt((uptime % DAY) / HOUR, 10);
  const days = parseInt((uptime / DAY), 10);
  return `${days} days ${hr}h ${min}m ${sec}s`;
}
