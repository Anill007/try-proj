import { useState } from 'react';
import './reading-main.css'

function IeltsReadingMain() {
    let selectedElementForDrag = null;
    let quesTypeArray = [1, 1, 1, 1, 2];
    let [currentQues, currentQuesState] = useState(1);
    let answersArray = [['am', 'are', 'is'], ['is', 'are', 'a'], ['it'], ['is', 'it'], ['I have', 'my', 'missed', 'over',]];
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
     asdasd asdasd asdasd asdasd asdasda asdasd`], [`Voluptatum 
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
        [[['1'], ['2'], ['3333333'], ['4']], [['5'], ['6'], ['I think this - working.'], ['8']], [['keep - up folks.'], ['5'], ['543'], ['12']], [['13'], ['14'], ['15'], ['asdad']], [['17'], ['18'], ['19'], ['20']]],
        `akjdhajsk @@ ajkshdjkasd jkashdjasds kjajds @@ smabd @@nmad.`]


    let answers: string[] = answersArray[currentQues];
    let forDnd = [[`missed more than 9,000 shots in`],[`career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and`],[`I've failed`],[`and over and over again in my life. And that is why I succeed`]]

    let [userAnswers, userAnswersState] = useState<string[]>(Array.from({ length: answers.length }, (_) => ''));
    let [showAnswerFlag, showAnswerFlagState] = useState(false);

    let passage = passageArray[currentQues];
    let tableData: any = tableDataArray[currentQues];
    let quesType = quesTypeArray[currentQues];
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
            if (prev === 4) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    }

    let [blanks, blanksState] = useState([[null, null, null, null], ['over', 'my', 'missed', 'I have',]]);
    let grabbedIndex = null;
    let toReplace = null;

    function handleDrop(e, index) {
        toReplace = index;
        if (e.target.getAttribute('data-el-type') === 'd') {
            return;
        }
        blanksState((prev) => {
            let a = prev[0];
            let b = prev[1];
            let t = a[toReplace];
            a[toReplace] = b[grabbedIndex];
            if (t !== null) {
                b[grabbedIndex] = t;
            } else {
                b.splice(grabbedIndex, 1)
            }
            console.log(a, b)
            return [a, b]
        })
    }

    function handleDropOpp(e, index) {
        toReplace = null;
        if (e.target.getAttribute('data-el-type') === 'd') {
            return;
        }
        blanksState((prev) => {
            let a = prev[0];
            let b = prev[1];
            b = [...b, a[grabbedIndex]];
            a[grabbedIndex] = null;
            return [a, b]
        })
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrag(e, index = null) {
        console.log(index, 'grabbed')
        if (index !== null) {
            grabbedIndex = index;
        }
        console.log(grabbedIndex, 'grabbed set')
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
                    {
                        (quesType === 1) ? <table >
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
                        </table> :
                            <>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {/* {Array.from({ length: (tableData as string).split('@@').length }, (_) => '').map((data, index) => {
                                        return <>
                                            {index ? <span data-container='blanks' style={{ display: 'flex', width: '100px', height: '30px', background: 'gray' }} onDrop={(e) => handleDrop(e)} onDragOver={(e) => handleDragOver(e)}></span> : null}
                                            <span style={{ whiteSpace: 'nowrap' }}>{(tableData as string).split('@@')[index]}</span>
                                        </>
                                    })} */}

                                    {
                                        blanks[0].map((data, index) => {
                                            return <>
                                            {<span data-container='blanks' style={{ display: 'flex', width: '100px', height: '30px', background: 'gray' }} onDrop={(e) => handleDrop(e, index)} onDragOver={(e) => handleDragOver(e)}>
                                                <span draggable="true" onDrag={(e) => handleDrag(e, index)} style={{ background: 'green' }}>{blanks[0][index]}</span>
                                                </span>}
                                                {showAnswerFlag && (blanks[0][index] === answers[index]) ? <span>&#x2705;</span> : ''}
                                                        {showAnswerFlag && (blanks[0][index] !== answers[index]) ? <span>❌</span> : ''}
                                            <span style={{ whiteSpace: 'nowrap' }}>{forDnd[index]}</span>
                                        </>
                                        })
                                    }
                                    <br />
                                    <br />
                                    <br />
                                    Options:
                                </div>
                                <div data-container="answers" style={{ width: '100%', background: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: '100px' }} onDrop={(e) => handleDropOpp(e)} onDragOver={(e) => handleDragOver(e)}>
                                    {/* {answersArray[currentQues].map((ans, index) => (
                                        <span data-el-type="d" draggable="true" style={{ background: 'red', padding: '0 24px' }} onDrag={(e) => handleDrag(e)} onDrop={(e) => handleDrop(e, index)}>{ans}</span>
                                    ))} */}
                                    {
                                        blanks[1].map((data, index) => (
                                        <span data-el-type="d" draggable="true" style={{ background: 'red', padding: '0 24px' }} onDrag={(e) => handleDrag(e, index)} onDrop={(e) => handleDrop(e, index)}>{data}</span>
                                        ))
                                    }
                                </div>
                            </>

                    }
                    <br />
                    {/* {(quesType === 1) ? <TableTypeQues></TableTypeQues> : <DnDTypeQues></DnDTypeQues>} */}
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
