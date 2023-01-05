/*
  Jalaali years starting the 33-year rule.
*/
const breaks = [
  -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192,
  2262, 2324, 2394, 2456, 3178,
];

const jalaliMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

/*
  Converts a Gregorian date to Jalaali.
*/
export function toJalaali(year: number, month: number, day: number) {
  return julianDay2Jalali(gregorian2JulianDay(year, month, day));
}

/*
  Converts a Jalaali date to Gregorian.
*/
export function toGregorian(year: number, month: number | string, day: number) {
  const monthNumber: number | undefined = getJalaliMonthNumber(month);
  if (monthNumber == undefined) {
    return undefined;
  }
  return dayToGregorian(jalali2JulianDay(year, monthNumber, day));
}

/** 
  This function determines if the Jalaali (Persian) year is
  leap (366-day long) or is the common year (365 days), and
  finds the day in March (Gregorian calendar) of the first
  day of the Jalaali year (jy).

  @param year Jalaali calendar year (-61 to 3177)
  @param withoutLeap when don't need leap (true or false) default is false
  @return
    leap: number of years since the last leap year (0 to 4)
    gy: Gregorian year of the beginning of Jalaali year
    march: the March day of Farvardin the 1st (1st day of jy)
  @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
  @see: http://www.fourmilab.ch/documents/calendar/
*/
function jalCal(year: number, withoutLeap: boolean) {
  let bl = breaks.length,
    gy = year + 621,
    leapJ = -14,
    jp = breaks[0],
    jm,
    jump = 0,
    leap,
    leapG,
    march,
    n;

  if (year < jp || year >= breaks[bl - 1])
    throw new Error("Invalid Jalaali year " + year);

  // Find the limiting years for the Jalaali year jy.
  for (let i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (year < jm) break;
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  n = year - jp;

  // Find the number of leap years from AD 621 to the beginning
  // of the current Jalaali year in the Persian calendar.
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;

  // And the same in the Gregorian calendar (until the year gy).
  leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;

  // Determine the Gregorian date of Farvardin the 1st.
  march = 20 + leapJ - leapG;

  // return with gy and march when we don't need leap
  if (withoutLeap) return { gy: gy, march: march };

  // Find how many years have passed since the last leap year.
  if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }

  return { leap: leap, gy: gy, march: march };
}

/** 
  Converts a date of the Jalaali calendar to the Julian Day number.

  @param year Jalaali year (1 to 3100)
  @param month Jalaali month (1 to 12)
  @param day Jalaali day (1 to 29/31)
  @return Julian Day number
*/
function jalali2JulianDay(year: number, month: number, day: number): number {
  const r = jalCal(year, true);
  return (
    gregorian2JulianDay(r.gy, 3, r.march) +
    (month - 1) * 31 -
    div(month, 7) * (month - 7) +
    day -
    1
  );
}

/** 
  Converts the Julian Day number to a date in the Jalaali calendar.

  @param jDay Julian Day number
  @return
    jy: Jalaali year (1 to 3100)
    jm: Jalaali month (1 to 12)
    jd: Jalaali day (1 to 29/31)
*/
function julianDay2Jalali(jDay: number) {
  var gy = dayToGregorian(jDay).gy, // Calculate Gregorian year (gy).
    jy = gy - 621,
    r = jalCal(jy, false),
    jdn1f = gregorian2JulianDay(gy, 3, r.march),
    jd,
    jm,
    k;

  // Find number of days that passed since 1 Farvardin.
  k = jDay - jdn1f;
  if (k >= 0) {
    if (k <= 185) {
      // The first 6 months.
      jm = 1 + div(k, 31);
      jd = mod(k, 31) + 1;
      return { jy: jy, jm: jm, jd: jd };
    } else {
      // The remaining months.
      k -= 186;
    }
  } else {
    // Previous Jalaali year.
    jy -= 1;
    k += 179;
    if (r.leap === 1) k += 1;
  }
  jm = 7 + div(k, 30);
  jd = mod(k, 30) + 1;
  return { jy: jy, jm: jm, jd: jd };
}

/*
  Calculates the Julian Day number from Gregorian or Julian
  calendar dates. This integer number corresponds to the noon of
  the date (i.e. 12 hours of Universal Time).
  The procedure was tested to be good since 1 March, -100100 (of both
  calendars) up to a few million years into the future.

  @param gy Calendar year (years BC numbered 0, -1, -2, ...)
  @param gm Calendar month (1 to 12)
  @param gd Calendar day of the month (1 to 28/29/30/31)
  @return Julian Day number
*/
function gregorian2JulianDay(year: number, month: number, day: number) {
  var d =
    div((year + div(month - 8, 6) + 100100) * 1461, 4) +
    div(153 * mod(month + 9, 12) + 2, 5) +
    day -
    34840408;
  d = d - div(div(year + 100100 + div(month - 8, 6), 100) * 3, 4) + 752;
  return d;
}

/**
  Calculates Gregorian and Julian calendar dates from the Julian Day number
  (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
  calendars) to some millions years ahead of the present.

  @param jDay Julian Day number
  @return
    gy: Calendar year (years BC numbered 0, -1, -2, ...)
    gm: Calendar month (1 to 12)
    gd: Calendar day of the month M (1 to 28/29/30/31)
*/
function dayToGregorian(jDay: number) {
  var j, i, gd, gm, gy;
  j = 4 * jDay + 139361631;
  j = j + div(div(4 * jDay + 183187720, 146097) * 3, 4) * 4 - 3908;
  i = div(mod(j, 1461), 4) * 5 + 308;
  gd = div(mod(i, 153), 5) + 1;
  gm = mod(div(i, 153), 12) + 1;
  gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return { gy: gy, gm: gm, gd: gd, date: new Date(gy, gm - 1, gd) };
}

/*
  Utility helper functions.
*/

function div(a: number, b: number) {
  return ~~(a / b);
}

function mod(a: number, b: number) {
  return a - ~~(a / b) * b;
}

/**
 * get Jalali month(name or number) and return month number
 * @param month name or number(1-12) of Jalali month
 * @returns month number of jalali(1-12)
 */
function getJalaliMonthNumber(month: string | number): number | undefined {
  if (typeof month === "number") {
    return month;
  }
  const index = jalaliMonths.indexOf(month);
  if (index === -1) {
    return undefined;
  }
  return index + 1;
}
