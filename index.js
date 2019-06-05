function canBuildNote(magazine, note) {
  let magazineHistogram = buildHistogram(magazine)
  for (const char of note) {
    if (char !== " ") {
      if (magazineHistogram[char] === undefined) {
        return false
      } else if (magazineHistogram[char] === 0) {
        return false
      } else {
        magazineHistogram[char]--
      }
    }
  }
  return true
}

function buildHistogram(magazine) {
    let magazineHistogram = {}
    for (let i = 0; i < magazine.length; i++) {
      if (magazineHistogram[magazine[i]] === undefined) {
        magazineHistogram[magazine[i]] = 1
      } else {
        magazineHistogram[magazine[i]]++
      }
    }
    return magazineHistogram
}
