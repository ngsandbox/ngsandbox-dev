/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../app/TourOfHeroes/providers/team-firebase-provider.service';
import * as import5 from '../../app/TourOfHeroes/services/team.service';
import * as import6 from '../../app/nav/sb-router.service';
import * as import7 from '@angular/core/src/linker/view_utils';
import * as import9 from '@angular/core/src/linker/view_type';
import * as import10 from '@angular/core/src/change_detection/change_detection';
import * as import11 from '@angular/router/src/router';
import * as import12 from '../../app/TourOfHeroes/providers/team-provider.service';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from './nav/nav.component.ngfactory';
import * as import16 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '../../app/nav/nav.component';
import * as import20 from '@angular/router/src/directives/router_outlet';
export var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this.changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = null;
var _View_AppComponent_Host0 = (function (_super) {
    __extends(_View_AppComponent_Host0, _super);
    function _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent_Host0, renderType_AppComponent_Host, import9.ViewType.HOST, viewUtils, parentInjector, declarationEl, import10.ChangeDetectorStatus.CheckAlways);
    }
    Object.defineProperty(_View_AppComponent_Host0.prototype, "_TeamProvider_0_5", {
        get: function () {
            if ((this.__TeamProvider_0_5 == null)) {
                (this.__TeamProvider_0_5 = new import4.TeamFirebaseProvider());
            }
            return this.__TeamProvider_0_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_AppComponent_Host0.prototype, "_TeamService_0_6", {
        get: function () {
            if ((this.__TeamService_0_6 == null)) {
                (this.__TeamService_0_6 = new import5.TeamService(this._TeamProvider_0_5));
            }
            return this.__TeamService_0_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(_View_AppComponent_Host0.prototype, "_SbRouterService_0_7", {
        get: function () {
            if ((this.__SbRouterService_0_7 == null)) {
                (this.__SbRouterService_0_7 = new import6.SbRouterService(this.parentInjector.get(import11.Router)));
            }
            return this.__SbRouterService_0_7;
        },
        enumerable: true,
        configurable: true
    });
    _View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import7.selectOrCreateRenderHostElement(this.renderer, 'my-app', import7.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AppComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AppComponent_0_4 = new Wrapper_AppComponent();
        this._appEl_0.initComponent(this._AppComponent_0_4.context, [], compView_0);
        compView_0.create(this._AppComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_4.context;
        }
        if (((token === import12.TeamProvider) && (0 === requestNodeIndex))) {
            return this._TeamProvider_0_5;
        }
        if (((token === import5.TeamService) && (0 === requestNodeIndex))) {
            return this._TeamService_0_6;
        }
        if (((token === import6.SbRouterService) && (0 === requestNodeIndex))) {
            return this._SbRouterService_0_7;
        }
        return notFoundResult;
    };
    _View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._AppComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_AppComponent_Host0;
}(import1.AppView));
function viewFactory_AppComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent_Host === null)) {
        (renderType_AppComponent_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_AppComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var AppComponentNgFactory = new import14.ComponentFactory('my-app', viewFactory_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = null;
var _View_AppComponent0 = (function (_super) {
    __extends(_View_AppComponent0, _super);
    function _View_AppComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_AppComponent0, renderType_AppComponent, import9.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import10.ChangeDetectorStatus.CheckAlways);
    }
    _View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._el_1 = import7.createRenderElement(this.renderer, parentRenderNode, 'my-nav', import7.EMPTY_INLINE_ARRAY, null);
        this._appEl_1 = new import3.AppElement(1, null, this, this._el_1);
        var compView_1 = import15.viewFactory_NavComponent0(this.viewUtils, this.injector(1), this._appEl_1);
        this._NavComponent_1_4 = new import15.Wrapper_NavComponent();
        this._appEl_1.initComponent(this._NavComponent_1_4.context, [], compView_1);
        compView_1.create(this._NavComponent_1_4.context, [], null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n	', null);
        this._el_3 = import7.createRenderElement(this.renderer, parentRenderNode, 'div', new import7.InlineArray2(2, 'class', 'container'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._el_5 = import7.createRenderElement(this.renderer, this._el_3, 'router-outlet', import7.EMPTY_INLINE_ARRAY, null);
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        this._RouterOutlet_5_5 = new import16.Wrapper_RouterOutlet(this.parentInjector.get(import17.RouterOutletMap), this._appEl_5.vcRef, this.parentInjector.get(import18.ComponentFactoryResolver), null);
        this._text_6 = this.renderer.createText(this._el_3, '\n	', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    _View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.NavComponent) && (1 === requestNodeIndex))) {
            return this._NavComponent_1_4.context;
        }
        if (((token === import20.RouterOutlet) && (5 === requestNodeIndex))) {
            return this._RouterOutlet_5_5.context;
        }
        return notFoundResult;
    };
    _View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavComponent_1_4.detectChangesInInputProps(this, this._el_1, throwOnChange);
        this._RouterOutlet_5_5.detectChangesInInputProps(this, this._el_5, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NavComponent_1_4.detectChangesInHostProps(this, this._el_1, throwOnChange);
        this._RouterOutlet_5_5.detectChangesInHostProps(this, this._el_5, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_AppComponent0.prototype.destroyInternal = function () {
        this._RouterOutlet_5_5.context.ngOnDestroy();
    };
    return _View_AppComponent0;
}(import1.AppView));
export function viewFactory_AppComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AppComponent === null)) {
        (renderType_AppComponent = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, styles_AppComponent, {}));
    }
    return new _View_AppComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=app.component.ngfactory.js.map