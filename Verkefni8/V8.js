/* Verkefni 8 --- Pálmi C. Rúnarsson

		*************************************************************
	*	1.Hver er munurinn á for, forEach, for-in og for-of lykkjum?
			\-> For-loop endurtekur "condition'ið" þar til því er 
				breytt í false. Default er loopið set á true svo
				hún hættir ekki fyrir en breytt í false. Getur 
				"declare'að" fall.
			\->	forEach endurtekur sig fyrir hvern array element.
				Hann framkvæmir callback fyrir hvern array lið
				og tekur að sér 3 arguments(value,index og array'ið).
			\-> for-in er notað til að skila nöfn og fjölda fallana
				í objectinu. Loopið tekur að sér object'ið og object 
				nafnið til að skila listanum.
			\-> for-of er frekar líkt "in" en skilar array values'in.
		*************************************************************
		2.Gerðu eitthvað nytsamlegt með eftirfarandi kóðabút:
			
			var	divs = document.getElementsByTagName('div');	
			for	(var i = 0, div; div	= divs[i]; i++){		
					
			}
		*************************************************************
		3.Hvað er template literals? Komdu með kóðasýnidæmi ásamt skýringum
/*