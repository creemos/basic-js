import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(mode = 'true') {
    this.mode = mode;
  }

  encrypt(spam, rev) {
    if (spam == undefined || rev == undefined) {
      throw Error('Incorrect arguments!')
    }
    spam = spam.toUpperCase();
    rev = rev.toUpperCase();
    while (rev.length < spam.length) {
      rev += rev;
    }
    let final = '';
    let equal = 0;

    for (let i = 0; i < spam.length; i++) {
      let charNum = spam.charCodeAt(i);
      if (charNum >= 65 && charNum <= 91) {
        charNum -= 65;
        let num = rev.charCodeAt(equal) - 65;
        let result = ((charNum + num) % 26) + 65;
        final += String.fromCharCode(result);
        equal++;
      } else {
        final += spam[i];
      }
    }

    if (!this.mode) return final.split('').reverse().join('');
    return final;
  }

  decrypt(spam, rev) {
    if (spam == undefined || rev == undefined) {
      throw Error('Incorrect arguments!')
    }
    spam = spam.toUpperCase();
    rev = rev.toUpperCase();
    while (rev.length < spam.length) {
      rev += rev;
    }
    let final = '';
    let equal = 0;

    for (let i = 0; i < spam.length; i++) {
      let charCode = spam.charCodeAt(i);
      if (charCode >= 65 && charCode <= 91) {
        charCode += 65;
        let num = rev.charCodeAt(equal) - 65;
        let result = ((charCode - num) % 26) + 65;
        final += String.fromCharCode(result);
        equal++;
      } else {
        final += spam[i];
      }
    }

    if (!this.mode) return final.split('').reverse().join('');
    return final;
  }
}