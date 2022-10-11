const bs58 = require('bs58');
const solWeb3 =  require("@solana/web3.js");

// edit this part 
const base58 = "5o1shod9n5T9vKA3kJT1UyKPw5dxdej3AHrBqdYyTRAYhTtPTd8F2NAiaHLVwZe6b9vTGkGq3woT3madTn8hmpsC"
const uint8array = [
	239, 191, 232, 192, 205,  40,  53, 180, 133, 158,  65,
	176, 151,   1,   5, 143, 127, 130,  50, 125,  80, 215,
	255,  59, 231,  23, 150, 246, 114,  19,  83, 198, 146,
	128, 215,  77, 120, 171,   0, 225, 216,  72, 198,  62,
	250,  75,  28,  11, 229, 219, 232,  88,  39, 198,  14,
	231, 117,   1, 237, 234, 246, 108, 189, 251
  ]

const pkExport = async () => {
if (base58) {
	let secretKey = bs58.decode(base58);
	console.log("pk - Uint8Array :");
	console.log(`[${solWeb3.Keypair.fromSecretKey(secretKey).secretKey}]`);
	console.log("");
}
if (uint8array) {
	privkey = new Uint8Array(uint8array);
	console.log("pk - base58 :");
	console.log(bs58.encode(privkey));
	console.log("");
}
};

pkExport();