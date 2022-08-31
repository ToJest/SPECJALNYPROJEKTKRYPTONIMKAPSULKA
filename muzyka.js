function validate()
{
	var password=document.getElementById("password").value;
	if(password=="gitara"||password=="Gitara"){
		alert("✅ Gratuluję! Udało ci się rozwiązać zagadkę! Ta dotyczyła mojego ulubionego utworu 😊. Puszczałem ci go kilka razy a teraz taką cenę musiałaś zapłacić by się dowiedzieć 😂. Jest to: 🤍 Lord Huron - Noc w którą się poznaliśmy 🤍. Wiem że go nie raz słyszałaś. Jest z nią związana pewna historia której też prędko się nie dowiesz 😝. Czuj się wygrana i tym razem postaraj się zapamiętać 😎. Miłego dnia 😘 ✅");
		
		return false;
	}
	else
	{
		alert("❌ Niestety, to nie jest poprawna odpowiedź. Próbuj dalej! ❌");
	}
}