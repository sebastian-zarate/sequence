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
Object.defineProperty(exports, "__esModule", { value: true });
var GameRound_1 = require("./GameRound");
var readline = require("readline/promises");
var Game = /** @class */ (function () {
    function Game() {
        this.gameRounds = [];
        this.startNewRound();
    }
    Game.prototype.startNewRound = function () {
        this.gameRounds.push(new GameRound_1.default());
    };
    Object.defineProperty(Game.prototype, "score", {
        get: function () {
            return this.gameRounds.reduce(function (acc, round) { return acc + round.score; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "currentRound", {
        get: function () {
            return this.gameRounds[this.gameRounds.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.printPuzzle = function () {
        var _a = this.currentRound.sequence, v0 = _a[0], v1 = _a[1], v3 = _a[2];
        console.log("Find the solution to: ".concat(v0, " ").concat(v1, " _ ").concat(v3));
    };
    Game.prototype.playRound = function () {
        return __awaiter(this, void 0, void 0, function () {
            var consoleInterface, candidate, _a, win;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.currentRound.init()];
                    case 1:
                        _b.sent();
                        this.printPuzzle();
                        consoleInterface = readline.createInterface({ input: process.stdin, output: process.stdout });
                        _a = parseInt;
                        return [4 /*yield*/, consoleInterface.question('Enter your solution: ')];
                    case 2:
                        candidate = _a.apply(void 0, [_b.sent(), 10]);
                        consoleInterface.close();
                        win = this.currentRound.play(candidate);
                        console.log(win ? 'Correct!' : 'Incorrect!', "Current score: ".concat(this.score));
                        this.startNewRound();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playRound()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return Game;
}());
exports.default = Game;
