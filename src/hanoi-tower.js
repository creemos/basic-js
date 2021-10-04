import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * steps = 2**disks - 1
 * seconds = steps / turnedSpeed
 * 
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let steps = 2**disksNumber - 1
  let time = Math.floor(steps / (turnsSpeed/3600))
  let obj = {
    turns: steps,
    seconds: time
  }
  return obj
}
