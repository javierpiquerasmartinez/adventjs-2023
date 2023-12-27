
function optimizeIntervals(intervals) {
  let sortedIntervals = intervals.sort(((a, b) => a[0] - b[0]))
  for(let i = 1; i < sortedIntervals.length; i++){
    if(sortedIntervals[i][0] > sortedIntervals[i-1][1]) continue
    if(sortedIntervals[i][0] < sortedIntervals[i-1][1] 
        && sortedIntervals[i][1] <= sortedIntervals[i-1][1]){
      sortedIntervals[i] = sortedIntervals[i-1]
      sortedIntervals[i-1] = null
      continue
    }
    sortedIntervals[i][0] = sortedIntervals[i-1][0]
    sortedIntervals[i-1] = null
  }
  sortedIntervals = sortedIntervals.filter(x => x!==null)
  return [...sortedIntervals]
}

module.exports = optimizeIntervals