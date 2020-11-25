declare global {
  interface Date {
    dayOfYear(): number;
  }
}

Date.prototype.dayOfYear = function (): number {
  const startOfYear = new Date(this.getFullYear(), 0, 0);
  const diff = this.valueOf() - startOfYear.valueOf();
  const oneDayInMiliseconds = 1000 * 60 * 60 * 24;
  const daylightsSavingTime = (startOfYear.getTimezoneOffset() - this.getTimezoneOffset()) * 60 * 1000;

  return Math.floor((diff + daylightsSavingTime) / oneDayInMiliseconds);
};

export default Date;
