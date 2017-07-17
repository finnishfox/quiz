export function setQuizId(quizId) {

  return {
    type: 'SET_QUIZ_ID',
    quizId,
  }

}

export function addQuiz(id) {

  return {
    type: 'ADD_QUIZ',
    quizId: id,
    result: 0
  }

}


export function setResult(id,result) {

  return {
    type: 'SET_RESULT',
    quizId: id,
    result: result
  }

}