// When size is submitted by the user, call makeGrid()
$(document).ready(function(){

    $('#sizePicker').submit(function (event) {
        event.preventDefault();
        makeGrid();        
    
    });
    
    // function to create dynamic grid
    function makeGrid() {

        // clear existing rows
        $('#pixelCanvas').children().remove();
        //$('tr').remove(); 
    
        let height = $('#inputHeight').val();
        let width = $('#inputWeight').val();
    
        // create table rows and assign dynamic ids for each row created
        for (let i = 1; i <=height; i++) {
            $('#pixelCanvas').append('<tr id=cell' + i + '></tr>');

            // for the selected row, add as many table cells
            for (let j = 1; j <=width; j++) {
                $('#cell' + i).append('<td></td>');
            }
        }

        // function to paint cell with selected color 
        $('td').click(function addColor() {
            let color = $('#colorPicker').val();
        
            if ($(this).attr('style')) {
                $(this).removeAttr('style')
            } else {
                $(this).attr('style', 'background-color:' + color);
            }
        });
       
    }

});


/*
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    //console.log('height: ' + height + ' and width: ' + width);
})


function makeGrid(x, y) {
    $('tr').remove(); 

    // Your code goes here!
    for (var i = 1; i <=x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <=y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    // add color to cell
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}*/


/*
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Various selectors assigned to variables
let inputColor, inputHeight, inputWeight, pixelCanvas, sizePicker, resetButton;
inputColor = $( "#colorPicker" );
pixelCanvas = $( "#pixelCanvas" );
resetButton = $( "input:reset" );


//function to build the grid

function makeGrid() {
  inputHeight = $( "#inputHeight" ).val();
  inputWeight = $( "#inputWeight" ).val();
  pixelCanvas.children().remove();
  for ( let row = 0; row < inputHeight; row++ ){
    pixelCanvas.append( "<tr></tr>" );
  }
  let gridRows = $( "tr" );
  for ( let column = 0; column < inputWeight; column++ ){
      gridRows.append( "<td></td>" );
  }

 let cell = pixelCanvas.find( "td" );


// event listener to paint our canvas with selected color and also remove a painted cell in case of mistake.

cell.click( function () {

    let colorValue = $( "#colorPicker" ).val();

    if ( $( this ).attr("bgcolor") ){
      $( this ).removeAttr("bgcolor");
    }else{
      $( this ).attr("bgcolor", colorValue);
    }
});

}

//event listener to graw our canvas based of number of rows and columns inputs./

$( "#sizePicker" ).submit( function( event ) {
event.preventDefault();
makeGrid();
});

// Event listener to set our canvas layout to new or prevent

resetButton.click( function () {
pixelCanvas.children().remove();
});*/