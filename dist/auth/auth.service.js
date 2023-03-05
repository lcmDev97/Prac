"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    async registerNewUser(newUser) {
        const existedNickname = await this.userService.findByNickname(newUser.nickname);
        if (existedNickname) {
            throw new common_1.HttpException("이미 사용중인 닉네임 입니다.", 409);
        }
        return this.userService.save(newUser);
    }
    async validateUser(user) {
        let foundUser = await this.userService.findByNickname(user.nickname);
        if (!foundUser || user.password !== foundUser.password) {
            throw new common_1.HttpException("아이디 또는 비밀번호를 확인해 주세요.", 400);
        }
        return foundUser;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map