//   var balance = {
//       checking: 1000,
//       savings: 1000
//   };

// $(document).ready(function() {
// return
//   var checking_deposit = function () {
//     var amount = parseInt($('#c_amount').val());
//     balance.checking += amount;
// update_balance(balance.checking, '#checking');
//   }

//   var checking_withdraw = function () {
//     var amount = parseInt($('#c_amount').val());
//     var new_checking = balance.checking - amount;
//     if (new_checking >= 0) {
//       //All is well, take straight from checking
//       balance.checking = new_checking;
//       update_balance(balance.checking, '#checking');
//     } else {
// //Insufficient funds in checking - trying savings.
// var difference = -new_checking;
// if (balance.savings < difference) {
//   alert('Insufficient funds everywhere.');
//     } else {
//       //withdraw appropriate amount from both accounts.
// balance.checking = 0;
// balance.savings -= difference;
// update_balance(balance.checking, '#checking');

//     }
//   }

//   var savings_deposit = function (){
//     var amount = parseInt($('#s_amount').val())
//     balance.savings += amount;
//     update_balance(balance.savings, '#savings');
// }
//   var savings_withdraw = function (){
//     var amount = parseInt($('#s_amount').val());
//     var new_savings = baalance.savings - amount;
//     if (new_savings >= 0) {
//       balance.savings = new_savings;
//       update_balance(balance.savings, '#savings');
//     } else {
//       alert('Money insufficient');
//   }
// }
// //Displays the new balance with a dollar sign
//   var update_balance = function (amount, selector) {
//     $(selector).text('$' + amount);
//     class_wrangler();
// //TODO - ADD CSS CLASSES
//   }

//   var class_wrangler = function (){
// $('#checking, #savings').removeClass('alert');//Remove all alerts

// //Re-add alerts as needed.
// if (balance.checking <= 0) {
// $('#checking').addClass('alert');
// }
//  }

// if (balance.savings <= 0) {
// $('#savings').addClass('alert');
// }
//  }


// $('#c_deposit').click(checking_deposit);
// $('#c_withdraw').click(checking_withdraw);
// $('#s_deposit').click(savings_deposit);
// $('#c_deposit').click(savings_deposit);

// });