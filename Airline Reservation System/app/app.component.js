System.register(['angular2/core', "./Templates/About-Us.component", "./Templates/flights.component", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, About_Us_component_1, flights_component_1, router_1, router_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (About_Us_component_1_1) {
                About_Us_component_1 = About_Us_component_1_1;
            },
            function (flights_component_1_1) {
                flights_component_1 = flights_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n        <header>\n            <nav>\n              <a [routerLink]=\"AboutUs\">Aboutus</a>\n              <a [routerLink]=\"flights\">Flights</a>\n            </nav>\n        </header>\n        <div class=\"main\">\n          <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [About_Us_component_1.AboutUsComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/AboutUs', name: 'AboutUs', component: About_Us_component_1.AboutUsComponent },
                        { path: '/flights', name: 'flights', component: flights_component_1.Flightscomponent, useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO2dCQUVBLENBQUM7Z0JBdkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLDJSQVVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLHFDQUFnQixFQUFFLDBCQUFpQixDQUFDO3FCQUNwRCxDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1gsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFDO3dCQUNoRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQztxQkFDckYsQ0FBQzs7Z0NBQUE7Z0JBSUYsbUJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVDQUVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7QWJvdXRVc0NvbXBvbmVudH0gZnJvbSBcIi4vVGVtcGxhdGVzL0Fib3V0LVVzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGbGlnaHRzY29tcG9uZW50fSBmcm9tIFwiLi9UZW1wbGF0ZXMvZmxpZ2h0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJBYm91dFVzXCI+QWJvdXR1czwvYT5cbiAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiZmxpZ2h0c1wiPkZsaWdodHM8L2E+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtBYm91dFVzQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gIHtwYXRoOiAnL0Fib3V0VXMnLCBuYW1lOiAnQWJvdXRVcycsIGNvbXBvbmVudDogQWJvdXRVc0NvbXBvbmVudH0sXG4gIHtwYXRoOiAnL2ZsaWdodHMnLCBuYW1lOiAnZmxpZ2h0cycsIGNvbXBvbmVudDogRmxpZ2h0c2NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXX0=
