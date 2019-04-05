function buildHistogram(magazine) {
  return magazine.reduce((histogram, c) => {
    histogram[c] = histogram[c] ? histogram[c] + 1 : 1
    return histogram;
  }, {});
}

// function buildHistogram(magazine) {
//   const histogram = {};
//   for (const c of magazine) {
//     if (c in histogram)
//       histogram[c]++;
//     else
//       histogram[c] = 1;
//   }
//   return histogram;
// }

function canBuildNote(magazine, note) {
  const histogram = buildHistogram(magazine);
  for (const c of note.split('')) {
    if (c in histogram && histogram[c] > 0)
      histogram[c]--;
    else
      return false;
  }
  return true;
}