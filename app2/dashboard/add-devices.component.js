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
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var AddDevicesComponent = (function () {
    function AddDevicesComponent(router, http, route, location) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.location = location;
        this.id = -1;
        this.title = "Add Devices";
        this.rowsOnPage = 5;
        this.apiurl = "api/devices/";
        this.devices = {
            udid: '',
            imsi: '',
            imei: '',
            iccid: '',
            euiccid: '',
            lastactivity: '',
            ip: '',
            state: ''
        };
        this.newconnection = {
            profile_priority: 2,
            customer_id: '',
            connection_type: 'Rest-API',
            assigned_server: '',
            customer_backhaul_settings: [{
                    loginid: '',
                    password: '',
                    remote_host: '',
                    token_id: '',
                    uplink_route: '',
                    downlink_route: '',
                    error_route: '',
                    hello_route: '',
                    amqp_pub_code: '',
                    amqp_sub_code: '',
                }]
        };
        this.btn_name = "Add";
        this.input_disabled = false;
        /*
        this.route.params
          .subscribe(params => {
            if(params['id'])
              this.http.get(this.apiurl + params['id'])
                .map(res =>res.json())
                .subscribe(servicetemplate =>{
                  this.servicetemplate = servicetemplate;this.id = params['id'];;this.btn_name="Save";
    
                  this.getConnectionProfiles(this.servicetemplate.customer_id);
    //              this.newconnection.customer_id =this.servicetemplate.customer_id;
    //              this.servicetemplate.dedicated_connection_profile= (this.servicetemplate.dedicated_connection_profile === "true");
    //              this.input_disabled = this.servicetemplate.dedicated_connection_profile;
                });
          });*/
    }
    AddDevicesComponent.prototype.ngOnInit = function () {
    };
    AddDevicesComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddDevicesComponent.prototype.getConnectionProfiles = function (customer_id) {
        var _this = this;
        this.http.get('api/connectionprofiles/customer_id/' + customer_id)
            .map(function (res) { return res.json(); })
            .subscribe(function (connectionprofiles) {
            _this.connectionprofiles = connectionprofiles;
            //this.connectionprofiles.dedicat
            console.log(_this.connectionprofiles);
        });
    };
    AddDevicesComponent.prototype.addDevices = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.apiurl, JSON.stringify(this.devices), { headers: headers })
            .subscribe(function (x) {
            _this.goBack();
        });
    };
    return AddDevicesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AddDevicesComponent.prototype, "btn_name", void 0);
AddDevicesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-add-devices',
        templateUrl: 'add-devices.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        router_2.ActivatedRoute,
        common_1.Location])
], AddDevicesComponent);
exports.AddDevicesComponent = AddDevicesComponent;
//# sourceMappingURL=add-devices.component.js.map