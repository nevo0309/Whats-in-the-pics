'use strict'
var gQuest = createQuests()
var gCurrQuestIdx

function initGame() {
  gCurrQuestIdx = 0
  renderQuest()
  var elH2header = document.querySelector('h2')
  elH2header.style.display = 'none'
  var elImg = document.querySelector('img')
  elImg.style.display = 'block'
}

function createQuests() {
  return [
    { id: 1, opts: ['cat', 'dog', 'horse'], correctOptIndex: 0 },
    { id: 2, opts: ['horse', 'fish', 'sheep'], correctOptIndex: 0 },
    { id: 3, opts: ['cat', 'dog', 'fish'], correctOptIndex: 1 },
    { id: 4, opts: ['dog', 'fish', 'sheep'], correctOptIndex: 2 },
    { id: 5, opts: ['cat', 'fish', 'horse'], correctOptIndex: 1 },
  ]
}

function renderQuest() {
  var strHTML = ''
  var currQuest = gQuest[gCurrQuestIdx]
  document.querySelector('img').src = `photos/${currQuest.id}.jpeg`
  for (var i = 0; i < currQuest.opts.length; i++) {
    var optionAnswer = currQuest.opts[i]
    strHTML += `<button class="button${i}" onclick="checkAnswer(${i})">${optionAnswer}</button>`
  }
  document.querySelector('.btn').innerHTML = strHTML
}
function checkAnswer(optIdx) {
  var strHTML = ''
  var currQuest = gQuest[gCurrQuestIdx]
  var elButton = document.querySelectorAll('.btn button')
  if (optIdx === currQuest.correctOptIndex) {
    elButton[optIdx].style.backgroundColor = 'green'
    gCurrQuestIdx++
  } else {
    elButton[optIdx].style.backgroundColor = 'red'
  }
  if (gCurrQuestIdx < gQuest.length) {
    setTimeout(function () {
      renderQuest()
    }, 500)
  }
  if (gCurrQuestIdx === gQuest.length) {
    var elH2header = document.querySelector('h2')
    elH2header.style.display = 'block'
    var elImg = document.querySelector('img')
    elImg.style.display = 'none'
    var elBtn = document.querySelector('.btn')
    elBtn.innerHTML = `<button class="resetGame" onclick="resetGame()">Reset Game</button>`
    elBtn.style.fontSize = '50px'
  }
}

function resetGame() {
  gCurrQuestIdx = 0
  initGame()
}
