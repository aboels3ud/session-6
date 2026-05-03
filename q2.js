// ===== Session 06 - Exercise 2: Grade Calculator =====

function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid score";
  } else if (score >= 90) {
    return "A - Excellent";
  } else if (score >= 80) {
    return "B - Very Good";
  } else if (score >= 70) {
    return "C - Good";
  } else if (score >= 60) {
    return "D - Acceptable";
  } else {
    return "F - Fail";
  }
}

// Tests
const scores = [95, 82, 73, 61, 55, 100, -5, 110];

scores.forEach(function (score) {
  console.log(`Score: ${score} → Grade: ${getGrade(score)}`);
});
