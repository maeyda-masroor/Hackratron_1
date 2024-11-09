$(document).ready(function() {
    // Add new item
    $('#addItem').click(function() {
        var newItem = `
            <div class="form-group repeater-item">
                <div class="row">
                    <div class="col-md-5">
                        <input type="text" name="skillname[]" class="input-field" placeholder="Name">
                    </div>
                    <div class="col-md-5">
                        <input type="number" name="rating[]" class="input-field" placeholder="Qty">
                    </div>
                    <div class="col-md-2">
                        <button style="margin-top: 25px; padding: 10px 20px;font-size: 1.2em;cursor: pointer;
                        background-color: hotpink;border: none;border-radius: 25px; width: 300px; height: 50px;
                      "type="button" class="btn btn-danger remove-item">Remove</button>
                    </div>
                </div>
            </div>
        `;
        $('#repeaterContainer').append(newItem);
    });

    // Remove item
    $(document).on('click', '.remove-item', function() {
        $(this).closest('.repeater-item').remove();
    });
    $('#addEducation').click(function() {
        var newItem = `
        <div class="form-group repeater-item">
        <div class="row full-width">
                <input type="text" name="in_name[]"class="input-field education" placeholder="Input covering 5 rows">
        </div>
        <div class="row half-width">
            <input type="text" name="degree[]"class="input-field" placeholder="Input 6.1">
            <input type="text" name="year[]" class="input-field" placeholder="Input 6.2">
        </div> 
        <div class="row half-width">
           <button type="button" class="btn btn-danger remove-item"  style="margin-top: 25px; padding: 10px 20px;font-size: 1.2em;cursor: pointer;
                background-color: hotpink;border: none;border-radius: 25px; width: 300px; height: 50px;
            ">Remove</button>
        </div>         
        </div>
        `;
        $('#repeaterContainer1').append(newItem);
    });
    // Remove item
    $(document).on('click', '.remove-item', function() {
        $(this).closest('.repeater-item').remove();
    });

    $('#addEx').click(function() {
        var newItem = `
        <div id="repeaterContainer2">
                    <div class="form-group repeater-item">    
                <div class="row full-width">
                  <input type="text" name="job[]" class="input-field" placeholder="Input covering 5 rows">
                </div>
              
                <div class="row half-width">
                  <input type="text" class="input-field" name="location[]" placeholder="Input 6.1">
                  <input type="text" class="input-field" name="date[]" placeholder="Input 6.2">
                </div>
                <div class="row full-width">
                  <textarea class="textarea-field" rows="3" placeholder="Textarea below row 7" name="description[]"></textarea>
                </div>  
                <div class="row half-width">
                    <button type="button" class="btn btn-danger remove-item"  style="margin-top: 25px; padding: 10px 20px;font-size: 1.2em;cursor: pointer;
                         background-color: hotpink;border: none;border-radius: 25px; width: 300px; height: 50px;
                     ">Remove</button>              
              </div> 
              <div>
        `;
        $('#repeaterContainer2').append(newItem);
    });
    // Remove item
    $(document).on('click', '.remove-item', function() {
        $(this).closest('.repeater-item').remove();
    });
    // Form submission
    $('#repeaterForm').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        console.log('Form Data:', formData);
 
    });
});