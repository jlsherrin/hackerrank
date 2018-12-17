process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function mod(x, y) {return x % y;}
function mod5(y) {return mod(y,5);}
function shouldRound(n) {return mod5(n) > 2;}
function lessThan(x,n) {return n < x;}
function lessThan40(n) {return lessThan(40, n);}
function roundUp(x) {return Math.ceil(x/5)*5;}

function roundGrade(grade) {
  return shouldRound(grade) && !lessThan40(roundUp(grade)) ? roundUp(grade) : grade
}

function solve(grades){
    // Complete this function
    return grades.map(function(grade) {
      return roundGrade(grade)
    })
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));



}
