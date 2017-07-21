export function findQuizById(quizes, id) {
  return quizes.find(x => x.id === id);
}


export function getQuizIcon(quiz) {
  return quiz.icon;
}

export function getQuizTitle(quiz) {
  return quiz.title;
}


export function getQuestionCount(quiz) {
  return quiz.questions.length;
}

export function countPercentResult(result, questionCount) {
  return Math.round((result * 100) / questionCount);
}
