console.log('JS');

let clickNumber = 0;

$(document).ready(readyNow);

function readyNow(){
    $('#generate-btn').on('click',createDiv);
    $('.divField').on('click','.swap', changeColor);
    $('.divField').on('click','.delete', deleteDiv);
}

function createDiv(){
    let newDiv = $('<div class="newDiv redHighLight"></div>');
    $('.divField').append(newDiv);
    newDiv.append('<button class="swap">swap</button><button class="delete">delete</button>');
    numberTrack()
}

function numberTrack(){
    clickNumber++;
    $('#numberCount').text('#' + clickNumber);
    
}

function changeColor(){
    if($(this).hasClass('redHighLight')){
        $(this).removeClass('redHighLight');
        $(this).addClass('yellowHighLight');
    }else if($(this).hasClass('yellowHighLight')){
        $(this).removeClass('yellowHighLight');
        $(this).addClass('redHighLight');
    }
}

function deleteDiv(){
    $(this).parent().remove();
}