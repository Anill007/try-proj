import { useState } from 'react';
import data, { dndData } from './data';

interface IPassageGroup {
  id: string;
  instructions: string;
  passage: {
    title: string;
    body: string;
  };
  sections: {
    title: string;
    instructions: string;
    questions: {
      id: string;
      type: string;
      question?: string | string[];
      correctAnswer: string | string[];
      headingList?: any[];
      texts?: any[];
    }[];
  }[];
}

function ReadingMain() {
  const readingModuleData: IPassageGroup[] = [data, dndData];
  const [currentPassage, setCurrentPassage] = useState(0);
  const [DNDType1, setDNDType1] = useState(dndData.sections[0].questions[0].headingList);
  const [DNDType1Ans, setDNDType1Ans] = useState([null, null, null, null, null, null, null]);
  const [currentDND, setCurrentDND] = useState<{
    sourceIndex: number;
    type: 'option' | 'answer';
  } | null>(null);

  function goToNextPassage() {
    setCurrentPassage((prev) => prev + 1);
  }

  function onDragStart(index: number, type: 'option' | 'answer') {
    setCurrentDND({ sourceIndex: index, type });
  }

  function onDragEnd() {
    setCurrentDND(null);
  }

  function onDropOptionContainer(e: any) {
    e.preventDefault();
    if (currentDND?.type === 'answer') {
      const answers = [...DNDType1Ans];
      const options = [...DNDType1];
      const answerValue = answers[currentDND.sourceIndex];

      // Add the answer value back to options and clear the answer slot
      if (answerValue) {
        options.push(answerValue);
        answers[currentDND.sourceIndex] = null;
        setDNDType1(options);
        setDNDType1Ans(answers);
      }
    }
    setCurrentDND(null);
  }

  function onDrop(e: any, targetIndex: number, targetType: 'answer') {
    e.preventDefault();
    if (currentDND) {
      const { sourceIndex, type: sourceType } = currentDND;
      const options = [...DNDType1];
      const answers = [...DNDType1Ans];

      // Option to Answer
      if (sourceType === 'option' && targetType === 'answer') {
        const temp = answers[targetIndex];
        answers[targetIndex] = options[sourceIndex];
        options[sourceIndex] = temp;
      }
      // Answer to Answer
      else if (sourceType === 'answer' && targetType === 'answer') {
        const temp = answers[targetIndex];
        answers[targetIndex] = answers[sourceIndex];
        answers[sourceIndex] = temp;
      }

      setDNDType1(options);
      setDNDType1Ans(answers);
      setCurrentDND(null);
    }
  }

  function allowDrop(e: any) {
    e.preventDefault();
  }

  return (
    <>
      <div className="instructions">
        {readingModuleData[currentPassage].instructions}
      </div>
      <div className="passage">
        <div className="title">{readingModuleData[currentPassage].passage.title}</div>
        <div className="body">{readingModuleData[currentPassage].passage.body}</div>
      </div>
      <br />
      <br />
      {readingModuleData[currentPassage].sections.map((section, index) => {
        return (
          <div className="sections" key={'ss' + index}>
            <div className="title">{section.title}</div>
            <div className="instructions">{section.instructions}</div>
            <hr />
            {section.questions.map((question, qIndex) => {
              if (question.type === 'single select') {
                return (
                  <div className="question-set" key={'q' + qIndex}>
                    <div className="question">{question.question}</div>
                    <input type="radio" name={question.id} value="true" id={question.id + 'true'} />
                    <label htmlFor={question.id + 'true'}>True</label>
                    <br />
                    <input type="radio" name={question.id} value="false" id={question.id + 'false'} />
                    <label htmlFor={question.id + 'false'}>False</label>
                    <br />
                    <input type="radio" name={question.id} value="not given" id={question.id + 'not given'} />
                    <label htmlFor={question.id + 'not given'}>Not given</label>
                    <br />
                  </div>
                );
              } else if (question.type === 'fill') {
                return (
                  <div className="question-set" key={'fff' + qIndex}>
                    {(question.question as string[]).map((q, index) => (
                      <span key={'zzz' + index}>
                        {q}
                        <input type="text" />
                      </span>
                    ))}
                  </div>
                );
              } else if (question.type === 'drag and drop passage') {
                return (
                  <div key={'dnd' + qIndex}>
                    {/* Options container */}
                    <div
                      className="option-container"
                      onDragOver={allowDrop}
                      onDrop={onDropOptionContainer}
                      style={{
                        minHeight: '50px',
                        border: '2px dashed #ccc',
                        padding: '10px',
                        marginBottom: '20px',
                      }}
                    >
                      {DNDType1.map((option, index) => (
                        option && (
                          <div
                            key={'option' + index}
                            draggable={true}
                            onDragStart={() => onDragStart(index, 'option')}
                            onDragEnd={onDragEnd}
                            style={{
                              backgroundColor: 'lightblue',
                              margin: '10px',
                              padding: '10px',
                              cursor: 'grab',
                            }}
                          >
                            {option}
                          </div>
                        )
                      ))}
                    </div>
                    {/* Answers container */}
                    <div className="answers-container" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                      {DNDType1Ans.map((answer, index) => (
                        <>
                        <div style={{display: 'flex'}}>
                          <span>{question?.texts && question?.texts[index][0]}</span>
                          <div
                            key={'answer' + index}
                            draggable={answer ? true : false}
                            onDragStart={() => onDragStart(index, 'answer')}
                            onDragEnd={onDragEnd}
                            onDrop={(e) => onDrop(e, index, 'answer')}
                            onDragOver={allowDrop}
                            style={{
                              backgroundColor: answer ? 'green' : 'lightgray',
                              width: '500px',
                              height: '50px',
                              display: 'inline-block',
                              cursor: answer ? 'grab' : 'default',
                            }}
                          >
                            {answer}
                          </div>
                          <span>{question?.texts && question?.texts[index][1]}</span>
                        </div>
                          <br />
                        </>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
            <hr />
          </div>
        );
      })}
      <br />
      <br />
      <button onClick={goToNextPassage}>Next Passage</button>
      <br />
      <br />
    </>
  );
}

export default ReadingMain;
