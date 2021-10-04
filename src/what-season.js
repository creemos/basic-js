import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  try {
    if (typeof date == 'undefined') {
      return 'Unable to determine the time of year!';
    }
    if (!date.getTime()) {
      throw new Error('Invalid date!');
    }

    let month = date.getMonth();
    if (month == 11 || month <= 1) {
      return 'winter';
    } else if (month <= 4) {
      return 'spring';
    } else if (month <= 7) {
      return 'summer';
    } else
      return 'autumn';
  } catch (x) {
    throw new Error('Invalid date!');
  }

}