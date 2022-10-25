const YEAR_IN_SECONDS = 365 * 24 * 60 * 60;
const MONTH_IN_SECONDS = 30 * 24 * 60 * 60;
const DAY_IN_SECONDS = 24 * 60 * 60;
const HOUR_IN_SECONDS = 60 * 60;
const MINUTE_IN_SECONDS = 60;

export const secondsToTime = (totalSeconds: number) => {
  let rest = totalSeconds;
  let mod = rest % YEAR_IN_SECONDS;
  const years = (rest - mod) / YEAR_IN_SECONDS;

  rest = mod;
  mod = rest % MONTH_IN_SECONDS;
  const months = (rest - mod) / MONTH_IN_SECONDS;

  rest = mod;
  mod = rest % DAY_IN_SECONDS;
  const days = (rest - mod) / DAY_IN_SECONDS;

  rest = mod;
  mod = rest % HOUR_IN_SECONDS;
  const hours = (rest - mod) / HOUR_IN_SECONDS;

  rest = mod;
  mod = rest % MINUTE_IN_SECONDS;
  const minutes = (rest - mod) / MINUTE_IN_SECONDS;

  const seconds = mod;

  return { years, months, days, hours, minutes, seconds };
};
