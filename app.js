document.getElementById('loan-form').addEventListener('submit',function(e){
document.getElementById('loding').style.display = 'block';
document.getElementById('results').style.display = 'none';

setTimeout(calculateResults,2000);
e.preventDefault();
});



function calculateResults(e){
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalInterest = document.getElementById('total-interest');
  const totalPayment = document.getElementById('total-payment');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatePayment = parseFloat(years.value)* 12;
  const x = Math.pow(1+calculatedInterest,(-calculatePayment));
  const y = (principal*calculatedInterest);
  const monthly = y/(1-x);
  // const monthly = (principal*x*calculatedInterest)/(x-1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalInterest.value =((monthly*calculatePayment)-principal).toFixed(2);
    totalPayment.value = monthly*calculatePayment.toFixed(2);
    document.getElementById('loding').style.display = 'none';
    document.getElementById('results').style.display = 'block';

  }else{
    
    showError('Please check your number!!!');
     
  }

}

function showError(error) {
  document.getElementById('loding').style.display = 'none';
document.getElementById('results').style.display = 'none';
  
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv,heading);
  setTimeout(clearError,3000);

}
function clearError() {
  document.querySelector('.alert').remove();
  
}