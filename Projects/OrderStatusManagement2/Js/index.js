
const executeOrder = () => {
	
	let orderId = document.getElementById('order-id-input').value
	document.getElementById('order-id-input').value = ''
	
	if(orderId.length > 2){
	createOrderCard(orderId)
	document.getElementById(orderId).innerText = 'OrderPlaced'

	chefReceived(orderId)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderId).innerText = 'Pizzza Delivered')
		.catch((err) => console.log(err))
}else{
	alert("Please enter valid Order Id")
}
}


