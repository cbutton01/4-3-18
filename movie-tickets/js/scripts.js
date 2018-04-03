function Movie (name) {
  this.name = name;
  this.times = [];
}

function Ticket (name, time, age, release) {
  this.name = name;
  this.time = time;
  this.age = age;
  this.release = release;
}

function Movietime (time){
  if (time >= 8 && time <= 15) {
    return  '0' + time + '00' + ' ' + 'matinee showing';
  } else if (time > 15 && time <= 22){
    return time + '00' + ' ' + 'standard showing';
  } else if (time > 22 && time <= 24){
    return time '00' + ' ' + 'night owl showing';
  } else {
    return 'that is not a valid movie time';
  }
}

var redDawn = new Movie('Red Dawn')
var homeAlone = new Movie('Home Alone')
var bladeRunner = new Movie('BladeRunner')

var firstShowing = new Movietime(8);
