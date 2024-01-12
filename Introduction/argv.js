const mission = process.argv[2]

function argv() {
  if (mission === "learn") return `I love to ${mission}`
  return `The current mission is ${mission}`
}

console.log(argv())
