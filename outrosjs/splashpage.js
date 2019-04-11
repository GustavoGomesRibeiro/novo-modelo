/*==================================================== versao 1 ==============================================================*/

(function(){
	var load = document.getElementById("load");
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame(){
		if (loading == 100) {
			clearInterval(id);
			window.open("Contato.html", "_self");
			}else{
				loading = loading + 1;
				if(loading == 90){
					load.style.animation = "fadeout 1s ease";
				}
			}

		}
	})();

