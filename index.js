function canBuildNote(magazine, note) {
  let magazineHistogram = buildHistogram(magazine)
  for (const char of note) {
    if (magazineHistogram[char] === undefined || magazineHistogram[char] === 0) {
      return false
    } else {
      magazineHistogram[char]--
    }
  }
  return true
}

function buildHistogram(magazine) {
  let histogram = new Object()
  for (const letter of magazine) {
    if (histogram[letter] === undefined) {
      histogram[letter] = 1
    } else {
      histogram[letter]++
    }
  }
  return histogram
}
