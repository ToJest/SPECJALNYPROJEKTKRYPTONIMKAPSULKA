function validate()
{
	var password=document.getElementById("password").value;
	if(password=="taniec"||password=="Taniec"||password=="Tańcem"||password=="tańcem"){
		alert("✅ Gratuluję! Po raz kolejy rozwiązałaś zagadkę! Ta powie ci coś co myślę o tobie 😁. TANIEC! Ty wiedziałaś że śmigasz jak szalona na parkiecie? Wiem, to żadne odkrycie ale powiem ci co ja myślałem o twoim tańcu z początku. Dla mnie to było totalnie dziwne, nie sądziłem że ktoś może być aż tak roztańczony jak ty i z początku tego nierozumiałem tak teraz myślę że masz do tego TALENT!😂 Ty po prostu masz talent do czucia się swobodnie tam gdzie tego trzeba.😊 Myślę że to on napełnia twoje bateryjki. Cieszę się że cię taką poznałem, już z samego początku roztańczoną. 🥰 Mam ogromną nadzieję że to w tobie nigdy nie zgaśnie 🔥✅");
		return false;
	}
	else
	{
		alert("❌ Niestety, to nie jest poprawna odpowiedź. Próbuj dalej! ❌");
	}
}