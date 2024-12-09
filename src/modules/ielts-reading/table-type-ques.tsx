
function TableTypeQues({tableData, showAnswerFlag, userAnswers, inputIndexCount, answers}) {

  return (
    <table >
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
  )
}

export default TableTypeQues
