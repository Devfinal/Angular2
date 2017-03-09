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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DashService = (function () {
    function DashService(http) {
        this.http = http;
        this.dashesUrl = 'app/dashboard/dash.json';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DashService.prototype.getDashes = function () {
        return this.http.get(this.dashesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
        /*
                return this.http.get(this.dashesUrl)
                .toPromise()
                .then(response =>response.json().data as Dash[])
                .catch(this.handleError);
        */
        //return Promise.resolve( DASHES);
    };
    DashService.prototype.handleError = function (error) {
        console.error('An error has  occured', error);
        return Promise.reject(error.message || error);
    };
    DashService.prototype.getDash = function (id) {
        return this.getDashes()
            .then(function (dashes) { return dashes.find(function (dash) { return dash.id === id; }); });
    };
    DashService.prototype.update = function (dash) {
        var url = this.dashesUrl + "/" + dash.id;
        return this.http
            .put(url, JSON.stringify(dash), { headers: this.headers })
            .toPromise()
            .then(function () { return dash; })
            .catch(this.handleError);
    };
    DashService.prototype.create = function (name) {
        return this.http
            .post(this.dashesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    DashService.prototype.delete = function (id) {
        var url = this.dashesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return DashService;
}());
DashService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DashService);
exports.DashService = DashService;
//# sourceMappingURL=dashboard.service.js.map