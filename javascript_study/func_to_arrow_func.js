// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You have agreed."); },
//   function() { alert("You have cancelled."); }
// );

// conversion to arrow function

// function ask(question, yes, no){
//   if (confirm(question)) yes();
//   else no();
// }

let ask = (question, yes, no) => confirm(question)? yes() : no()

ask(
  "Do you agree?",
  () => alert("You have agreed."), //function () { alert("You have agreed."); }
  () => alert ("You have cancelled."));