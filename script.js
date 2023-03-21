function calculate() {

  let height = +document.getElementById("in_height").value,
    weight = +document.getElementById("in_weight").value,
    age = +document.getElementById("in_age").value,
    gender = document.getElementsByName("in_sex"),
    strUser = document.getElementById("in_activity").value,
    hashUser = document.getElementById("gain_loss").value,



    result = document.getElementsByClassName("result"),
    calc = "",
    calc15 = "",
    calc25 = "",
    calc40 = "",
    calc45 = "",
    calc50 = "",
    calc55 = "",
    d_rst = document.getElementsByClassName("rst");

  if (isNaN(height) || height < 1 || height > 250 || isNaN(weight) || weight < 1 || weight > 250 || isNaN(age) || age < 1 || age > 150) {
    alert("Invalid Input!");gain
  } else {
    if (gender[0].checked) {
      calc = (10 * weight + 6.25 * height - 5 * age + 5) * strUser;
    } else {
      calc = (10 * weight + 6.25 * height - 5 * age - 161) * strUser;
    }


    
    if (hashUser == 12) {
      d_rst[0].style.display = "block";
      result[0].innerHTML =
  
        calc

      calc15 = calc - 250;
      result[1].innerHTML =
        "Weight Gain"
      "To gain weight 0.25kg/week: " +
        "<b>to " +
        calc15 +
        " Kcal.</b>";

      calc25 = calc - 500;
      result[2].innerHTML =
        "For weight loss in the fast mode, reduce the consumption rate: " +
        "<b>to " +
        calc25 +
        " Kcal.</b>";

      calc40 = calc - 1000;
      result[3].innerHTML =
        "For weight loss in emergency mode, reduce the consumption rate: " +
        "<b>to " +
        calc40 +
        " Kcal.</b>";


      document.write("<div style='font-size:25px'>Info for weight loss-</div><br>")

      document.write("<table  border='1' width='400' cellspacing='0' >")
      document.write("<tr>")
      document.write("<td>Maintain weight</td>")
      document.write("<td>" + calc + " kcal/day</td>")
      document.write("</tr>")
      document.write("<tr>")
      document.write("<td>Mild weight loss <div  style='color:#888'>(0.25kg/week) </div></td>")
      document.write("<td>" + calc15 + " kcal/day</td>")
      document.write("</tr>")
      document.write("<tr>")
      document.write("<td>Weight loss <div  style='color:#888'>(0.5kg/week)</div></td>")
      document.write("<td>" + calc25 + " kcal/day</td>")
      document.write("</tr>")
      document.write("<tr>")
      document.write("<td>Fast weight loss <div  style='color:#888'>(1kg/week)</div></td>")
      document.write("<td>" + calc40 + " kcal/day</td>")
      document.write("</tr>")

      document.write("</tabel>")
    }




    else{

      calc45 = calc + 250;
      result[1].innerHTML =
        "For weight loss in emergency mode, reduce the consumption rate: " +
        "<b>to " +
        calc45 +
        " Kcal.</b>";

      calc50 = calc + 500;
      result[2].innerHTML =
        "For weight loss in emergency mode, reduce the consumption rate: " +
        "<b>to " +
        calc50 +
        " Kcal.</b>";

      calc55 = calc + 1000;
      result[3].innerHTML =
        "For weight loss in emergency mode, reduce the consumption rate: " +
        "<b>to " +
        calc55 +
        " Kcal.</b>"

      document.write("<div style='font-size:25px'>Info for weight gain-</div><br>")

      document.write("<table border='1' width='350' cellspacing='0'>")
      document.write("<tr>")
      document.write("<td>Maintain weight</td>")
      document.write("<td>" + calc + " kcal/day</td>")
      document.write("</tr>")
      document.write("<tr>")
      document.write("<td>Mild weight gain <div  style='color:#888'>(0.25kg/week) </div></td>")
      document.write("<td>" + calc45+ " kcal/day</td>")
      document.write("</tr>")

      document.write("<tr>")
      document.write("<td>Weight gain <div  style='color:#888'>(0.5kg/week)</div></td>")
      document.write("<td>" + calc50+ " kcal/day</td>")
      document.write("</tr>")
      document.write("<tr>")
      document.write("<td>Fast weight gain <div  style='color:#888'>(1kg/week)</div></td>")
      document.write("<td>" + calc55 + " kcal/day</td>")
      document.write("</tr>")
      document.write("</tabel>")


    }
   
  }

}

$(document).ready(function(){
$("#DairyproductBtn").click(function(){
 $("#Dairyproduct").toggle();
});
});

$(document).ready(function(){
$("#DryFruitBtn").click(function(){
  $("#dryFruit-table").toggle();
});
});



$(document).ready(function(){
$("#toggleBtn").click(function(){
  $("#Fruits_table").toggle();
});
});

$(document).ready(function(){
$("#NonVegBtn").click(function(){
  $("#Non-Veg").toggle();
});
});

$(document).ready(function(){
$("#VegetableBtn").click(function(){
  $("#Vegetable").toggle();
});
});
