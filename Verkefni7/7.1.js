/*
	*1 Það eru til þrjár leiðir að binda event við element, hver þeirra leiða er best og af hverju? ()
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

	*2	Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi. ()
		CallBack: Er function sem sem keyrir aðra functon. JavaScript virkar með að keyra
		línu eftir línu. Án callback functon myndi kóðin halda áfram án þess að functonið væri buið.
		Callback bíður eftir að það er búið að hlaða og síðan keyrir hann í gang.

	*3	Hvað er EventLoop? Úrskýrðu með eigin orðum. ()
		EventLoop er röðinn á aðgerðum vefsins. 

	*4	Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa) ()
		function checkUsername() {
		var target = e.target;
		}
		var el = document.getElementById('username');
		el.addEventListener('blur', function(){checkUsername(5);}, false);

	*5	Event flow, Hvað þýðir false í Event Listener? ()
		Defult er Event listener false. Þegar það er false byrjar það með ysta taginu og 
		vinnur sér niðir. Þegar það er trú byrjar aðgerðinn innst og vinnur sig upp.

	*6 	Hvað gera eftirfarandi aðferðir? Komdu með dæmi um notkun ()
			(a. stopPropagation()
			(b. preventDefault()

			a) Stoppar elementið að "bubbla"
			b) Kemur í veg fyrir default hegðun elemntins ef það er hægt. 
