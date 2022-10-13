$( document ).ready(function() {
    $(".carousel-item > img").addClass("rounded img-fluid");
    $(".nav-link").addClass("fs-5");
    $(".login-btn").addClass("fs-5");
    $(".form-group").addClass("my-4");

    var inputRegex = {
        nameRegex: "^\\w+\\s\\w+$",
        emailAddressRegex: "^[a-zA-Z0-9]+@\\w+.\\w{1,3}$",
        phoneNumberRegex: "^\\d{3}-\\d{3}-\\d{4}$",
        address1Regex: "^\\d{1,} [a-zA-Z0-9\\s]+$",
        address2Regex: "^[a-zA-Z0-9-#\\s]*$"
    }
    var form = document.getElementById("subscribe-form");
    form.reset();
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false);
    if($("#subscribe-form").length){

        
        $.each(inputRegex, (key, value) =>{
            var currInputId = key.substring(0,key.indexOf("Regex"));
            var $inputElement = $(`#${currInputId}`);
            $inputElement.attr("required", "required");
            $inputElement.attr("pattern", value);
        });
    }

    $("input[name='subscriptionType']").on("input", (event)=>{
        
        var subType = event.target.value.trim();
        var $selectInput = $("#membershipPlanSelect");
        $selectInput.attr("required", "required");
        $selectInput.empty();
        if(subType === "individual"){
            $selectInput.append(`<option selected disabled value="">Choose a plan</option>`);
            $selectInput.append("<option>Bronze</option>");
            $selectInput.append("<option>Silver</option>");
            $selectInput.append("<option>Gold</option>");
            $selectInput.append("<option>Platinum</option>");
        }
        else{
            $selectInput.append(`<option selected disabled value="">Choose a plan</option>`);
            $selectInput.append("<option>Basic</option>");
            $selectInput.append("<option>Premium</option>");
        }
        $selectInput.parent().css("display", "block");
    });
    

    $(".corporate-button").on("click", (event)=>{
        $(".corporate-toast").toast("show");
    });
    
});