$(document).ready(function () {
	$('.select2').select2({
		width: '100%'
	});

//// Init ////////////
	$dropdown = $("#secondsSelect");
	for (let i = 1; i < 60; i++) {
		$dropdown.append($("<option />").val(i).text(i));
	}
	$dropdown = $("#minSelect");
	for (let i = 1; i < 60; i++) {
		$dropdown.append($("<option />").val(i).text(i));
	}
	$dropdown = $("#hoursSelect");
	for (let i = 1; i < 24; i++) {
		$dropdown.append($("<option />").val(i).text(i));
	}
	$dropdown = $("#dayOfMonthSelect");
	for (let i = 1; i < 32; i++) {
		$dropdown.append($("<option />").val(i).text(i));
	}
//// Init End ////////////

	$('.select2').on('select2:select', function (e) {
		let value = e.params.data.id;
		let prevValue = $(this).val().length > 0 ? $(this).val()[0] : null;
		if (value != parseInt(value)) {
			$(this).val(value).change();
		} else if (prevValue != parseInt(prevValue)) {
			$(this).val(value).change();
		}
		calculateSpringCron();
	});
	let r = function (dropdown) {
		return dropdown.val().join(",");
	}

	let calculateSpringCron = function () {
		let result = [
			r($("#secondsSelect")),
			r($("#minSelect")),
			r($("#hoursSelect")),
			r($("#dayOfMonthSelect")),
			r($("#monthsSelect")),
			r($("#weekdaySelect")),
		];
		$("#result").val(result.join(" "));
		$("#result-expand").html(result.join(" &nbsp; &nbsp;"))
	}
	calculateSpringCron();
});