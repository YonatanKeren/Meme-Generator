'use strict'

const input = $('.text-box-selector')
const output = $('.meme-text-top')
console.log(input)
console.log(output)

$(document).ready(function() {
    input.on('input', function() {
        output.val($(this).val());
    });
});