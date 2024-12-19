
Ontwerp en maak een interactieve website voor een opdrachtgever.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->
RedPers website met een interactieve element 

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Deze sprint heb ik de homepage een dark theme interactie gegeven zodat eindgebruikers bij voorkeur de website een donkere thema kunnen geven zodat ze bijv. minder last van hun ogen krijgen. dat ziet er als volgt uit: 
<img src="assets/light dark theme design.png"> 

hoe het werkt is als volgt: 
<img src="assets/dark mode button.png">
wanneer de website in light mode staat zie je links bovenin een feed-forward of te wel de website is nu in light-mode maar als je op de knop klikt krijg je dark mode als feedback dat kun je dus weten doordat er al dark mode staat op de button voordat de website uberhaupt in dark mode is staat 
<img src="assets/light mode button.png">
hetzelfde gebeurd ook wanneer de website in dark mode staat dan krijg je alvast een feed forward dat als je op de button klikt je dan light mode terug krijgt als feedback

<!-- Voeg een mooie poster visual toe 📸 -->
<img src="assets/white theme.png">
<img src="assets/dark theme.png">
<!-- Voeg een link toe naar Github Pages 🌐-->
https://mikiyas-hs.github.io/fix-the-flow-interactive-website/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
Html: 
Ik heb een knop met het id="darkModeToggle" toegevoegd hierdoor kan je als eindgebruiker steeds switchen van light mode naar dark mode 

Css:
Wanneer je de website in dark mode hebt gezet krijgt de body de kleurwaarden die woorden aangegeven in de class .dark-mode

JavaScript:
1. local storage controleert of de dark mode aan staat als dat het geval is dan word .dark-mode class toegevoegd

2. De event Listener schakelt de dark mode knop aan en uit hierdoor word darkmode of toegepast op de website of niet 

de tekst op de knop veranderd naar light of dark mode door de darkModeToggle.textContent aan de hand van hoe de eindgebruiker de website heeft staan 

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

