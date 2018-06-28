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
