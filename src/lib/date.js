/**
 * @param {Date} date
 */
export function longDateTime(date) {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }
  // @ts-ignore
  return new Intl.DateTimeFormat("id-ID", options).format(date)
}