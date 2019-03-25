function project() {
	var projectName = document.getElementById('projectName').value;
	var projectd = document.getElementById('proDescription').value;
	var proDate = document.getElementById('Date').value;

	localStorage.setItem('projectName',projectName);
	localStorage.setItem('proDescription',projectd);
	localStorage.setItem('Date',proDate);

}



function work() {
	var workName = document.getElementById('workName').value;
	var workd = document.getElementById('workDescription').value;
	var workDate = document.getElementById('workDate').value;

	localStorage.setItem('workName',workName);
	localStorage.setItem('workDescription',workd);
	localStorage.setItem('workDate',workDate);
}
function clean(){


    confirm('This action will going to clear projects details you stored;  Do u want to continue?');

	localStorage.removeItem('projectName');
	localStorage.removeItem('proDescription');
	localStorage.removeItem('Date');

}
function cleared(){


    confirm('This action will going to clear projects details you stored;  Do u want to continue?');

	localStorage.removeItem('workName');
	localStorage.removeItem('workDescription');
	localStorage.removeItem('workDate');

}
