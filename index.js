function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var newLine = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < line.length; i++) {
     newLine.push(`${i + 1}. ${line[i]}`)
    }
    return `The line is currently: ${newLine.join(", ")}`
  }
}
