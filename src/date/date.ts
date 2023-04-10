async function formatDate(date, format) {
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
  
  function addDays(date, days) {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }
  
  function subtractDays(date, days) {
    const newDate = new Date(date.getTime());
    newDate.setDate(newDate.getDate() - days);
    return newDate;
  }
  
export default {
    formatDate,
    addDays,
    subtractDays,
  };
  