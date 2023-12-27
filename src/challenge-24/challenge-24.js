
function getStaircasePaths(steps, maxJump) {
  const result = []

	function jumpHelper(currentPath, remainingSteps) {
		if (remainingSteps === 0) {
			result.push(currentPath.slice())
			return
		}

		for (let jump = 1; jump <= maxJump && jump <= remainingSteps; jump++) {
			currentPath.push(jump)
			jumpHelper(currentPath, remainingSteps - jump)
			currentPath.pop()
		}
	}

	jumpHelper([], steps)
	return result
}

module.exports = getStaircasePaths