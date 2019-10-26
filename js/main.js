function validation() {
  var date = document.getElementById("day").Value;
  var yy = parseInt(day);
  var month = document.getElementById("month").value;
  var yy = parseInt(month);
  var year = document.getElementById("year").value;
  var yy = parseInt(year);
  var cc =(yy-1)/100+1;

  var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  // declaring arrays

        var maleAkan = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var femaleAkan = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        if (document.getElementById("gender").checked) {
          var gender = 'male';}

