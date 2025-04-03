'use strict'

let gElCanvas
let gCtx

function init() {
    showEditor() // change when done working on editor
    gElCanvas = document.querySelector('.meme-editor-canvas')
    gCtx = gElCanvas.getContext('2d')
}
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


// function drawImg2(src) {
//     const elImg = new Image()
//     elImg.src = src
//     gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
// }

function onSelectImg(btn) {
    const imgSrc = $(btn).find("img").attr("src")
    const elImg = new Image()
    elImg.src = imgSrc
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}