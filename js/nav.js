$(function(){

	$(".btn").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("nav").slideDown(300);
		$(".XX").on("click", CLOSECLOSE );
	}
	
	function CLOSECLOSE(){
		$("nav").slideUp(300);
		$(".XX").off("click");
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("nav").attr("style","");
		}
	}
	
});
	
	