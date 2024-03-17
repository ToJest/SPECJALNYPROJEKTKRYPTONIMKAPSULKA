function validate()
{
	var password=document.getElementById("password").value;
	if(password=="górą"||password=="Górą"||password=="góra"||password=="Góra"||password=="góry"||password=="Góry"){
		alert("✅ Gratuluję! Dlaczego ty jako detekyw nie robisz?!? Ja już trudniej nie potrafię 😂😂. GÓRY ⛰ To twoje marzenie 🎆, twoja odskocznia od świata 🌍, twoje drugie życie 💚, twoje poczucie się sobą 💪. Za mało? Ja jestem świadomy że więcej tego jeszcze nie rozumiem choć i tak piszę że to dla ciebie prawie jak Wszystko! A może to jest dla ciebie Wszystko? Ja tego nie wiem, ale wiem że to twoje. Nikt ci tego nigdy nie zabierze! 🔥 Niech tylko ktokolwiek spróbuje to jestem pewien że czeka go koniec. Szczerze? Dla mnie to też coś wyjątkowego, wyjątkowego ponieważ widzę ciebie na nich. 😍 Nic nigdy piękniejszego nie widziałem. ✨ Nic nigdy nie wymagało tego bym się tym podzielił ale to jest to co i ja w nich widzę. Widzę w nich ciebie, rozszaloną dziewczynę 🐤 która czeka tylko aż podejmnie kolejne wyzwanie! Czy ja nie za często piszę tego byś się nie zmieniała? Tym razem nie, ja wiem że to w tobie zostanie na zawsze!✅");
		return false;
	}
	else
	{
		alert("❌ Niestety, to nie jest poprawna odpowiedź. Próbuj dalej! ❌");
	}
}