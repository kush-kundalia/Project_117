let date = new Date()
let display_date = "Date:" + date.toLocaleDateString()

$(document).ready(function(){
    $("#display_date").html(display_date)
    $('#save_button').prop('disabled', true);



    //  write an event, when Submit button is clicked
    $('button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('').val()

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            //  type of web request
            type : '',
            url : "/predicted-emotion",
            //  Data to be sent in JSON format
            data : JSON.stringify(),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){
                $("#sentiment").html(result.data.predicted_emo)
                $("#emoji").attr('src', result.data.predicted_emo_img_url);
                $('#sentiment').css("display", "");
                $('#emoji').css("display", "");
                predicted_emo = result.data.predicted_emo
               
            

            },

            //  if any error, run this function
            error : function(result){
                alert(result.responseJSON.message)
                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})