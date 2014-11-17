// Javascript Code.
$(document).ready(function(){



$(document).ready(function(){
$(".p").click(function(){
$(".div1").load("_posts/2014-11-09-cognits-frontend-blog.md").fadeIn("slow");
$(".atras").fadeIn ("slow");		
$("#messages").fadeIn("slow");
		 $(".div2").load("_posts/2014-11-14-cognits-frontend-blog.md").fadeOut("slow");
		  $(".div3").load("_posts/Post2.md").fadeOut("slow");
		  $(".div4").load("_posts/Post3.md").fadeOut("slow");
			$(".two").fadeOut("slow");
			$(".three").fadeOut("slow");
			$(".four").fadeOut("slow");
			

});


	$(".two").click(function(){
		 $(".div2").load("_posts/2014-11-14-cognits-frontend-blog.md").fadeIn("slow");
		$("#messages2").fadeIn("slow");
		$(".atras").fadeIn ("slow");
		 $(".div1").load("_posts/2014-11-09-cognits-frontend-blog.md").fadeOut("slow");
		 $(".div3").load("_posts/Post2.md").fadeOut("slow");
		   $(".div4").load("_posts/Post3.md").fadeOut("slow");
		   $(".three").fadeOut("slow")
			$(".four").fadeOut("slow")
			$(".p").fadeOut("slow")

  });

	$(".three").click(function(){
		 $(".div3").load("_posts/Post2.md").fadeIn("slow");
		 $("#messages3").fadeIn("slow");
		 $(".atras").fadeIn ("slow");
		  $(".div1").load("_posts/2014-11-09-cognits-frontend-blog.md").fadeOut("slow");
		  $(".div4").load("_posts/Post3.md").fadeOut("slow");
		  $(".div2").load("_posts/2014-11-14-cognits-frontend-blog.md").fadeOut("slow");
		  $(".p").fadeOut("slow")
		  $(".two").fadeOut("slow")
		  $(".four").fadeOut("slow")

  });


$(".four").click(function(){
		 $(".div4").load("_posts/Post3.md").fadeIn("slow");
		 $("#messages4").fadeIn("slow");
		 $(".atras").fadeIn ("slow");
		  $(".div1").load("_posts/2014-11-09-cognits-frontend-blog.md").fadeOut("slow");
		 $(".div2").load("_posts/2014-11-14-cognits-frontend-blog.md").fadeOut("slow");
		 $(".div3").load("_posts/2014-11-09-cognits-frontend-blog.md").fadeOut("slow");
		  $(".p").fadeOut("slow")
		  $(".two").fadeOut("slow")
		  $(".three").fadeOut("slow")
	  });
	
	});

//  comentarios 

 $('button').click(function() {
    	var toAddName = $("input[ name=nombrePost1]").val();
    	var toAddComment = $("input[ name=comentarioPost1]").val();
        $('#messages').append("<p>"+"User  "+toAddName+ "<br/>"+"Coment: "+ toAddComment+"</p>");
        $("input").val ("") 
    });

  $('.bpost2').click(function() {
    	var toAddName2 = $("input[ name=nombrePost2]").val();
    	var toAddComment2 = $("input[ name=comentarioPost2]").val();
        $('#messages2').append("<p>"+"User  "+toAddName2+ "<br/>"+"Coment: "+ toAddComment2+"</p>");
        $("input").val ("") 
    });
$('.bpost3').click(function() {
    	var toAddName3 = $("input[ name=nombrePost3]").val();
    	var toAddComment3 = $("input[ name=comentarioPost3]").val();
        $('#messages3').append("<p>"+"User  "+toAddName3+ "<br/>"+"Coment: "+ toAddComment3+"</p>");
        $("input").val ("") 
    });
$('.bpost4').click(function() {
    	var toAddName4 = $("input[ name=nombrePost4]").val();
    	var toAddComment4 = $("input[ name=comentarioPost4]").val();
        $('#messages4').append("<p>"+"User  "+toAddName4+ "<br/>"+"Coment: "+ toAddComment4+"</p>");
        $("input").val ("") 
    });



//buttom Search 
$.expr[':'].icontains = function(obj, index, meta, stack){
        return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
        };
     
     
        $(document).ready(function(){    
       
            $('#buscador').keyup(function(){
       
                         buscar = $(this).val();
                         $('.all p').removeClass('resaltar');
             
                                if(jQuery.trim(buscar) != ''){
                                   
                                   $(".all p:icontains('" + buscar + "')").addClass('resaltar');
                                 
                                }
       
       
                });
        });
	
$(document).ready(function() {
	$('.buscador').hide();
    $('.buscar').click(function() {
        $('.buscador').show();

	});
	$('.titulo').click(function() {
		$('.buscador').hide();

		$('resaltar').hide();
    });
		$('.home').click(function() {
		$('.buscador').hide();

		$('resaltar').hide();
    });
	$('.barnner').click(function() {
		$('.buscador').hide();

		$('resaltar').hide();
    });

$('.p').click(function() {
		$('.buscador').hide();

		$('resaltar').hide();
    });

});
});