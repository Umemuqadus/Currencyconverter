//!usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import inquirer from "inquirer";
function currencyconverter() {
    return __awaiter(this, void 0, void 0, function () {
        var user_input, amount, currency, Dollar, Euro, Yen, Yuan, Dirham, Riyal, Dong, Taka, Rupiah, Peso, Baht, Lira, Dinar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, inquirer.prompt([{
                                name: 'amount',
                                type: 'input',
                                message: 'Write the Pakistani rupee amount.'
                            }])];
                case 1:
                    user_input = _a.sent();
                    amount = Number(user_input.amount);
                    return [4 /*yield*/, inquirer.prompt([{
                                name: 'currency',
                                type: 'list',
                                message: 'Select the currency.',
                                choices: ["United States Dollar", "Euro", "Japanese Yen", "Chinese Yuan", "United Arab Emirates Dirham", "Saudi Riyal", "Vietnamese Dong", "Bangladeshi Taka", "Indonesian Rupiah", "Philippine Peso", "Thai Baht", "Turkish Lira", "Kuwait Dinar"],
                            }])];
                case 2:
                    currency = _a.sent();
                    switch (currency.currency) {
                        case "United States Dollar":
                            Dollar = amount / 278;
                            console.log(Dollar + " " + "Dollars.");
                            break;
                        case "Euro":
                            Euro = amount / 300;
                            console.log(Euro + " " + 'Euros.');
                            break;
                        case "Japanese Yen":
                            Yen = amount / 1.833;
                            console.log(Yen + " " + 'Yens.');
                            break;
                        case "Chinese Yuan":
                            Yuan = amount / 38.45;
                            console.log(Yuan + " " + 'Yauns.');
                            break;
                        case "United Arab Emirates Dirham":
                            Dirham = amount / 75.71;
                            console.log(Dirham + " " + 'Dirhams.');
                            break;
                        case "Saudi Riyal":
                            Riyal = amount / 76.25;
                            console.log(Riyal + " " + "Riyals.");
                            break;
                        case "Vietnamese Dong":
                            Dong = amount / 0.0112;
                            console.log(Dong + " " + "Dongs.");
                            break;
                        case "Bangladeshi Taka":
                            Taka = amount / 2;
                            console.log(Taka + " " + "Takas.");
                            break;
                        case "Indonesian Rupiah":
                            Rupiah = amount / 0.0174;
                            console.log(Rupiah + " " + "Rupiahs.");
                            break;
                        case "Philippine Peso":
                            Peso = amount / 4.94;
                            console.log(Peso + " " + 'Pesos.');
                            break;
                        case "Thai Baht":
                            Baht = amount / 7.59;
                            console.log(Baht + " " + 'Bahts.');
                            break;
                        case "Turkish Lira":
                            Lira = amount / 8.64;
                            console.log(Lira + " " + 'Liras.');
                            break;
                        case "Kuwait Dinar":
                            Dinar = amount / 900;
                            console.log(Dinar + " " + 'Dinars.');
                            break;
                    }
                    return [3 /*break*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    });
}
currencyconverter();
