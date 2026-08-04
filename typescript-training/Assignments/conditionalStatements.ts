function loanEligible(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
) {

    if (creditScore > 750) {
        console.log(`${customerName}: Loan is eligible due to good credit score (${creditScore})`);
    }
    else if (creditScore >= 650 && creditScore <= 750) {

        if (income >= 50000) {

            if (isEmployed) {

                if (debtToIncomeRatio < 40) {
                    console.log(`${customerName}: Loan is eligible.`);
                } else {
                    console.log(`${customerName}: Loan is not eligible due to high Debt-to-Income Ratio (${debtToIncomeRatio}%).`);
                }

            } else {
                console.log(`${customerName}: Loan is not eligible because the customer is unemployed.`);
            }

        } else {
            console.log(`${customerName}: Loan is not eligible because income is less than $50,000.`);
        }

    } else {
        console.log(`${customerName}: Loan is not eligible due to low credit score (${creditScore}).`);
    }
}

loanEligible("John Doe", 720, 50000, true, 35);