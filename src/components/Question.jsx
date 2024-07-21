import Option from './Option';

export default function Question({ dispatch, question, answer }) {
    return (
        <div>
            <h4>{question.questions}</h4>
            <Option
                question={question}
                dispatch={dispatch}
                answer={answer}
            />
        </div>
    )
}