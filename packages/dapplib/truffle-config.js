require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain unknown gloom neck flip segment'; 
let testAccounts = [
"0x842670eab99546fff1aba2f85c08125edfdb39693823086cfd6f10d2630f771b",
"0x42fc772323c501eaf1207904f9b3bf36de3d4b95318cd9b313f9073f0251a303",
"0x429516b74074fe6555ed7e72c30a0d660c9df332e99be1430af6230e86748aa2",
"0x577dd95701a80ecaf039499bd3f1bcf5be1a1bc9179799e0a0f667f3b5ab90a1",
"0x21cc38207fbee84017703b5f1a5f0d1734e16a5ffb0df8eeac158dd7fb3e86fe",
"0xf51a7ea07732ed9f4dc4e63bc0efa9dff26a3043cd62289ea4668728c368bc01",
"0xdccd6253b9460a863d21d69a53a23770d17fb4102aba7188759e92be4604b370",
"0x8326d480809800a0b78cbeb013025e736965c1dfcdf5b49320f20fb84d16bdc4",
"0xc2c9b45b37a11df5e015c74cf2be0f60398642224544ac108a59b462afaba159",
"0xe45e84c1ff484686768c992047869aeb8c5d410d345284307e2b88e13ba2c413"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

