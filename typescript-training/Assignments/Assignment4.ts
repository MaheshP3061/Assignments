// Array of transactions: positive values represent credits, negative values represent debits using for of loop 
        const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

        // Variables to store the count and amount of credits and debits
        let totalCredits: number = 0;
        let totalDebits: number = 0;
        let totalCreditAmount: number = 0;
        let totalDebitAmount: number = 0;
        let suspiciousTransactions: number = 0;

        // Iterate through each transaction in the array
        for (const amount of transactions) {

            if (amount > 0) {
                // Credit transaction
                totalCredits++;
                totalCreditAmount += amount;

                // Check for suspiciously large credit transaction
                if (amount > 10000) {
                    console.log(`Suspicious credit transaction with Amount: ${amount}`);
                    suspiciousTransactions++;
                }

            } else {
                // Debit transaction
                totalDebits++;
                totalDebitAmount -= amount; // convert to positive

                // Check for suspiciously large debit transaction
                if (amount < -10000) {
                    console.log(`Suspicious debit transaction with Amount: ${amount}`);
                    suspiciousTransactions++;
                }
            }
        }

        // Final balance
        const finalBalance: number = totalCreditAmount - totalDebitAmount;

        // Print summary
        console.log("----- Transaction Summary -----");
        console.log("Total number of credit transactions:", totalCredits);
        console.log("Total number of debit transactions:", totalDebits);
        console.log("Total amount credited:", totalCreditAmount);
        console.log("Total amount debited:", totalDebitAmount);
        console.log("Final remaining amount in the account:", finalBalance);
        console.log("Total number of suspicious transactions:", suspiciousTransactions);
/*        

// Array of transactions using filter,reduce,Arrow function
const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

// Separate credits and debits
const creditTransactions = transactions.filter(amount => amount > 0);
const debitTransactions = transactions.filter(amount => amount < 0);

// Count
const totalCredits = creditTransactions.length;
const totalDebits = debitTransactions.length;

// Total credit amount
const totalCreditAmount = creditTransactions.reduce(
    (sum, amount) => sum + amount,
    0
);

// Total debit amount (without Math.abs)
const totalDebitAmount = debitTransactions.reduce(
    (sum, amount) => sum - amount,
    0
);

// Suspicious transactions
let suspiciousTransactions = 0;

transactions.forEach(amount => {
    if (amount > 0) {
        if (amount > 10000) {
            console.log(`Suspicious Credit Transaction: ${amount}`);
            suspiciousTransactions++;
        }
    } else {
        if (amount < -10000) {
            console.log(`Suspicious Debit Transaction: ${amount}`);
            suspiciousTransactions++;
        }
    }
});

// Final Balance
const finalBalance = totalCreditAmount - totalDebitAmount;

// Print Arrays
console.log("Credit Transactions:", creditTransactions);
console.log("Debit Transactions:", debitTransactions);

// Print Summary
console.log("Total Credit Transactions:", totalCredits);
console.log("Total Debit Transactions:", totalDebits);
console.log("Total Credit Amount:", totalCreditAmount);
console.log("Total Debit Amount:", totalDebitAmount);
console.log("Final Balance:", finalBalance);
console.log("Suspicious Transactions:", suspiciousTransactions);*/