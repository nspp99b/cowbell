import quiet1 from './cowbell_quiet_1.mp3';
import quiet2 from './cowbell_quiet_2.mp3';
import med2 from './cowbell_med_2.mp3';
import high1 from './cowbell_high_1.mp3';

//create new Audio objects for each sound
const quietCowbell1 = new Audio(quiet1);
const quietCowbell2 = new Audio(quiet2);
const medCowbell2 = new Audio(med2);
const highCowbell1 = new Audio(high1);

export default {
  quietCowbell1,
  quietCowbell2, 
  medCowbell2,
  highCowbell1
};
