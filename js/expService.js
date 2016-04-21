angular.module('expMgmtApp').service('expService', function () {

  //dummy data for display
  var expense = [
    {
      merchant: "Starbucks",
      date: new Date(),
      total: 100,
      comment: "Purchase 20 lattes (dummy data)",
      status: "New"
    },
    {
      merchant: "OfficeMax",
      date: new Date(),
      total: 23.50,
      comment: "Purchase 20 boxes of pencils (dummy data)",
      status: "New"
    },
    {
      merchant: "Chicken Express",
      date: new Date(),
      total: 40,
      comment: "Company lunch for 5 (dummy data)",
      status: "Reimbursed"
    }
  ];


  //CRUD
  this.getExp = function() {
    return expense;
  };

  this.addExp = function(newExp) {
    expense.push(newExp);
  };

  this.removeExp = function(index) {
    console.log(index);
    expense.splice(index, 1);
  };

  this.editExp = function(editExp, index) {
    expense[index] = editExp;
  };


});
