import { useState } from 'react';
import './reading-main.css'

function IeltsReadingMain() {
    let [currentQues, currentQuesState] = useState(0);
    let answersArray = [['am', 'are', 'is'], ['is', 'are', 'a'], ['it'], ['is', 'it']];
    let passageArray = [[`Voluptatum minima distinctioi 
    reiciendis aspernatur tempora 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci
    nobis consequatur, dolore harum`], [`Voluptatum 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci minima distinctioi 
    reiciendis aspernatur tempora 
    fugit iste inventor`], [`isci
    nobis consequatur, dolore harum`], [`Voluptatum 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci minima distinctioi 
    reiciendis aspernatur tempora 
    fugit iste inventore adipisci
    nobis consequatur, dolore harum
    asdasdas sadasda sadasd asdas 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipisci 
    fugit iste inventore adipiscid asdasd
     asdasd asdasd asdasd asdasd asdasda asdasd`]];
    let tableDataArray = [
        [[['1'], ['2'], ['I - a boy.'], ['4']], [['5'], ['6'], ['7'], ['8']], [['9'], ['They - going to school.'], ['She - not like me.'], ['12']], [['13'], ['14'], ['15'], ['']], [['17'], ['18'], ['19'], ['20']]],
        [[['This - a test'], ['2'], ['3333'], ['4444']], [['You - beautiful.'], ['66666'], ['7'], ['88888']], [['9999'], [''], ['Life is a race.'], ['12']], [['13'], ['14'], ['15'], ['I am not going']], [['17'], ['18'], ['19'], ['He is - wise man.']]],
        [[['1'], ['2'], ['33'], ['Take - easy.']], [['5'], ['6'], ['7'], ['8']], [['9'], ['55555'], ['asdad'], ['12']], [['13'], ['14'], ['15'], ['sadasd']], [['17'], ['18'], ['19'], ['20']]],
        [[['1'], ['2'], ['3333333'], ['4']], [['5'], ['6'], ['I think this - working.'], ['8']], [['keep - up folks.'], ['5'], ['543'], ['12']], [['13'], ['14'], ['15'], ['asdad']], [['17'], ['18'], ['19'], ['20']]]
    ]


    let answers: string[] = answersArray[currentQues];

    let [userAnswers, userAnswersState] = useState<string[]>(Array.from({ length: answers.length }, (_) => ''));
    let [showAnswerFlag, showAnswerFlagState] = useState(false);

    let passage = passageArray[currentQues];
    let tableData: any = tableDataArray[currentQues];
    let inputIndexCount = 0;

    function updateAnswers(index: number, value: string) {
        userAnswersState((prev) => {
            let updatedAnswers = [...prev];
            updatedAnswers[index] = value;
            return updatedAnswers;
        })
    }

    function increaseInputIndexCount() {
        inputIndexCount++;
    }

    function checkAnswer() {
        showAnswerFlagState(true);
    }

    function resetAnswer() {
        showAnswerFlagState(false);
        userAnswersState(Array.from({ length: answers.length }, (_) => ''));
    }

    function nextQues() {
        resetAnswer();
        currentQuesState(prev => {
            if (prev === 3) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    }

    return (
        <div className="reading-main-container">
            <div className="page-title">
            </div>
            <div className="page-body">
                <div className="passage-container">
                    {passage}
                </div>
                <div className="questions-container">
                    <table>
                        <tr>
                            <th colSpan={4}>Research Findings</th>
                        </tr>
                        {
                            tableData.map((row: any[]) => (
                                <tr>
                                    {row.map((data: any[]) => (
                                        <td>
                                            {data[0].includes("-") ? (
                                                <>
                                                    {data[0].split("-")[0]}
                                                    <input type="text" name={`${inputIndexCount}`} onChange={(e) => updateAnswers(Number(e.target.name), e.target.value)} value={userAnswers[inputIndexCount]} disabled={showAnswerFlag} />
                                                    {showAnswerFlag && (userAnswers[inputIndexCount] === answers[inputIndexCount]) ? <span>&#x2705;</span> : ''}
                                                    {showAnswerFlag && (userAnswers[inputIndexCount] !== answers[inputIndexCount]) ? <span>❌</span> : ''}
                                                    {data[0].split("-")[1]}
                                                    {increaseInputIndexCount()}
                                                </>
                                            ) : (
                                                data
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        }
                    </table>
                    <br />
                    <button onClick={checkAnswer} disabled={showAnswerFlag}>check answer</button>
                    <br />
                    <br />
                    <button onClick={resetAnswer}>reset answer</button>
                    <br />
                    <br />
                    {showAnswerFlag && <button onClick={nextQues}>next</button>}
                    <br />
                    <br />
                    {showAnswerFlag &&
                        answers.map((_, index) => {
                            return <div>{index + 1}: {_}</div>
                        })
                    }
                </div>
            </div>
            <div className="page-footer">
            </div>
        </div>
    )
}

export default IeltsReadingMain
