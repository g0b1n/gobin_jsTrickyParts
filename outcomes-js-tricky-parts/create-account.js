function createAccount(pin, initialDeposit) {
    let balance = initialDeposit;
    let accountPin = pin;

    return {
        checkBalance: function(enteredPin) {
            if (enteredPin === accountPin) {
                return `Current balance: $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },

        deposit: function(enteredPin, amount) {
            if (enteredPin === accountPin) {
                balance += amount;
                return `Successfully deposited $${amount}. Current balance: $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },

        withdraw: function(enteredPin, amount) {
            if (enteredPin === accountPin) {
                if (amount <= balance) {
                    balance -= amount;
                    return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            } else {
                return "Invalid PIN.";
            }
        },

        changePin: function(oldPin, newPin) {
            if (oldPin === accountPin) {
                accountPin = newPin;
                return "PIN successfully changed!";
            } else {
                return "Invalid PIN.";
            }
        }
    };
}

let account = createAccount("1234", 100);

module.exports = { createAccount };
