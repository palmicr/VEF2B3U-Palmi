/*
7.1	: 	3 leiðir til að binda event við element.
	********************************************************* 
	*	HTML Event Handlers -> 	Eru ekki í notkun.			*
	
		<html>
		<body>

			<h1 onclick="changeText(this)">Click Me!</h1>

			<script>
				function changeText(id) { 
	    			id.innerHTML = "You Did it";
				}
			</script>
		</body>
		</html>

	*********************************************************
	*	DOM Event Handlers 	->	Er betra en HTML 			*
								event handlers því			*
								það leifir þér aðverð 		*
								skilgreina milli			*
								JavaScript og HTML.			*
	<html>
		<body>
			
			<h1>Click Me!</h1>

		<script>
			var Euser = document.getElementsByTagName("h1");
			
			function changeText() { 
				Euser.textContent = "You did it";
			}
			
			Esuer.onclick = changeText;
		</script>

		</body>
	</html>

    *********************************************************
	*	DOM Level 2 event 									*
		Listeners 			->	Er bæting fyrir DOM			*
								sem er núna vinsælast		*
								til að vinna með events.	*
								Þessi aðverð er best því 	*
								hún gétur triggerað mörg	*
								functions í einu. Sem 		*
								kemur í veg fyrir að það 	*
								sé vandamál að vera með 	*
								2 eða fleyri scripts á		*
								einari síðu					*
		
	<html>
		<body>
			
			<h1>Click Me!</h1>

		<script>
			var Euser = document.getElementsByTagName("h1");
			function changeText(id) { 
	    		Euser.textContent = "You did it";
			}	
			Esuer.addEventListener('click',changeText, false);
		</script>

		</body>
	</html>

	*********************************************************