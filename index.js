parPosition = [];

$(document).ready(function () {
   $('#about, #portfolio, #info').each(function() 
     {
    parPosition.push($(this).offset().top);
        });
});

$("a").click(function() {
  $("header").css("display", "block");
});

$(document).scroll(function() {
  var div = $(this);
        if(div.scrollTop() == 0)
        {
          $("header").css("display","none");
        }
  else{
    $("header").css("display","block");
  }
  
  var position = $(document).scrollTop(),
                index;
            for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }

            $('nav ul li a')
               .removeClass('active')
               .eq(index)
               .addClass('active');
});


 