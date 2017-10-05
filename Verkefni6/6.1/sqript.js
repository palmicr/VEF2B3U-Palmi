document.getElementsByTagName("div")[0].setAttribute("class", "active");
//*****************************************************************************
var re = document.getElementsByTagName("div")[2];
re.remove();
//*****************************************************************************
var rp = document.getElementsByTagName("div")[1];
var text = rp.firstChild.nodeValue;
text = text.replace("Gunnar","Jakob");
rp.firstChild.nodeValue = text;
//*****************************************************************************
/*
.innerHTML: Leifir þér að ná í og update'a element'ið sem string. Það er hraðara 
			en að nota "Dom Manipulation" þegar þú ert að breita miklu á síðunni.
			En ætti ekki að vera notað þegar við erum að vinna með user bætt efni
			eins og username og text content því það getur verið öriggis vandamál
			að færa upplisingar milli síða.

Dom manipulation:	Er notað með að hafa methods til að ná í, búa til og update'a
					elements innan í text node's .Er frábært þegar þú ert að breyta 
					einu elementi frá DOM tré með mikið af siblings. En þegar þú ert 
					að breyta miklu á síðunni gétur það verið meiri kóði og hægara en
					"innerHTML". 		 

*/