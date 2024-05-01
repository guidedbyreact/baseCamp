const ethers = require('ethers');

// Remplacez 'votre phrase secrète ici' par votre propre phrase secrète
const mnemonic = 'reform lounge squirrel piano myself emerge sad vague actor flower decline cream';

// Créez un portefeuille à partir de la phrase secrète
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

// Affichez la clé privée
console.log("Clé privée Ethereum:", wallet.privateKey);
