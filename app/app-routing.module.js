"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_detail_component_1 = require("./heroes/hero-detail/hero-detail.component");
var home_component_1 = require("./regions/home/home.component");
var customers_component_1 = require("./regions/customers/customers.component");
var add_region_component_1 = require("./regions/home/add-region.component");
var add_customer_component_1 = require("./regions/customers/add-customer.component");
var networks_component_1 = require("./regions/networks/networks.component");
var add_network_component_1 = require("./regions/networks/add-network.component");
var profiles_component_1 = require("./regions/tariffprofiles/profiles.component");
var add_profile_component_1 = require("./regions/tariffprofiles/add-profile.component");
var contracts_component_1 = require("./regions/contracts/contracts.component");
var add_contract_component_1 = require("./regions/contracts/add-contract.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'regions_home', component: home_component_1.HomeComponent },
    { path: 'addregion', component: add_region_component_1.AddRegionComponent },
    { path: 'regions_customers', component: customers_component_1.CustomersComponent },
    { path: 'addcustomer', component: add_customer_component_1.AddCustomerComponent },
    { path: 'editregion/:id', component: add_region_component_1.AddRegionComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'editcustomer/:id', component: add_customer_component_1.AddCustomerComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'regions_network', component: networks_component_1.NetworksComponent },
    { path: 'addnetwork', component: add_network_component_1.AddNetworkComponent },
    { path: 'editnetwork/:id', component: add_network_component_1.AddNetworkComponent },
    { path: 'regions_tariff', component: profiles_component_1.ProfilesComponent },
    { path: 'addprofile', component: add_profile_component_1.AddProfileComponent },
    { path: 'editprofile/:id', component: add_profile_component_1.AddProfileComponent },
    { path: 'regions_contracts', component: contracts_component_1.ContractsComponent },
    { path: 'addcontract', component: add_contract_component_1.AddContractComponent },
    { path: 'editcontract/:id', component: add_contract_component_1.AddContractComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map