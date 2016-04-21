angular.module('expMgmtApp').controller('homeCtrl', function($scope, expService) {

  // show on page load
  $scope.newExpBtn = true;
  // hide on page load
  $scope.newExpForm = false;
  $scope.showEdit = false;

  // run on page load
  $scope.getExp = function() {
    $scope.expenses = expService.getExp();
  };
  $scope.getExp();

  // calculate total expense
  var expenses = $scope.expenses;
  $scope.calcTotalExpenses = function() {
    var totalSum = 0;
    for (var i = 0; i < expenses.length; i++) {
      if (expenses[i].status === "New") {
        totalSum = expenses[i].total + totalSum;
      };
    }
    return totalSum;
  };

  // calculate total reimbursed
  $scope.calcTotalReimbursed = function() {
    var totalSum = 0;
    for (var i = 0; i < expenses.length; i++) {
      if (expenses[i].status === "Reimbursed") {
        totalSum = expenses[i].total + totalSum;
      };
    }
    return totalSum;
  };

  // show the add new expense form
  $scope.showNewExpForm = function() {
    $scope.newExpBtn = false;
    $scope.newExpForm = true;
  };

  // set default new expense form value
  resetDefaultNewExpense = function() {
    $scope.newExp = {
      merchant: "None",
      date: new Date(),
      total: 0,
      comment: "None",
      status: "New"
    };
  };
  resetDefaultNewExpense();

  $scope.addNewExp = function() {
    expService.addExp(
      newExp = {
        merchant: $scope.newExp.merchant,
        date: $scope.newExp.date,
        total: $scope.newExp.total,
        comment: $scope.newExp.comment,
        status: "New"
      }
    );
    $scope.getExp();
    $scope.newExp = {};
    resetDefaultNewExpense();
  };

  $scope.cancelAdd = function() {
    $scope.newExpBtn = true;
    $scope.newExpForm = false;
  };


  // edit select expense
  $scope.editExp = function(expense) {
    if (confirm("Are you sure you like to modify " + expense.merchant + " entry?") === true) {
      this.showEdit = true;
    }
  };

  $scope.saveEdit = function(expense) {
    // console.log(item);
    expService.editExp(
      editExp = {
        merchant: expense.merchant,
        date: expense.date,
        total: expense.total,
        comment: expense.comment,
        status: expense.status
      },
      $scope.expenses.indexOf(expense));
  };

  $scope.removeExp = function(expense) {
    if (confirm("Are you sure you like to remove this entry?") === true) {
      expService.removeExp($scope.expenses.indexOf(expense));
    }
  };

});
