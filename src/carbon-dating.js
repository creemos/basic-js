import {
  NotImplementedError
} from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (Number(!+sampleActivity) || typeof (sampleActivity) !== 'string' ||
    sampleActivity <= 0 ||
    sampleActivity >= MODERN_ACTIVITY)
    return false;
  if (typeof (+sampleActivity) === 'number') {
    let k = 0.693 / HALF_LIFE_PERIOD
    return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k)
  }
  return false
}