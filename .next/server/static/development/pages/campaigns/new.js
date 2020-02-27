module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/contracts/CampaignFactory.json":
/*!**********************************************!*\
  !*** ./build/contracts/CampaignFactory.json ***!
  \**********************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, networkType, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"contractName\":\"CampaignFactory\",\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"deployedCampaigns\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"minimum\",\"type\":\"uint256\"}],\"name\":\"createCampaign\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getDeployedCampaigns\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"metadata\":\"{\\\"compiler\\\":{\\\"version\\\":\\\"0.5.16+commit.9c3226ce\\\"},\\\"language\\\":\\\"Solidity\\\",\\\"output\\\":{\\\"abi\\\":[{\\\"inputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"constructor\\\"},{\\\"constant\\\":false,\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"minimum\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"createCampaign\\\",\\\"outputs\\\":[],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"nonpayable\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[{\\\"internalType\\\":\\\"uint256\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"uint256\\\"}],\\\"name\\\":\\\"deployedCampaigns\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"},{\\\"constant\\\":true,\\\"inputs\\\":[],\\\"name\\\":\\\"getDeployedCampaigns\\\",\\\"outputs\\\":[{\\\"internalType\\\":\\\"address[]\\\",\\\"name\\\":\\\"\\\",\\\"type\\\":\\\"address[]\\\"}],\\\"payable\\\":false,\\\"stateMutability\\\":\\\"view\\\",\\\"type\\\":\\\"function\\\"}],\\\"devdoc\\\":{\\\"methods\\\":{}},\\\"userdoc\\\":{\\\"methods\\\":{}}},\\\"settings\\\":{\\\"compilationTarget\\\":{\\\"/home/sharan/kickstarter-campaign/contracts/CampaignFactory.sol\\\":\\\"CampaignFactory\\\"},\\\"evmVersion\\\":\\\"istanbul\\\",\\\"libraries\\\":{},\\\"optimizer\\\":{\\\"enabled\\\":false,\\\"runs\\\":200},\\\"remappings\\\":[]},\\\"sources\\\":{\\\"/home/sharan/kickstarter-campaign/contracts/Campaign.sol\\\":{\\\"keccak256\\\":\\\"0xa3fdfd2d0f58717aecd093453aae8122deb193198783d9a1c96f6c1c619e96c5\\\",\\\"urls\\\":[\\\"bzz-raw://9c7889f7276f2eee818b8b2d4c9799a4656c902cdcef3a491cf74b08a352735a\\\",\\\"dweb:/ipfs/QmXMa2AMLj4y7HnFhLJMJ7yn7UqAhWyby9jtDUFx4ix3ZD\\\"]},\\\"/home/sharan/kickstarter-campaign/contracts/CampaignFactory.sol\\\":{\\\"keccak256\\\":\\\"0x3b7ad6202215d1717d58536f92a411245b7cf9cfa67af4eb6597c98261f083a3\\\",\\\"urls\\\":[\\\"bzz-raw://03a995c0b53b041a3b0cf5cdeaed92526fbf34ed764deee0f2b08d20c10b92ee\\\",\\\"dweb:/ipfs/QmdSurr2ZZqmjsH69Yh6UUntaxHuYpV9Lf8jeq9QJ32wPB\\\"]}},\\\"version\\\":1}\",\"bytecode\":\"0x608060405234801561001057600080fd5b50611205806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063339d50a5146100465780634acb9d4f146100b4578063a3303a7514610113575b600080fd5b6100726004803603602081101561005c57600080fd5b8101908080359060200190929190505050610141565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100bc61017d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100ff5780820151818401526020810190506100e4565b505050509050019250505060405180910390f35b61013f6004803603602081101561012957600080fd5b810190808035906020019092919050505061020b565b005b6000818154811061014e57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080548060200260200160405190810160405280929190818152602001828054801561020157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101b7575b5050505050905090565b6000813360405161021b906102e1565b808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604051809103906000f080158015610274573d6000803e3d6000fd5b50905060008190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b610ee2806102ef8339019056fe608060405234801561001057600080fd5b50604051610ee2380380610ee28339818101604052604081101561003357600080fd5b81019080805190602001909291908051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816002819055505050610e3b806100a76000396000f3fe6080604052600436106100865760003560e01c806382fde0931161005957806382fde093146102865780638a9cfd55146102b1578063937e09b1146103a3578063d7bb99ba146103ce578063d7d1bbdb146103d857610086565b8063034410061461008b5780630a144391146100c6578063481c6a751461012f57806381d12c5814610186575b600080fd5b34801561009757600080fd5b506100c4600480360360208110156100ae57600080fd5b8101908080359060200190929190505050610413565b005b3480156100d257600080fd5b50610115600480360360208110156100e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610637565b604051808215151515815260200191505060405180910390f35b34801561013b57600080fd5b50610144610657565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019257600080fd5b506101bf600480360360208110156101a957600080fd5b810190808035906020019092919050505061067d565b60405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561024757808201518184015260208101905061022c565b50505050905090810190601f1680156102745780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561029257600080fd5b5061029b610785565b6040518082815260200191505060405180910390f35b3480156102bd57600080fd5b506103a1600480360360608110156102d457600080fd5b81019080803590602001906401000000008111156102f157600080fd5b82018360208201111561030357600080fd5b8035906020019184600183028401116401000000008311171561032557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061078b565b005b3480156103af57600080fd5b506103b861094b565b6040518082815260200191505060405180910390f35b6103d6610951565b005b3480156103e457600080fd5b50610411600480360360208110156103fb57600080fd5b8101908080359060200190929190505050610a17565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104b9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610dd56032913960400191505060405180910390fd5b60008082815481106104c757fe5b906000526020600020906005020190506002600454816104e357fe5b0481600301541161053f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180610da56030913960400191505060405180910390fd5b8060020160149054906101000a900460ff16156105a7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180610d4a6028913960400191505060405180910390fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610615573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b60036020528060005260406000206000915054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000818154811061068a57fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107365780601f1061070b57610100808354040283529160200191610736565b820191906000526020600020905b81548152906001019060200180831161071957829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60045481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610831576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610dd56032913960400191505060405180910390fd5b610839610bee565b6040518060a001604052808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081525090506000819080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000190805190602001906108c6929190610c35565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160146101000a81548160ff0219169083151502179055506080820151816003015550505050505050565b60025481565b60025434116109ab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526043815260200180610cdb6043913960600191505060405180910390fd5b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600460008154809291906001019190505550565b6000808281548110610a2557fe5b90600052602060002090600502019050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ad7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180610d726033913960400191505060405180910390fd5b8060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610d1e602c913960400191505060405180910390fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080600301600081548092919060010191905055505050565b6040518060a001604052806060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c7657805160ff1916838001178555610ca4565b82800160010185558215610ca4579182015b82811115610ca3578251825591602001919060010190610c88565b5b509050610cb19190610cb5565b5090565b610cd791905b80821115610cd3576000816000905550600101610cbb565b5090565b9056fe54686520616d6f756e74207061696420646f6573206e6f74206d65657420746865206d696e696d756d20636f6e747269627574696f6e20726571756972656d656e742e5468652073656e6465722068617320616c726561647920617070726f766564207468697320726571756573745468697320726571756573742068617320616c7265616479206265656e2066696e616c697a65642e5468652073656e646572206973206e6f7420617574686f72697a656420746f20706572666f726d207468697320616374696f6e4e6f7420656e6f75676820617070726f76657273206861766520617070726f766564207468697320726571756573742e5468652073656e64657220697320756e617574686f72697a656420746f20706572666f726d207468697320616374696f6e2ea265627a7a7231582024b95695b57fad02bc2399f87715121c16318df33a9a31a63430f57f51d93fb864736f6c63430005100032a265627a7a723158203d674cbb37d847f43853f7bdfab75e6f5b1458e789bda81833d5a7ca69f917cf64736f6c63430005100032\",\"deployedBytecode\":\"0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063339d50a5146100465780634acb9d4f146100b4578063a3303a7514610113575b600080fd5b6100726004803603602081101561005c57600080fd5b8101908080359060200190929190505050610141565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100bc61017d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100ff5780820151818401526020810190506100e4565b505050509050019250505060405180910390f35b61013f6004803603602081101561012957600080fd5b810190808035906020019092919050505061020b565b005b6000818154811061014e57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600080548060200260200160405190810160405280929190818152602001828054801561020157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101b7575b5050505050905090565b6000813360405161021b906102e1565b808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050604051809103906000f080158015610274573d6000803e3d6000fd5b50905060008190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b610ee2806102ef8339019056fe608060405234801561001057600080fd5b50604051610ee2380380610ee28339818101604052604081101561003357600080fd5b81019080805190602001909291908051906020019092919050505080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550816002819055505050610e3b806100a76000396000f3fe6080604052600436106100865760003560e01c806382fde0931161005957806382fde093146102865780638a9cfd55146102b1578063937e09b1146103a3578063d7bb99ba146103ce578063d7d1bbdb146103d857610086565b8063034410061461008b5780630a144391146100c6578063481c6a751461012f57806381d12c5814610186575b600080fd5b34801561009757600080fd5b506100c4600480360360208110156100ae57600080fd5b8101908080359060200190929190505050610413565b005b3480156100d257600080fd5b50610115600480360360208110156100e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610637565b604051808215151515815260200191505060405180910390f35b34801561013b57600080fd5b50610144610657565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019257600080fd5b506101bf600480360360208110156101a957600080fd5b810190808035906020019092919050505061067d565b60405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184151515158152602001838152602001828103825287818151815260200191508051906020019080838360005b8381101561024757808201518184015260208101905061022c565b50505050905090810190601f1680156102745780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34801561029257600080fd5b5061029b610785565b6040518082815260200191505060405180910390f35b3480156102bd57600080fd5b506103a1600480360360608110156102d457600080fd5b81019080803590602001906401000000008111156102f157600080fd5b82018360208201111561030357600080fd5b8035906020019184600183028401116401000000008311171561032557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061078b565b005b3480156103af57600080fd5b506103b861094b565b6040518082815260200191505060405180910390f35b6103d6610951565b005b3480156103e457600080fd5b50610411600480360360208110156103fb57600080fd5b8101908080359060200190929190505050610a17565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146104b9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610dd56032913960400191505060405180910390fd5b60008082815481106104c757fe5b906000526020600020906005020190506002600454816104e357fe5b0481600301541161053f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180610da56030913960400191505060405180910390fd5b8060020160149054906101000a900460ff16156105a7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180610d4a6028913960400191505060405180910390fd5b8060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050158015610615573d6000803e3d6000fd5b5060018160020160146101000a81548160ff0219169083151502179055505050565b60036020528060005260406000206000915054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000818154811061068a57fe5b9060005260206000209060050201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107365780601f1061070b57610100808354040283529160200191610736565b820191906000526020600020905b81548152906001019060200180831161071957829003601f168201915b5050505050908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16908060030154905085565b60045481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610831576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610dd56032913960400191505060405180910390fd5b610839610bee565b6040518060a001604052808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081525090506000819080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000190805190602001906108c6929190610c35565b506020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060608201518160020160146101000a81548160ff0219169083151502179055506080820151816003015550505050505050565b60025481565b60025434116109ab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526043815260200180610cdb6043913960600191505060405180910390fd5b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600460008154809291906001019190505550565b6000808281548110610a2557fe5b90600052602060002090600502019050600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610ad7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180610d726033913960400191505060405180910390fd5b8060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610b7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610d1e602c913960400191505060405180910390fd5b60018160040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080600301600081548092919060010191905055505050565b6040518060a001604052806060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c7657805160ff1916838001178555610ca4565b82800160010185558215610ca4579182015b82811115610ca3578251825591602001919060010190610c88565b5b509050610cb19190610cb5565b5090565b610cd791905b80821115610cd3576000816000905550600101610cbb565b5090565b9056fe54686520616d6f756e74207061696420646f6573206e6f74206d65657420746865206d696e696d756d20636f6e747269627574696f6e20726571756972656d656e742e5468652073656e6465722068617320616c726561647920617070726f766564207468697320726571756573745468697320726571756573742068617320616c7265616479206265656e2066696e616c697a65642e5468652073656e646572206973206e6f7420617574686f72697a656420746f20706572666f726d207468697320616374696f6e4e6f7420656e6f75676820617070726f76657273206861766520617070726f766564207468697320726571756573742e5468652073656e64657220697320756e617574686f72697a656420746f20706572666f726d207468697320616374696f6e2ea265627a7a7231582024b95695b57fad02bc2399f87715121c16318df33a9a31a63430f57f51d93fb864736f6c63430005100032a265627a7a723158203d674cbb37d847f43853f7bdfab75e6f5b1458e789bda81833d5a7ca69f917cf64736f6c63430005100032\",\"sourceMap\":\"61:374:1:-;;;129:26;8:9:-1;5:2;;;30:1;27;20:12;5:2;129:26:1;61:374;;;;;;\",\"deployedSourceMap\":\"61:374:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;61:374:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;90:34;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;90:34:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;326:107;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;326:107:1;;;;;;;;;;;;;;;;;159:162;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;159:162:1;;;;;;;;;;;;;;;;;:::i;:::-;;90:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;326:107::-;378:16;410:17;403:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;326:107;:::o;159:162::-;210:20;246:7;255:10;233:33;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;233:33:1;210:56;;272:17;303:11;272:44;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;272:44:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;159:162;;:::o;61:374::-;;;;;;;;:::o\",\"source\":\"pragma solidity >= 0.5.0 < 0.7.0;\\n\\nimport \\\"./Campaign.sol\\\";\\n\\ncontract CampaignFactory {\\n  address[] public deployedCampaigns;\\n\\n  constructor() public {\\n  }\\n\\n  function createCampaign(uint minimum) public {\\n    Campaign newCampaign = new Campaign(minimum, msg.sender);\\n    deployedCampaigns.push(address(newCampaign));\\n  }\\n\\n   function getDeployedCampaigns() public view returns(address[] memory) {\\n     return deployedCampaigns;\\n   }\\n}\\n\",\"sourcePath\":\"/home/sharan/kickstarter-campaign/contracts/CampaignFactory.sol\",\"ast\":{\"absolutePath\":\"/home/sharan/kickstarter-campaign/contracts/CampaignFactory.sol\",\"exportedSymbols\":{\"CampaignFactory\":[242]},\"id\":243,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":201,\"literals\":[\"solidity\",\">=\",\"0.5\",\".0\",\"<\",\"0.7\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:33:1\"},{\"absolutePath\":\"/home/sharan/kickstarter-campaign/contracts/Campaign.sol\",\"file\":\"./Campaign.sol\",\"id\":202,\"nodeType\":\"ImportDirective\",\"scope\":243,\"sourceUnit\":200,\"src\":\"35:24:1\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[],\"contractDependencies\":[199],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":242,\"linearizedBaseContracts\":[242],\"name\":\"CampaignFactory\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":205,\"name\":\"deployedCampaigns\",\"nodeType\":\"VariableDeclaration\",\"scope\":242,\"src\":\"90:34:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":203,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"90:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":204,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"90:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"value\":null,\"visibility\":\"public\"},{\"body\":{\"id\":208,\"nodeType\":\"Block\",\"src\":\"150:5:1\",\"statements\":[]},\"documentation\":null,\"id\":209,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":206,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"140:2:1\"},\"returnParameters\":{\"id\":207,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"150:0:1\"},\"scope\":242,\"src\":\"129:26:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":231,\"nodeType\":\"Block\",\"src\":\"204:117:1\",\"statements\":[{\"assignments\":[215],\"declarations\":[{\"constant\":false,\"id\":215,\"name\":\"newCampaign\",\"nodeType\":\"VariableDeclaration\",\"scope\":231,\"src\":\"210:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"},\"typeName\":{\"contractScope\":null,\"id\":214,\"name\":\"Campaign\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":199,\"src\":\"210:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":222,\"initialValue\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":218,\"name\":\"minimum\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":211,\"src\":\"246:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":219,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":294,\"src\":\"255:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":220,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"255:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":217,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"NewExpression\",\"src\":\"233:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_creation_nonpayable$_t_uint256_$_t_address_$returns$_t_contract$_Campaign_$199_$\",\"typeString\":\"function (uint256,address) returns (contract Campaign)\"},\"typeName\":{\"contractScope\":null,\"id\":216,\"name\":\"Campaign\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":199,\"src\":\"237:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}}},\"id\":221,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"233:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"210:56:1\"},{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":227,\"name\":\"newCampaign\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":215,\"src\":\"303:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}],\"id\":226,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"295:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":228,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"295:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":223,\"name\":\"deployedCampaigns\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":205,\"src\":\"272:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":225,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"272:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) returns (uint256)\"}},\"id\":229,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"272:44:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":230,\"nodeType\":\"ExpressionStatement\",\"src\":\"272:44:1\"}]},\"documentation\":null,\"id\":232,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createCampaign\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":212,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":211,\"name\":\"minimum\",\"nodeType\":\"VariableDeclaration\",\"scope\":232,\"src\":\"183:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":210,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"183:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"182:14:1\"},\"returnParameters\":{\"id\":213,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"204:0:1\"},\"scope\":242,\"src\":\"159:162:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":240,\"nodeType\":\"Block\",\"src\":\"396:37:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":238,\"name\":\"deployedCampaigns\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":205,\"src\":\"410:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":237,\"id\":239,\"nodeType\":\"Return\",\"src\":\"403:24:1\"}]},\"documentation\":null,\"id\":241,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getDeployedCampaigns\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":233,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"355:2:1\"},\"returnParameters\":{\"id\":237,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":236,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":241,\"src\":\"378:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":234,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"378:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":235,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"378:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"377:18:1\"},\"scope\":242,\"src\":\"326:107:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":243,\"src\":\"61:374:1\"}],\"src\":\"0:436:1\"},\"legacyAST\":{\"absolutePath\":\"/home/sharan/kickstarter-campaign/contracts/CampaignFactory.sol\",\"exportedSymbols\":{\"CampaignFactory\":[242]},\"id\":243,\"nodeType\":\"SourceUnit\",\"nodes\":[{\"id\":201,\"literals\":[\"solidity\",\">=\",\"0.5\",\".0\",\"<\",\"0.7\",\".0\"],\"nodeType\":\"PragmaDirective\",\"src\":\"0:33:1\"},{\"absolutePath\":\"/home/sharan/kickstarter-campaign/contracts/Campaign.sol\",\"file\":\"./Campaign.sol\",\"id\":202,\"nodeType\":\"ImportDirective\",\"scope\":243,\"sourceUnit\":200,\"src\":\"35:24:1\",\"symbolAliases\":[],\"unitAlias\":\"\"},{\"baseContracts\":[],\"contractDependencies\":[199],\"contractKind\":\"contract\",\"documentation\":null,\"fullyImplemented\":true,\"id\":242,\"linearizedBaseContracts\":[242],\"name\":\"CampaignFactory\",\"nodeType\":\"ContractDefinition\",\"nodes\":[{\"constant\":false,\"id\":205,\"name\":\"deployedCampaigns\",\"nodeType\":\"VariableDeclaration\",\"scope\":242,\"src\":\"90:34:1\",\"stateVariable\":true,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":203,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"90:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":204,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"90:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"value\":null,\"visibility\":\"public\"},{\"body\":{\"id\":208,\"nodeType\":\"Block\",\"src\":\"150:5:1\",\"statements\":[]},\"documentation\":null,\"id\":209,\"implemented\":true,\"kind\":\"constructor\",\"modifiers\":[],\"name\":\"\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":206,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"140:2:1\"},\"returnParameters\":{\"id\":207,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"150:0:1\"},\"scope\":242,\"src\":\"129:26:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":231,\"nodeType\":\"Block\",\"src\":\"204:117:1\",\"statements\":[{\"assignments\":[215],\"declarations\":[{\"constant\":false,\"id\":215,\"name\":\"newCampaign\",\"nodeType\":\"VariableDeclaration\",\"scope\":231,\"src\":\"210:20:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"},\"typeName\":{\"contractScope\":null,\"id\":214,\"name\":\"Campaign\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":199,\"src\":\"210:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}},\"value\":null,\"visibility\":\"internal\"}],\"id\":222,\"initialValue\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":218,\"name\":\"minimum\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":211,\"src\":\"246:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},{\"argumentTypes\":null,\"expression\":{\"argumentTypes\":null,\"id\":219,\"name\":\"msg\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":294,\"src\":\"255:3:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_magic_message\",\"typeString\":\"msg\"}},\"id\":220,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"sender\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"255:10:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},{\"typeIdentifier\":\"t_address_payable\",\"typeString\":\"address payable\"}],\"id\":217,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"nodeType\":\"NewExpression\",\"src\":\"233:12:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_creation_nonpayable$_t_uint256_$_t_address_$returns$_t_contract$_Campaign_$199_$\",\"typeString\":\"function (uint256,address) returns (contract Campaign)\"},\"typeName\":{\"contractScope\":null,\"id\":216,\"name\":\"Campaign\",\"nodeType\":\"UserDefinedTypeName\",\"referencedDeclaration\":199,\"src\":\"237:8:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}}},\"id\":221,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"233:33:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}},\"nodeType\":\"VariableDeclarationStatement\",\"src\":\"210:56:1\"},{\"expression\":{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"arguments\":[{\"argumentTypes\":null,\"id\":227,\"name\":\"newCampaign\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":215,\"src\":\"303:11:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_contract$_Campaign_$199\",\"typeString\":\"contract Campaign\"}],\"id\":226,\"isConstant\":false,\"isLValue\":false,\"isPure\":true,\"lValueRequested\":false,\"nodeType\":\"ElementaryTypeNameExpression\",\"src\":\"295:7:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_type$_t_address_$\",\"typeString\":\"type(address)\"},\"typeName\":\"address\"},\"id\":228,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"typeConversion\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"295:20:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}}],\"expression\":{\"argumentTypes\":[{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}],\"expression\":{\"argumentTypes\":null,\"id\":223,\"name\":\"deployedCampaigns\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":205,\"src\":\"272:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"id\":225,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"lValueRequested\":false,\"memberName\":\"push\",\"nodeType\":\"MemberAccess\",\"referencedDeclaration\":null,\"src\":\"272:22:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$\",\"typeString\":\"function (address) returns (uint256)\"}},\"id\":229,\"isConstant\":false,\"isLValue\":false,\"isPure\":false,\"kind\":\"functionCall\",\"lValueRequested\":false,\"names\":[],\"nodeType\":\"FunctionCall\",\"src\":\"272:44:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"id\":230,\"nodeType\":\"ExpressionStatement\",\"src\":\"272:44:1\"}]},\"documentation\":null,\"id\":232,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"createCampaign\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":212,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":211,\"name\":\"minimum\",\"nodeType\":\"VariableDeclaration\",\"scope\":232,\"src\":\"183:12:1\",\"stateVariable\":false,\"storageLocation\":\"default\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"},\"typeName\":{\"id\":210,\"name\":\"uint\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"183:4:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_uint256\",\"typeString\":\"uint256\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"182:14:1\"},\"returnParameters\":{\"id\":213,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"204:0:1\"},\"scope\":242,\"src\":\"159:162:1\",\"stateMutability\":\"nonpayable\",\"superFunction\":null,\"visibility\":\"public\"},{\"body\":{\"id\":240,\"nodeType\":\"Block\",\"src\":\"396:37:1\",\"statements\":[{\"expression\":{\"argumentTypes\":null,\"id\":238,\"name\":\"deployedCampaigns\",\"nodeType\":\"Identifier\",\"overloadedDeclarations\":[],\"referencedDeclaration\":205,\"src\":\"410:17:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage\",\"typeString\":\"address[] storage ref\"}},\"functionReturnParameters\":237,\"id\":239,\"nodeType\":\"Return\",\"src\":\"403:24:1\"}]},\"documentation\":null,\"id\":241,\"implemented\":true,\"kind\":\"function\",\"modifiers\":[],\"name\":\"getDeployedCampaigns\",\"nodeType\":\"FunctionDefinition\",\"parameters\":{\"id\":233,\"nodeType\":\"ParameterList\",\"parameters\":[],\"src\":\"355:2:1\"},\"returnParameters\":{\"id\":237,\"nodeType\":\"ParameterList\",\"parameters\":[{\"constant\":false,\"id\":236,\"name\":\"\",\"nodeType\":\"VariableDeclaration\",\"scope\":241,\"src\":\"378:16:1\",\"stateVariable\":false,\"storageLocation\":\"memory\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_memory_ptr\",\"typeString\":\"address[]\"},\"typeName\":{\"baseType\":{\"id\":234,\"name\":\"address\",\"nodeType\":\"ElementaryTypeName\",\"src\":\"378:7:1\",\"stateMutability\":\"nonpayable\",\"typeDescriptions\":{\"typeIdentifier\":\"t_address\",\"typeString\":\"address\"}},\"id\":235,\"length\":null,\"nodeType\":\"ArrayTypeName\",\"src\":\"378:9:1\",\"typeDescriptions\":{\"typeIdentifier\":\"t_array$_t_address_$dyn_storage_ptr\",\"typeString\":\"address[]\"}},\"value\":null,\"visibility\":\"internal\"}],\"src\":\"377:18:1\"},\"scope\":242,\"src\":\"326:107:1\",\"stateMutability\":\"view\",\"superFunction\":null,\"visibility\":\"public\"}],\"scope\":243,\"src\":\"61:374:1\"}],\"src\":\"0:436:1\"},\"compiler\":{\"name\":\"solc\",\"version\":\"0.5.16+commit.9c3226ce.Emscripten.clang\"},\"networks\":{\"3\":{\"events\":{},\"links\":{},\"address\":\"0xED5fCA1d7e2C95a732897F7b09C6272a623D8fD4\",\"transactionHash\":\"0x1e4e8bee9fcb5dd39855d20e2904ac6befd94a9fd2ebcfaa038bf7378f170487\"},\"1582780495361\":{\"events\":{},\"links\":{},\"address\":\"0xeBfd94928984570AfB1a512564bDE2F53Ebf0C26\",\"transactionHash\":\"0xb8e72671995ec59ddd7aee2eda9c13e497b81b4f7fbb709790e1f409b11cfa7e\"},\"1582790706246\":{\"events\":{},\"links\":{},\"address\":\"0x1a4DDAd87AADA93bDa10607ACE873735621F707F\",\"transactionHash\":\"0x9ebfd8673a19168ef792cf3f967a09668f00470305b2fd2235e01e824fcfd6c4\"}},\"schemaVersion\":\"3.0.23\",\"updatedAt\":\"2020-02-27T08:05:17.828Z\",\"networkType\":\"ethereum\",\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}}");

/***/ }),

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_contracts_CampaignFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/contracts/CampaignFactory */ "./build/contracts/CampaignFactory.json");
var _build_contracts_CampaignFactory__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/contracts/CampaignFactory */ "./build/contracts/CampaignFactory.json", 1);
// require('dotenv').config();

 // var fs = require('fs');
// var contract_abi = JSON.parse(fs.readFileSync('../build/contracts/CampaignFactory', 'utf8'));
// import secrets from "../secrets"
// const secret = JSON.parse(secrets)
// const abi = JSON.parse(CampaignFactory)

const abi = [{
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "constant": true,
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "deployedCampaigns",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "internalType": "uint256",
    "name": "minimum",
    "type": "uint256"
  }],
  "name": "createCampaign",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getDeployedCampaigns",
  "outputs": [{
    "internalType": "address[]",
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}]; // TODO: use fs.readFileSync for this? https://medium.com/@piyopiyo/how-to-get-contract-abi-in-truffle-22d0c0457ceb

const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(abi, "0x1a4DDAd87AADA93bDa10607ACE873735621F707F");
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _secrets_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../secrets.json */ "./secrets.json");
var _secrets_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../secrets.json */ "./secrets.json", 1);

 // let web3;
// if(typeof window !== 'undefined' && typeof window.web3 !== undefined) {
//     web3 = new Web3(window.web3.currentProvider);
// }
// else {
//     const provider = new Web3.providers.HttpProvider(process.env.ethereumEndpoint)
//     web3 = new Web3(provider);
// }

async function enableEthereum() {
  try {
    await window.ethereum.enable();
  } catch (e) {
    console.log('User denied account access...');
  }
}

let web3;

if (false) {} else {
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider("http://localhost:8545");
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/sharan/kickstarter-campaign/pages/campaigns/new.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // class CampaignNew extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Create a Campaign</h3>
//                 <Form>
//                     <Form.Field>
//                         <label>Minimum Contribution</label>
//                         <Input label="wei" labelPosition="right" />
//                     </Form.Field>
//                     <Button primary>Create!</Button>
//                 </Form>
//             </div>
//         )
//     }
// }

const CampaignNew = () => {
  const {
    0: minimumContribution,
    1: setMinimumContribution
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = e => {
    setMinimumContribution(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__["default"].eth.getAccounts();
      await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__["default"].methods.createCampaign(minimumContribution).send({
        from: accounts[0]
      });
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    } catch (e) {
      setErrorMessage(e.message);
    }

    setLoading(false);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Create a Campaign"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: handleSubmit,
    error: !!errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Minimum Contribution"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    label: "wei",
    labelPosition: "right",
    value: minimumContribution,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    error: true,
    header: "Oops!",
    content: errorMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: loading,
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Create!")));
};

/* harmony default export */ __webpack_exports__["default"] = (CampaignNew);

/***/ }),

/***/ "./secrets.json":
/*!**********************!*\
  !*** ./secrets.json ***!
  \**********************/
/*! exports provided: INFURA_KEY, INFURA_ENDPOINT, INFURA_SECRET, MNEMONIC, ROPSTEN_CONTRACT_ADDRESS, LOCAL_CONTRACT_ADDRESS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"INFURA_KEY\":\"072af9ca687749f98af35ca246a5a0e5\",\"INFURA_ENDPOINT\":\"https://ropsten.infura.io/v3/072af9ca687749f98af35ca246a5a0e5\",\"INFURA_SECRET\":\"5966d66c634e4b2583c8e2635d0fd7b0\",\"MNEMONIC\":\"hard typical deputy favorite below organ pause shed bring artefact acquire giraffe\",\"ROPSTEN_CONTRACT_ADDRESS\":\"0xED5fCA1d7e2C95a732897F7b09C6272a623D8fD4\",\"LOCAL_CONTRACT_ADDRESS\":\"0x1a4DDAd87AADA93bDa10607ACE873735621F707F\"}");

/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/campaigns/new.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sharan/kickstarter-campaign/pages/campaigns/new.js */"./pages/campaigns/new.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=new.js.map