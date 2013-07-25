  WebFontConfig = {
    google: { families: [ 'Voces::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

$(document).ready(function () {
  /*Starting Balance*/
  var cheque = 1000;
  var savings = 1000;

/*Welcome Message*/
// $(function bad_popup()
// {
//   var first = prompt('This is a secure login. Enter your username:');
//   alert('Welcome to WDI Bank '+first+'.');
//   var age = prompt('Please enter your age:');
//     age = parseInt(age)
//     if(age<18){
//       alert('You are too young. Login again in a few years');
//   }
//   else {
//     alert('You are ' +age+' years old. Old enough to mess with your finances.');
//   };
// });

  var checking_deposit = function () {//deposits to the checking account, updates balance
    var deduction = $('#checking').val();
    deduction = parseInt(deduction);
    cheque = cheque + deduction;
    $('#checking_balance').text(cheque);
  };

  var checking_withdraw = function() {//withdraws from checking account
    var deduction = $('#checking').val();
        deduction = parseInt(deduction);
    var excess = cheque - deduction;//do i need to specify 'var' again?
      if(excess < 0) {
        alert('deduction exceeds excess. Balance will be taken from other account.');
        console.log(excess);
        $('#checking_balance').val(0);
        // cheque = savings + excess;dont need this anymore?
        $('#checking_balance').text(cheque);
        savings_withdraw(excess);
    } else {
        cheque = cheque - deduction;
        console.log('checking account balance equals '+cheque);
        $('#checking_balance').text(cheque);
        $('#savings_balance').text(savings);
    }
  };
  $('.cheque .deposit').click(checking_deposit);
  $('.cheque .withdraw').click(checking_withdraw);

  var savings_deposit = function () {
    var deduction = $('#saving').val();
    deduction = parseInt(deduction);
    savings = savings + deduction;
    console.log("deduction is "+savings);
    $('#savings_balance').text(savings);
  };
  var savings_withdraw = function(deduction) {
    console.log("savings_withdraw is on");
    deduction = deduction || $('#saving').val();
    deduction = parseInt(deduction);
    console.log(deduction);
    if(savings < 1) {
        alert('Balance is ZERO. Try again');
        $('#savings_balance').text(savings);
    } else {
        savings = savings  deduction;
        $('#savings_balance').text(savings);
    }
  };
$('.savings .deposit').click(savings_deposit);
$('.savings .withdraw').click(savings_withdraw);
$('#checking_balance').html(cheque);
$('#savings_balance').html(savings);

});