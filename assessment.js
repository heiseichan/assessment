'user srtict';
const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided=document.getElementById('tweet-area');

/**
 * 指定した要素の子供をすべて削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}



assessmentButton.onclick=()=>{
    const userName = userNameInput.value;
    if (userName.length===0){
        return;
    }

    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided);

    const header = document.createElement('h3');
    header.innerText ='診断結果';
    resultDivided.appendChild(header);

    const paragraph =document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText=result;
    resultDivided.appendChild(paragraph);
    //TODO　ツイートエリアの作成
};

const answer=[
'{userName}のいいところは  aです。',
'{userName}のいいところは　bです。',
'{userName}のいいところは　cです。',
'{userName}のいいところは　dです。',
'{userName}のいいところは　eです。',
'{userName}のいいところは　fです。',
'{userName}のいいところは　aaです。',
'{userName}のいいところは　bbです。',
'{userName}のいいところは　ccです。',
'{userName}のいいところは　ddです。',
'{userName}のいいところは　eeです。',
'{userName}のいいところは　ffです。',
'{userName}のいいところは　aaaです。',
'{userName}のいいところは　bbbです。',
'{userName}のいいところは　cccです。',
'{userName}のいいところは　dddです。'
];

/**
 * 名前の文字を列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前  
 * @return {string} 診断結果
 */


 function assessment(userName){
     let sumOfCharCode=0;
     for(let i=0;i<userName.length;i++){
         sumOfCharCode=sumOfCharCode+userName.charCodeAt(i);
     }
         const index=sumOfCharCode%answer.length;
         let result=answer[index];
         result=result.replace(/\{userName\}/g,userName);
     return result;
}

console.assert(
    assessment('太郎')==='太郎のいいところは　お前「です。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません'
)
