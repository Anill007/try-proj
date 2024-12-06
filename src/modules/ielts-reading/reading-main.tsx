import { useState } from 'react';
import './reading-main.css'

function IeltsReadingMain() {
    let answers: string[] = ['am', 'are', 'Life', 'wow'];
    let showAnswer = false;

    let [userAnswers, userAnswersState] = useState<string[]>(Array.from({ length: answers.length }, (_) => ''));
    let [showAnswerFlag, showAnswerFlagState] = useState(false);

    let passage = `
    Voluptatum minima distinctio veniam reprehenderit quibusdam nam cupiditate consequuntur delectus alias? Vero laudantium laborum fuga cumque, excepturi laboriosam nisi amet dolores quibusdam, iusto dolorum qui veniam natus, asperiores iure labore.
    Esse perferendis earum porro quas mollitia, nostrum ducimus delectus. Totam tempore accusantium doloribus, aliquid blanditiis sed, cum laudantium atque similique explicabo earum doloremque dolores deserunt amet eius hic nam sit.
    Blanditiis itaque fugit quas aliquam reiciendis iste impedit voluptatum hic fuga provident molestias reprehenderit ea, aut qui similique corrupti dolorum rem. Mollitia quisquam ex pariatur ea quis praesentium suscipit illum?
    Non laborum quibusdam aperiam perferendis suscipit cupiditate accusamus. Vero iusto doloremque est et mollitia a corrupti, ratione accusamus, unde recusandae perferendis fugit porro vel praesentium vitae ipsam, possimus quia exercitationem.
    Totam mollitia incidunt nesciunt quisquam voluptatibus dolore distinctio id, fugiat impedit iure maxime natus velit explicabo fugit fuga molestias ullam. Quia et natus, nisi tempora libero odio incidunt modi totam.
    Veniam, maiores. Laborum enim nobis blanditiis tempore nam distinctio quasi repellat? Odit et harum, soluta aliquid non ea aperiam voluptas perspiciatis? Qui officiis aliquid maiores eveniet modi tempore sequi recusandae!
    Distinctio ad soluta illum mollitia cupiditate sed rem esse, facilis ullam, totam doloribus voluptatem odio. Animi soluta, voluptatum molestias provident architecto ut sint quisquam recusandae voluptatibus blanditiis porro ipsa doloribus?
    Enim officiis suscipit saepe doloribus autem! Praesentium ea fuga ducimus perferendis nemo quam exercitationem! Dolorem optio corporis recusandae ipsa sunt accusantium iusto rerum eos et, nihil, id repellat iure asperiores?
    Corporis velit cumque necessitatibus quae aperiam repellat, et quia mollitia, saepe, nisi voluptas. Enim doloremque eos dolor ullam iusto fuga aliquam maiores vel magnam, facere, voluptas recusandae. Distinctio, veritatis odio!
    Ducimus voluptate voluptatem aliquam, error repellendus maiores fugit saepe nostrum eaque corporis ut. Nisi ducimus temporibus cumque illum? Mollitia consequuntur incidunt necessitatibus aspernatur cum, magnam quidem inventore exercitationem ipsum animi!
    Aperiam amet officiis dolorem tempora voluptates fuga veniam atque culpa dolore commodi aspernatur explicabo mollitia alias odio accusantium, eius ab quibusdam consequatur rerum officia esse laboriosam hic. Itaque, voluptatem cupiditate.
    Labore iure animi inventore ullam dignissimos unde quis facilis, delectus recusandae? Obcaecati eos saepe, assumenda rerum alias sit cupiditate magnam adipisci fuga aut nostrum voluptas eveniet omnis atque beatae modi?
    Libero harum assumenda explicabo rem nesciunt. At vitae nostrum consectetur, voluptas nemo qui reiciendis dolorum minus. Ex, ducimus odit blanditiis cupiditate veritatis quam ea hic amet maxime culpa, soluta veniam!
    Enim, quidem! Aliquam, atque? Ea vitae dolores, voluptate natus fugiat iste rem, qui error, aspernatur animi odio quia veritatis necessitatibus. Iure amet molestias obcaecati officia sunt repellendus qui commodi dolore.
    Esse rerum id deserunt provident! Ratione, consequatur rem? Illum cum tempore, voluptatibus est totam, explicabo temporibus quos nisi fugiat cumque sunt, laborum ipsam quae? Asperiores dolore ipsam animi perspiciatis totam!
    Facilis eaque pariatur ipsa temporibus aliquam animi ullam iste quidem itaque enim natus dolorum nobis quos, explicabo magnam dignissimos soluta quam! Saepe ab vel delectus sit, aliquid quam velit suscipit!
    Laudantium cupiditate libero velit ea corporis minus cumque odio repudiandae consectetur minima. Ut eius officiis quisquam repellendus possimus porro accusantium illum rem, atque, accusamus odio tempora quibusdam praesentium illo qui.
    Facere aliquid excepturi minima repudiandae praesentium, deleniti in tempora corrupti. Temporibus mollitia cumque unde reprehenderit quos consectetur, in dolores sequi soluta voluptatum iste fugiat suscipit rem, aspernatur magni asperiores aliquam.
    Vel ratione doloremque voluptas optio nisi reiciendis aspernatur tempora fugit iste inventore adipisci perferendis reprehenderit voluptatum aliquam quasi illo nobis consequatur, dolore harum obcaecati minus ullam quo consequuntur! Enim, autem.`;
    let tableData: any = [[['1'], ['2'], ['I - a boy.'], ['4']], [['5'], ['6'], ['7'], ['8']], [['9'], ['They - going to school.'], ['- is a race.'], ['12']], [['13'], ['14'], ['15'], ['- xiii']], [['17'], ['18'], ['19'], ['20']]]

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
                    {showAnswerFlag &&
                        answers.map((_, index) => {
                            return <div>{index + 1}: {_}</div>
                        })
                    }
                </div>
            </div>
            <div className="page-footer">
                <button>next</button>
            </div>
        </div>
    )
}

export default IeltsReadingMain
