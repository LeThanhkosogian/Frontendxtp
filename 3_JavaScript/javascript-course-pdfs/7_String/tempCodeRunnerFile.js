// CE9: https://www.udemy.com/course/javascript-cho-nguoi-moi-bat-dau-2021/learn/quiz/5291824#overview
const SECONDS_PER_MIN = 60;
const SECONDS_PER_HOUR = 3600;

function formatTime(seconds) {
  let hour = ('0' + Math.trunc(seconds / SECONDS_PER_HOUR).toString()).slice(-2);
  seconds = seconds - hour * SECONDS_PER_HOUR;
  let minute = ('0' + Math.trunc(seconds / SECONDS_PER_MIN).toString()).slice(-2);
  seconds = ('0' + (seconds - minute * SECONDS_PER_MIN).toString()).slice(-2);
  return hour + ':' + minute + ':' + seconds;
}
console.log(formatTime(0));