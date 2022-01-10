import Date from '../../Shared/Domain/Date';

export class Season {
  private readonly _fromDayOfYear: number;
  private readonly _toDayOfYear: number;

  constructor({ fromDayOfYear, toDayOfYear }: { fromDayOfYear: number; toDayOfYear: number }) {
    this._fromDayOfYear = fromDayOfYear;
    this._toDayOfYear = toDayOfYear;
  }

  isPeriod({ date }: { date: Date }): boolean {
    const dayOfYear = date.dayOfYear();

    return dayOfYear >= this._fromDayOfYear && dayOfYear <= this._toDayOfYear;
  }

  static summer(): Season {
    const startDate = new Date(0, 5, 21); // June 21
    const endDate = new Date(0, 8, 22); // September 22

    return new Season({ fromDayOfYear: startDate.dayOfYear(), toDayOfYear: endDate.dayOfYear() });
  }

  static autumn(): Season {
    const startDate = new Date(0, 8, 22); // September 22
    const endDate = new Date(0, 11, 21); // December 21

    return new Season({ fromDayOfYear: startDate.dayOfYear(), toDayOfYear: endDate.dayOfYear() });
  }

  static lateSummerEarlyAutumn(): Season {
    const startDate = new Date(0, 7, 6); // August 6
    const endDate = new Date(0, 10, 6); // November 6

    return new Season({ fromDayOfYear: startDate.dayOfYear(), toDayOfYear: endDate.dayOfYear() });
  }

  static lateWinterEarlySpring(): Season {
    const startDate = new Date(0, 1, 3); // February 3
    const endDate = new Date(0, 4, 5); // May 5

    return new Season({ fromDayOfYear: startDate.dayOfYear(), toDayOfYear: endDate.dayOfYear() });
  }
}
