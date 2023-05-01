function timeToWords(timeStr){
    //Split time string into two numbers
    const time = timeStr.split(":")
    const hours = time[0]
    const minutes = time[1]

    let words = ["oh", "one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen",
        "fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty one","twenty two","twenty three", "twenty four",
        "twenty five", "twenty six","twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two", "thirty three",
        "thirty four","thirty five","thirty six","thirty seven","thirty eight","thirty nine","fourty", "fourty one","fourty two",
        "fourty three","fourty four","fourty five","fourty six","fourty seven","fourty eight","fourty nine","fifty","fifty one",
        "fifty two","fifty three","fifty four","fifty five","fifty six","fifty seven","fifty eight","fifty nine"]

    let hourWords;
    if(hours == '00'){
        hourWords = 'midnight'
    }else if (hours.charAt(0) == '0'){
        hourWords = words[hours.charAt(1)]
    }else if (hours <= 12){
        hourWords = words[hours]
    }else{
        hourWords = words[hours - 12]
    }

  
    let minuteWords;
    if(minutes && hours == '00'){
      minuteWords = ''
    }else if (minutes == '00') {
      minuteWords = "o'clock";
    }else if (minutes.charAt(0) == '0'){
      minuteWords = words[minutes.charAt(1)];
      console.log(minutes.charAt(1))
    }else{
      minuteWords = words[minutes];
    }

    let period;
    if(hours == '00'){
      period = ''
    }
    else {
      period = hours < 12 ? 'am' : 'pm';
    }
    return `${hourWords} ${minuteWords} ${period}`;
}


module.exports = {timeToWords}

/*
function timeToWords(timeStr) {
  // Split the time string into hours and minutes
  const [hours, minutes] = timeStr.split(':');

  // Convert hours to words
  let hourWords;
  if (hours == '00') {
    hourWords = 'twelve';
  } else if (hours.charAt(0) == '0') {
    hourWords = convertToWords(hours.charAt(1));
  } else if (hours <= 12) {
    hourWords = convertToWords(hours);
  } else {
    hourWords = convertToWords(hours - 12);
  }

  // Convert minutes to words
  let minuteWords;
  if (minutes == '00') {
    minuteWords = '';
  } else if (minutes.charAt(0) == '0') {
    minuteWords = convertToWords(minutes.charAt(1));
  } else if (minutes <= 20) {
    minuteWords = convertToWords(minutes);
  } else {
    minuteWords = convertToWords(minutes.charAt(0) + '0') + ' ' + convertToWords(minutes.charAt(1));
  }

  // Determine AM or PM
  const period = hours < 12 ? 'am' : 'pm';

  // Build the final string
  return `${hourWords} ${minuteWords} ${period}`;
}

// A helper function to convert a number to words
function convertToWords(num) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];

  if (num < 20) {
    return ones[num];
  } else {
    const digit1 = num.charAt(0);
    const digit2 = num.charAt(1);
    return `${tens[digit1]}${digit2 != 0 ? '-' + ones[digit2] : ''}`;
  }
}
*/
