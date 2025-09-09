// Net Salary Calculator

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;

  // NSSF
  const nssfDeduction = Math.min(basicSalary * 0.06, 360);

  // NHIF
  let nhifDeduction = 0;
  if (grossSalary <= 5999) nhifDeduction = 150;
  else if (grossSalary <= 7999) nhifDeduction = 300;
  else if (grossSalary <= 11999) nhifDeduction = 400;
  else if (grossSalary <= 14999) nhifDeduction = 500;
  else if (grossSalary <= 19999) nhifDeduction = 600;
  else if (grossSalary <= 24999) nhifDeduction = 750;
  else if (grossSalary <= 29999) nhifDeduction = 850;
  else if (grossSalary <= 34999) nhifDeduction = 900;
  else if (grossSalary <= 39999) nhifDeduction = 950;
  else nhifDeduction = 1000;

  // PAYE
  let taxableIncome = grossSalary - nssfDeduction;
  let payee = 0;
  if (taxableIncome <= 24000) {
    payee = taxableIncome * 0.1;
  } else if (taxableIncome <= 32333) {
    payee = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
  } else {
    payee = 24000 * 0.1 + 8333 * 0.25 + (taxableIncome - 32333) * 0.3;
  }

  const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);

  return {
    grossSalary,
    payee,
    nhifDeduction,
    nssfDeduction,
    netSalary,
  };
}

console.log(calculateNetSalary(50000, 10000));
