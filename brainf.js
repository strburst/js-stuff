function printState(instructions, registers, instrPtr, regPtr) {
  function repeat(str, n) {
    return Array(n + 1).join(str);
  }

  // var instrStr = instructions.join('');
  instrStr = instructions;
  var regStr = registers.join('');
  var instrPtrStr = repeat(' ', instrPtr - 1);
  var regPtrStr = repeat(' ', regPtr - 1);

  console.log(instrStr);
  console.log(instrPtrStr);
  console.log(regStr);
  console.log(regPtrStr);
}

var instructions = process.argv[2] || [];
var registers = [0];
var input = process.argv[3] ? process.argv[3].split('').map(function (elem) {
  return elem.charCodeAt(0);
}) : [];

var instrPtr = 0;
var regPtr = 0;
var inputPtr = 0;

printState(instructions, registers, instrPtr, regPtr);

var accum = 0;
while (instrPtr < instructions.length) {
  var currInstr = instructions[instrPtr];

  if (currInstr == '+') {
    registers[regPtr]++;
  } else if (currInstr == '-') {
    registers[regPtr]--;
  } else if (currInstr == '>') {
    regPtr++;
    if (regPtr == registers.length) {
      registers.push(0);
    }
  } else if (currInstr == '<') {
    if (regPtr == 0) {
      registers.unshift(0);
    } else {
      regPtr--;
    }
  } else if (currInstr == '.') {
    process.stdout.write(String.fromCharCode(registers[regPtr]));
  } else if (currInstr == ',') {
    registers[regPtr] = input[inputPtr];
    inputPtr++;
  } else if (currInstr == '[' && registers[regPtr] == 0) {
    instrPtr++;
    while (instructions[instrPtr] != ']') {
      instrPtr++;
    }
    instrPtr++;
  } else if (currInstr == ']' && registers[regPtr] != 0) {
    while (instructions[instrPtr] != '[') {
      instrPtr--;
    }
  }

  instrPtr++;
  accum++;
  printState(instructions, registers, instrPtr, regPtr);
  if (accum > 5000) break;
}

console.log();
console.log(registers);
