declare global {
  interface Date {
    dayOfYear(): number;
    UTCFormat(params?: { resetTime?: boolean }): string;
  }
}

Date.prototype.dayOfYear = function (): number {
  const startOfYear = new Date(this.getFullYear(), 0, 0);
  const diff = this.valueOf() - startOfYear.valueOf();
  const oneDayInMiliseconds = 1000 * 60 * 60 * 24;
  const daylightsSavingTime = (startOfYear.getTimezoneOffset() - this.getTimezoneOffset()) * 60 * 1000;

  return Math.floor((diff + daylightsSavingTime) / oneDayInMiliseconds);
};

Date.prototype.UTCFormat = function ({ resetTime = false }: { resetTime?: boolean } = {}): string {
  return `${this.getFullYear()}-${('0' + (this.getMonth() + 1)).slice(-2)}-${('0' + this.getDate()).slice(-2)}T${
    resetTime ? '00:00:00' : '23:59:59'
  }UTC`;
};

export default Date;
