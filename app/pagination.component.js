System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PaginationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PaginationComponent = (function () {
                function PaginationComponent() {
                    this.pageSize = 10;
                    this.displayedData = any[];
                    this.shouldBeVisible = false;
                    numPages = data.length / pageSize;
                    if (numPages > 1) {
                        this.shouldBeVisible = true;
                        this.displayedData = getData(1);
                    }
                }
                PaginationComponent.prototype.getData = function (pageNum) {
                    if (pageNum) {
                        return dataOnPage(pageNum);
                    }
                    else {
                        return this.data;
                    }
                };
                PaginationComponent.prototype.dataOnPage = function (pageNum) {
                    this.displayedData = any[];
                    for (int; i = pageSize * pageNum; i < pageSize * (pageNum + 1) && i < data.length)
                        ;
                    i++;
                    {
                        this.displayedData.push(this.data[i]);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "pageSize", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], PaginationComponent.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "shouldBeVisible", void 0);
                PaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        template: "\n    <nav aria-label=\"Page navigation\" *ngIf=\"shouldBeVisible\">\n      <ul class=\"pagination\">\n        <li>\n          <a href=\"#\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n          </a>\n        </li>\n        <li><a href=\"#\">1</a></li>\n        <li><a href=\"#\">2</a></li>\n        <li><a href=\"#\">3</a></li>\n        <li><a href=\"#\">4</a></li>\n        <li><a href=\"#\">5</a></li>\n        <li>\n          <a href=\"#\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginationComponent);
                return PaginationComponent;
            }());
            exports_1("PaginationComponent", PaginationComponent);
        }
    }
});
//# sourceMappingURL=pagination.component.js.map