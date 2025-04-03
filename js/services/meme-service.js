'use strict'

let gElCanvas
let gCtx
const topTextInput = document.getElementById("top-text");
const bottomTextInput = document.getElementById("bottom-text");

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function init() {
    showEditor() // change when done working on editor
    gElCanvas = document.querySelector('.meme-editor-canvas')
    gCtx = gElCanvas.getContext('2d')
}

function getMeme() {
    return gMeme
}

function drawImg(btn) {
    const imgSrc = $(btn).find("img").attr("src")
    const elImg = new Image()
    elImg.src = imgSrc
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function drawText({ offsetX, offsetY }) {
    const elTextInput = document.querySelector('.meme-text')
    const text = elTextInput.value || 'Hello!'
    gCtx.lineWidth = 1
    // gCtx.strokeStyle = 'black'
    // gCtx.fillStyle = 'black'
    gCtx.font = '20px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fontSize = '300px'
    gCtx.fillText(text, offsetX, offsetY)
    gCtx.strokeText(text, offsetX, offsetY)
}
