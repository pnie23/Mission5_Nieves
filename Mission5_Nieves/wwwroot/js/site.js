$('#btnCalculate').click(function () {
	// Show loading animation
	$('#loading').show();

	// Select input fields
	var hours = $('#coachHours').val();
	var hourlyPrice = $('#coachCost').val();

	// Calculate total cost
	var totalCost = hours * hourlyPrice;

	// Update total cost output field
	totalCost = (totalCost.toFixed(2)); // Format to 2 decimal places
	$("#costEstimate").text('$' + totalCost);
});
