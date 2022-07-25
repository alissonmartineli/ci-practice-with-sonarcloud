import { mathOperations } from "./calculator";

const args = process.argv.slice(2)

if (args.length !== 3) {
  console.log("Usage: node index.js <operation> <a> <b>")
  process.exit(1)
}

const [operationString, ...rest] = args

if (!(operationString in mathOperations)) {
  console.log("Unknown operation:", operationString)
  process.exit(1)
}

const [a, b] = rest.map(Number)

if (isNaN(a) || isNaN(b)) {
  console.log("Arguments must be numbers")
  process.exit(1)
}

const operation = operationString as keyof typeof mathOperations
const result = mathOperations[operation](+a, +b)

process.stdout.write(`${a} ${operation} ${b} = ${result}\n`)
process.exit(0)
