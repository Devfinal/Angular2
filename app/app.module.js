"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_sidebar_1 = require("ng2-sidebar");
var angular2_datatable_1 = require("angular2-datatable");
//import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
var hero_detail_component_1 = require("./heroes/hero-detail/hero-detail.component");
var app_component_1 = require("./app.component");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_service_1 = require("./heroes/shared/hero.service");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var home_component_1 = require("./regions/home/home.component");
var add_region_component_1 = require("./regions/home/add-region.component");
var customers_component_1 = require("./regions/customers/customers.component");
var add_customer_component_1 = require("./regions/customers/add-customer.component");
var networks_component_1 = require("./regions/networks/networks.component");
var add_network_component_1 = require("./regions/networks/add-network.component");
var profiles_component_1 = require("./regions/tariffprofiles/profiles.component");
var add_profile_component_1 = require("./regions/tariffprofiles/add-profile.component");
var contracts_component_1 = require("./regions/contracts/contracts.component");
var add_contract_component_1 = require("./regions/contracts/add-contract.component");
var region_service_1 = require("./regions/shared/region.service");
//for the site
var dashboard_service_1 = require("./dashboard/dashboard.service");
var app_routing_module_1 = require("./app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
            http_1.HttpModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            ng2_sidebar_1.SidebarModule,
            angular2_datatable_1.DataTableModule,
        ],
        declarations: [app_component_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            dashboard_component_1.DashboardComponent,
            home_component_1.HomeComponent,
            add_region_component_1.AddRegionComponent,
            customers_component_1.CustomersComponent,
            add_customer_component_1.AddCustomerComponent,
            networks_component_1.NetworksComponent,
            add_network_component_1.AddNetworkComponent,
            profiles_component_1.ProfilesComponent,
            add_profile_component_1.AddProfileComponent,
            contracts_component_1.ContractsComponent,
            add_contract_component_1.AddContractComponent,
        ],
        providers: [
            hero_service_1.HeroService,
            dashboard_service_1.DashService,
            region_service_1.RegionService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map