'use strict'

$(init) 
$('.gallery-btn').click(showGallery)
$('.memes-btn').click(showMemeStorage)
$('.editor-btn').click(showEditor)
$('.template-btn').click(showEditor)
$('.template-btn').click(function () {
        renderMeme(this)
    })



function showGallery(){
    $('.gallery-grid-container').show()
    $('.meme-storage').hide()
    $('.meme-editor').hide()
}

function showMemeStorage(){
    $('.meme-storage').show()
    $('.gallery-grid-container').hide()
    $('.meme-editor').hide()
}

function showEditor(){
    $('.meme-storage').hide()
    $('.gallery-grid-container').hide()
    $('.meme-editor').show()
}

function renderMeme(img) {
    drawImg(img)
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderMeme)
}