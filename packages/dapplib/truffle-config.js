require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth predict coach inner kite outer tape'; 
let testAccounts = [
"0x98721606e33e355b198cefaa36f88f7bd20a1cdb744706efdde5862ab470fcae",
"0x4ff05685391169c002a08e4c9bde56f0ebbc9ed5025eee3705960c7ebfc411db",
"0xe032519ab8b3dd44d173ee324e6f9f33914ff064cc1347efaaed24d959fa3d36",
"0x7fa611732caf000cf24010c52b7c42c8d3da34d76467ca1edde8796adc042121",
"0x1c5a806f2ae9d3cdfb5f7afa7db96594abc734033f17cc4476ce20330f8b0610",
"0xa8dd05fbbbdf3f8effaefbc65b82255d7861e135fb20a8ec8f3bdf3eb26d86f3",
"0x9ac7de0a2e1a752d8d7728deb6c63cd0a418b0a6e68f3d471bec3b79b8b9442e",
"0x88a8fa4e0a5baf22c532d42771394464213f369bdbcab62689e3f92387865368",
"0xdbf4b5aa2066400c7ff7b9776773301af06c947cad83c124212c5e79efccb80a",
"0x86931f55f6e823a105c4367576bdbc061e0a0230a1a6232bb81b68bd08ec29e6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

