## ⚙️ How to Run This Project Locally

You can clone and test this demo using Hardhat.

```bash
# Clone the repo
git clone https://github.com/edTonye/defi-dashboard.git
cd defi-dashboard

# Install dependencies
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

# Compile contract
npx hardhat compile

# Run local blockchain
npx hardhat node

# Deploy the contract
npx hardhat run scripts/deploy.js --network localhost
