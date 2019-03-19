$(function(){
  console.log("ready!");
  var bank_accounts = [];

  $("#create_account").submit(function(event){
    console.log("create_account!");

    var name = $("#name").val();
    var initial_deposit = $("#initial_deposit").val();
    console.log(name + " " + initial_deposit);

    var account = new Bank_account(name, initial_deposit);
    bank_accounts.push(account);

    $("#info").show();
    $("#info").append("<p>Name: " + account.name +"; Current Balance: " + account.balance + "$</p>");
    event.preventDefault();
  })

  $("#update_balance").submit(function(event){
    console.log("update_balance!");

    $("#info p").remove();

    var name = $("#name").val();
    var deposit_amount = parseInt($("#deposit_amount").val());
    var withdrawal_amount = parseInt($("#withdrawal_amount").val());
    bank_accounts.forEach(function(account){
      if(name == account.name){
        console.log("test 0");

        if(deposit_amount > 0){
          console.log("test 1 " + withdrawal_amount);

          account.update_balance(deposit_amount, true);
        }
        if(withdrawal_amount > 0){
          console.log("test 2" + withdrawal_amount);

          account.update_balance(withdrawal_amount, false);
        }
      }
    })

    full_info(bank_accounts);

    event.preventDefault();
  });
});

function Bank_account(name, balance) {
  this.name = name;
  this.balance = parseInt(balance);
}

Bank_account.prototype.update_balance = function(amount, deposit) {
  console.log(amount + typeof amount);
  if(deposit)
    this.balance = this.balance + amount;
  else {
    this.balance = this.balance - amount;
  }
  console.log(this);;
};

function full_info(array){
  array.forEach(function(account){
    $("#info").append("<p>Name: " + account.name +"; Current Balance: " + account.balance + "$</p>");
  })
};
