$('#send').click(function () {
    //load up variables
    var assignment = $('#assignment').val();
    var quiz = $('#quiz').val();
    var group = $('#group').val();
    var intex = $('#intex').val();
    var midterm = $('#midterm').val();
    var final = $('#final').val();

    var letterGrade = ''
    var finalGrade = 0.00;


    //Add the assignment grade
    finalGrade = 50.00 * ((parseFloat(assignment)) / 100.00);

    //add quiz grade
    finalGrade = finalGrade + (10.00 * ((parseFloat(quiz)) / 100.00));

    //add group grade
    finalGrade = finalGrade + (10.00 * ((parseFloat(group)) / 100.00));

    //add intex grade
    finalGrade = finalGrade + (10.00 * ((parseFloat(intex)) / 100.00));

    //add midterm grade
    finalGrade = finalGrade + (10.00 * ((parseFloat(midterm)) / 100.00));

    //add midterm grade
    finalGrade = finalGrade + (10.00 * ((parseFloat(final)) / 100.00));

    //Find out what the letter grade is according to the percentage
    if (finalGrade >= 94.00) {
        letterGrade = 'A';;
    }
    else if (finalGrade >= 90.00) {
        letterGrade = 'A-';
    }
    else if (finalGrade >= 87.00) {
        letterGrade = 'B+';
    }
    else if (finalGrade >= 84.00) {
        letterGrade = 'B';
    }
    else if (finalGrade >= 80.00) {
        letterGrade = 'B-';
    }
    else if (finalGrade >= 77.00) {
        letterGrade = 'C+';
    }
    else if (finalGrade >= 74.00) {
        letterGrade = 'C';
    }
    else if (finalGrade >= 70.00) {
        letterGrade = 'C-';
    }
    else if (finalGrade >= 67.00) {
        letterGrade = 'D+';
    }
    else if (finalGrade >= 64.00) {
        letterGrade = 'D';
    }
    else if (finalGrade >= 60.00) {
        letterGrade = 'D-';
    }
    else {
        letterGrade = 'E';
    }

    //Output the result
    $('#output').text(String(finalGrade) + '%, ' + letterGrade);
        
})  
