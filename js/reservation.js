$(document).ready(function () {
  $("#register").click(function () {
    var name = $("#guestname").val();
    var email = $("#guestemail").val();
    var no = $("#guestelephone").val();
    var adults = $("#adults").val();
    var children = $("#children").val();
    var checkin = $("#checkin").val();
    var checkout = $("#checkout").val();
    if (
      name == "" ||
      email == "" ||
      no == "" ||
      adults == "" ||
      children == "" ||
      checkin == "" ||
      checkout == ""
    ) {
      alert("Please fill all fields...!!!!!!");
    } else {
      alert("We will reach out to you soon.....");
      $("form")[0].reset();
    }
  });
});
