'use strict'

function renderMeme() {
    // renders meme
}

$('.gallery-btn').click(showGallery)
$('.memes-btn').click(showMemeStorage)


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