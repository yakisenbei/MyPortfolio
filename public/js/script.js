var idList = ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11', 'l12', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18']; // idの順番を維持
var elements = {
  'l1': 'A terminal on html\nType "help", "copyright", "credits" or "license" for more information.', 
  'l2': '>', 
  'l3': 'Hello',
  'l4': '[normal@terminal /home]$',
  'l5': 'ls',
  'l6': 'documents downloads pictures videos',
  'l7': '[normal@terminal /home]$',
  'l8': 'cd documents',
  'l9': '[normal@terminal /home/documents]$',
  'l10': 'ls',
  'l11': 'MyPortfolio',
  'l12': '[normal@terminal /home/documents]$',
  'l13': 'source MyPortfolio',
  'l14': 'Starting ...',
  'l15': '.',
  'l16': '..',
  'l17': '...',
  'l18': 'Wellcome, Stranger.',
  'who1': 'Who am I?',
  'who2': 'I am a Japanese high school student who is working hard every day to become an engineer who can create whatever comes to his mind without any inconvenience!',
  'who3': '私は、思いついたものを不自由なく作れるエンジニアになれるよう、日々奔走する日本の高校生です。',
  'homeButton': 'Home',
  'myworkButton': 'My Work',
  'whoButton': 'Who am I?',
  'techButton': 'Technologies',
  'myname': 'Tomoya Gunji / 郡司 知弥',
  'technologies1': 'Technologies',
  'Python': 'Python',
  'Discord': 'Discord.py',
  'Javascript': 'Javascript',
  'HTML': 'HTML',
  'CSS': 'CSS',
  'Flutter': 'Flutter',
  'date': 'Date: 2025/2/22',
  'engd': 'Eng_Description: I created this portfolio.',
  'jpd': 'Jp_Description: このポートフォリオを作りました。',
  'image': 'Image:',
};
var page = ['', 'who']; // page配列を初期化


window.onload = function(){
  tipeText(idList, 20, 100);
}

function tipeText(ids, txSp, dly) {
  let count = 0; // ローカル変数に変更
  let txCount = []; // txCountをローカル変数に変更
  kamikakushi(ids);
  countSet(ids, txCount, txSp, dly); // txCountを引数として渡す
  processText(ids, count, txCount, txSp, dly); // txCountを引数として渡す
}

function countSet(ids, txCount){ // 文字数カウントの初期設定
  for(let n=0; n<ids.length; n++){
    txCount[n] = 0; // ローカル変数を使用
  }
}

function kamikakushi(ids){ //
  for(let i=0; i<ids.length; i++){
    let el = document.getElementById(ids[i]); // 要素を取得
    if (el) {
      el.textContent = ''; // 初期状態を空にする
    }
  }
}

function processText(ids, count, txCount, txSp, dly){ // countとtxCountを引数として受け取る
  if (count >= ids.length && ids[count - 1] == 'l18') {
    showPortfolioGUI();
    return;
  }
  let el = document.getElementById(ids[count]);
  if (el.classList.contains("lineAct")) {
    el.textContent = elements[ids[count]];
    count++;
    setTimeout(() => processText(ids, count, txCount, txSp, dly), (count <= 14 ? dly : 300)); // txCountを引数として渡す
  } else {
    displayCharacter(ids, count, txCount, txSp, dly); // txCountを引数として渡す
  }
}

function displayCharacter(ids, count, txCount, txSp, dly){ // countとtxCountを引数として受け取る
  let el = document.getElementById(ids[count]);
  // 現在のテキストにアンダースコアを追加
  el.textContent = elements[ids[count]].substr(0, txCount[count]) + '|';

  if(txCount[count] < elements[ids[count]].length){ 
    txCount[count]++;
    setTimeout(() => displayCharacter(ids, count, txCount, txSp, dly), txSp); // txCountを引数として渡す
  }else{
    // 最後の文字が表示されたらアンダースコアを削除
    el.textContent = elements[ids[count]];
    count++;
    setTimeout(() => processText(ids, count, txCount, txSp, dly), dly); // txCountを引数として渡す
  }
}

function showPortfolioGUI() {
  // fakeScreen内のすべての文字を削除
  idList.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.remove(); // 要素自体を削除s
    }
  });

  const el = document.getElementById('brElem');
  if (el) {
    el.remove();
  };

  // ポートフォリオGUIを表示
  const containers = document.querySelectorAll('#portfolioContainer'); // 同じIDを持つ要素を全て取得
  containers.forEach(container => { // 各要素に対して処理を実行
    container.style.display = 'block'; // ポートフォリオGUIを表示
  });
  tipeText(['homeButton'], 100);
  tipeText(['myworkButton'], 100);
}

document.getElementById('homeButton').addEventListener('click', function() {
  if (page[0] == 'home') return;
  document.getElementById('homeSection').style.display = 'flex';
  document.getElementById('firstColumn').style.display = 'block';
  document.getElementById('myworkSection').style.display = 'none';
  tipeText(['whoButton'], 30);
  tipeText(['techButton'], 30);
  if (page[1] == 'who') {
    tipeText(['who1'], 70);
    tipeText(['myname'], 50);
    tipeText(['who2'], 5);
    tipeText(['who3'], 10);
  } 
  if (page[1] == 'tech') {
    tipeText(['technologies1'], 50);
    tipeText(['Python'], 50);
    tipeText(['Discord'], 40);
    tipeText(['Javascript'], 30);
    tipeText(['HTML'], 70);
    tipeText(['CSS'], 100);
    tipeText(['Flutter'], 50);
  };
  page[0] = 'home'

});

/*homecontentの中身共*/

document.getElementById('whoButton').addEventListener('click', function() {
  if (page[1] === 'who') return; // 厳密等価演算子を使用
  document.getElementById('Who').style.display = 'block';
  document.getElementById('Technologies').style.display = 'none';
  tipeText(['who1'], 70);
  tipeText(['myname'], 50);
  tipeText(['who2'], 5);
  tipeText(['who3'], 10);
  page[1] = 'who';
});

document.getElementById('techButton').addEventListener('click', function() {
  if (page[1] == 'tech') return;
  document.getElementById('Who').style.display = 'none';
  document.getElementById('Technologies').style.display = 'block';
  tipeText(['technologies1'], 50);
  tipeText(['Python'], 50);
  tipeText(['Discord'], 40);
  tipeText(['Javascript'], 30);
  tipeText(['HTML'], 70);
  tipeText(['CSS'], 100);
  tipeText(['Flutter'], 50);
  page[1] = 'tech'
})

document.getElementById('myworkButton').addEventListener('click', function() {
  if (page[0] == 'mywork') return;
  document.getElementById('homeSection').style.display = 'none';
  document.getElementById('firstColumn').style.display = 'none';
  document.getElementById('myworkSection').style.display = 'block';
  tipeText(['image'], 80);
  tipeText(['date'], 70);
  tipeText(['engd'], 40);
  tipeText(['jpd'], 50);
  page[0] = 'mywork'
});