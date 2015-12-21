var array = {};
var currentPositon = 0;

$(document).ready(function(){
    getData();
    $('.next').on('click', function(){
        var lastPos = array.people.length;
        $('#person' + currentPositon).hide();
        currentPositon++;
        $('#person' + currentPositon).show();
        if(currentPositon == (lastPos)){
            currentPositon = 0;
            $('#person0').show();
        }
        //console.log(lastPos);
    })

    $('.prev').on('click', function(){
        $('#person' + currentPositon).hide();
        currentPositon --;
        $('#person' + currentPositon).show();
        if( currentPositon ==(-1)){

            currentPositon = ((array.people.length)-1);

            $('#person' + (currentPositon)).show();
        }

        console.log(currentPositon);
    })

});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data){
            array = data;
            console.log(data);
            addToDom(data);
        }
    });
}

function addToDom(data){
    for(var i = 0; i < data.people.length; i++){
        $('#peopleContainer').append('<div class = "pplContainer" id = "person' + i + '"  data-personNumber="' + i + '" data-person="yes"></div>');
        var $el = $('#peopleContainer').children().last().hide();
        $el.append('<p>Name: ' + data.people[i].name + '</p>');
        $el.append('<p>Location: ' + data.people[i].location + '</p>');
        $el.append('<p>Spirit Animal: ' + data.people[i].animal + '</p>');
    }

    $('#person0').show();
}

