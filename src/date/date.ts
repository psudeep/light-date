export function formatDate(date, format) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    const formattedDate = format
      .replace('YYYY', year)
      .replace('MM', month.toString().padStart(2, '0'))
      .replace('DD', day.toString().padStart(2, '0'))
      .replace('HH', hours.toString().padStart(2, '0'))
      .replace('mm', minutes.toString().padStart(2, '0'))
      .replace('ss', seconds.toString().padStart(2, '0'));
  
    return formattedDate;
}

export function now() {
  const currentTimeMillis = Date.now();
  let date = new Date();
  const year = date.getFullYear();
  let month: any = date.getMonth() + 1;
  month = month.toString().padStart(2, '0');
  let day: any = date.getDate();
  day = day.toString().padStart(2, '0')
  let hours: any = date.getHours();
  hours = hours.toString().padStart(2, '0')
  let minutes: any = date.getMinutes();
  minutes = minutes.toString().padStart(2, '0');
  let seconds: any = date.getSeconds();
  seconds = seconds.toString().padStart(2, '0');
  const dateFormatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${currentTimeMillis}`;
  return dateFormatted;
}

export function timestamp() {
  const currentTimeMillis = Date.now();
  return currentTimeMillis;
}

export function month() {
  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' });

  return monthName;
}

export function tzoffset() {
  const date = new Date();
  const timezoneOffset = date.getTimezoneOffset();
  const timezoneOffsetHours = Math.abs(timezoneOffset / 60);
  const timezoneOffsetSign = timezoneOffset >= 0 ? '-' : '+';

  return `${timezoneOffsetSign} ${timezoneOffsetHours}`;
}

export function day() {
  const date = new Date();
  const dayOfWeek = date.getDay();

  // console.log(`Today is day ${dayOfWeek + 1} of the week.`);

  let dayName;

  switch (dayOfWeek) {
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
      dayName = 'Invalid day number';
  }
  // let weekDay = dayOfWeek + 1;
  return dayName;
}

export function utc() {
  const date = new Date();
  const utcDateTime = date.toISOString();

  // console.log(utcDateTime);
  return utcDateTime;
}
  
export function addDays(date, days) {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}
  
export function subtractDays(date, days) {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}
  
  