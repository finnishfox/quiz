const initialState = {
  quizId: -1,
  quizes: []
};

export default function quizApp(state = initialState, action) {
  switch (action.type) {
    case 'SET_QUIZ_ID':
      return Object.assign({}, state, {
        quizId: action.quizId
      });

    case 'ADD_QUIZ':
      if (state.quizes.find(x => x.quizId === action.quizId)) {
        return Object.assign({}, state, {
          quizes: state.quizes.map((quiz) => {
            if (quiz.quizId === action.quizId) {
              return Object.assign({}, quiz, {
                result: 0
              })
            }
            return quiz;
          })
        });
      }
      return Object.assign({}, state, {
        quizes: [
          ...state.quizes,
          {
            quizId: action.quizId,
            result: action.result
          }
        ]
      });


    case 'SET_RESULT':
      return Object.assign({}, state, {
        quizes: state.quizes.map((quiz) => {
          if (quiz.quizId === action.quizId) {
            return Object.assign({}, quiz, {
              result: action.result
            })
          }
          return quiz;
        })
      });

    default:
      return state
  }
}