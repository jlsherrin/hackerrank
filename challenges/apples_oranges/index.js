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

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var calculatePosition = (distance, start) => start + distance
    var didHitTheHouse = (n) => {
      //console.log(`${s} <= ${n} <= ${t}`, s <= n && n <= t)
      return s <= n && n <= t
    }
    var getScore = (accumulator, value) => {
      //console.log(`s ${s} - t ${t}, value ${value}, ${didHitTheHouse(value)}`)
      return didHitTheHouse(value) ? ++accumulator : accumulator
    }

    // Complete this function
    apples = apples.map((apple) => calculatePosition(apple, a))
    oranges = oranges.map((orange) => calculatePosition(orange, b))
    //console.log(`apples ${apples}\noranges ${oranges}`)
    var appleScore = apples.reduce(getScore, 0)
    var orangeScore = oranges.reduce(getScore, 0)

    console.log(appleScore)
    console.log(orangeScore)
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);

    countApplesAndOranges(s, t, a, b, apple, orange);

}
