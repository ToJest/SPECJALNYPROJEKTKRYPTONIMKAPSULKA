function validate()
{
	var password=document.getElementById("password").value;
	if(password=="jeziorem"||password=="Jeziorem"||password=="jezioro"||password=="Jezioro"||password=="piasecznym"||password=="Piasecznym"||password=="piaseczno"||password=="Piaseczno"){
		alert("✅ Gratuluję! Udało ci się rozwiązać zagadkę! Ta dotyczy mojego ulbionego miejsca 🌅. Piaseczno. Wiesz dlaczego tak je uwielbiam 😁? Tam były wspaniałe chwile mojego życia🧡💛💛. Pamiętam kilka wypraw nad jezioro z moimi rodzicami ale też i tam miałem swoje ukojenie w sprawie Pauliny. Tam my mieliśmy swoją pierwszą przedrandkę 😏 a żeby tego było mało. W chwili kiedy z tobą tam byłem usłyszałem swój ulubiony utwór którego może i ty nie doceniłaś ale mi się serce rozkroiło. Gratuluję raz jeszcze że aż tutaj dotarłaś i życzę ci powodzenia przy następnych wyzwaniach!✅");
		
		return false;
	}
	else
	{
		alert("❌ Niestety, to nie jest poprawna odpowiedź. Próbuj dalej! ❌");
	}
}