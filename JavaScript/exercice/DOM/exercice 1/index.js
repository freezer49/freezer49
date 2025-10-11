let hasSubscribed = false;
const subscribeButton = document.querySelector('#newsletter');

// on écoute l'évènement clique sur le bouton subscribe
subscribeButton.addEventListener('click', () => {
	// on inverse la valeur de la variable
	hasSubscribed = !hasSubscribed;
	// on change la valeur du texte
	if (hasSubscribed) {
		subscribeButton.innerText = 'Unsubscribe';
	} else {
		subscribeButton.innerText = 'Subscribe';
	}
});