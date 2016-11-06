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
import * as import0 from '../../../app/nav/nav.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/common/src/location/location_strategy';
import * as import14 from '@angular/router/src/directives/router_link';
export var Wrapper_NavComponent = (function () {
    function Wrapper_NavComponent() {
        this.changed = false;
        this.context = new import0.NavComponent();
    }
    Wrapper_NavComponent.prototype.detectChangesInInputProps = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    Wrapper_NavComponent.prototype.detectChangesInHostProps = function (view, el, throwOnChange) {
    };
    return Wrapper_NavComponent;
}());
var renderType_NavComponent_Host = null;
var _View_NavComponent_Host0 = (function (_super) {
    __extends(_View_NavComponent_Host0, _super);
    function _View_NavComponent_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavComponent_Host0, renderType_NavComponent_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_NavComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer, 'my-nav', import4.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_NavComponent0(this.viewUtils, this.injector(0), this._appEl_0);
        this._NavComponent_0_4 = new Wrapper_NavComponent();
        this._appEl_0.initComponent(this._NavComponent_0_4.context, [], compView_0);
        compView_0.create(this._NavComponent_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_NavComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NavComponent) && (0 === requestNodeIndex))) {
            return this._NavComponent_0_4.context;
        }
        return notFoundResult;
    };
    _View_NavComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavComponent_0_4.detectChangesInInputProps(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._NavComponent_0_4.detectChangesInHostProps(this, this._el_0, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_NavComponent_Host0;
}(import1.AppView));
function viewFactory_NavComponent_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NavComponent_Host === null)) {
        (renderType_NavComponent_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_NavComponent_Host0(viewUtils, parentInjector, declarationEl);
}
export var NavComponentNgFactory = new import9.ComponentFactory('my-nav', viewFactory_NavComponent_Host0, import0.NavComponent);
var styles_NavComponent = [];
var renderType_NavComponent = null;
var _View_NavComponent0 = (function (_super) {
    __extends(_View_NavComponent0, _super);
    function _View_NavComponent0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_NavComponent0, renderType_NavComponent, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
        this._arr_60 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._arr_61 = import4.pureProxy1(function (p0) {
            return [p0];
        });
        this._arr_62 = import4.pureProxy1(function (p0) {
            return [p0];
        });
    }
    _View_NavComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = import4.createRenderElement(this.renderer, parentRenderNode, 'nav', new import4.InlineArray2(2, 'class', 'navbar navbar-inverse navbar-fixed-top'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n	', null);
        this._el_2 = import4.createRenderElement(this.renderer, this._el_0, 'div', new import4.InlineArray2(2, 'class', 'container-fluid'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_4 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_5 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_7 = import4.createRenderElement(this.renderer, this._el_5, 'button', new import4.InlineArray16(10, 'aria-expanded', 'false', 'class', 'navbar-toggle collapsed', 'data-target', '#bs-example-navbar-collapse-1', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_9 = import4.createRenderElement(this.renderer, this._el_7, 'span', new import4.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Toggle navigation', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_12 = import4.createRenderElement(this.renderer, this._el_7, 'span', new import4.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_13 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_14 = import4.createRenderElement(this.renderer, this._el_7, 'span', new import4.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_15 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_16 = import4.createRenderElement(this.renderer, this._el_7, 'span', new import4.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_17 = this.renderer.createText(this._el_7, '\n      ', null);
        this._text_18 = this.renderer.createText(this._el_5, '\n			', null);
        this._el_19 = import4.createRenderElement(this.renderer, this._el_5, 'a', new import4.InlineArray4(4, 'class', 'navbar-brand', 'href', '#'), null);
        this._text_20 = this.renderer.createText(this._el_19, 'Brand', null);
        this._text_21 = this.renderer.createText(this._el_5, '\n		', null);
        this._text_22 = this.renderer.createText(this._el_2, '\n\n		', null);
        this._text_23 = this.renderer.createText(this._el_2, '\n		', null);
        this._el_24 = import4.createRenderElement(this.renderer, this._el_2, 'div', new import4.InlineArray4(4, 'class', 'collapse navbar-collapse', 'id', 'bs-example-navbar-collapse-1'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n			', null);
        this._el_26 = import4.createRenderElement(this.renderer, this._el_24, 'ul', new import4.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n				', null);
        this._text_28 = this.renderer.createText(this._el_26, '\n				', null);
        this._el_29 = import4.createRenderElement(this.renderer, this._el_26, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._el_30 = import4.createRenderElement(this.renderer, this._el_29, 'a', import4.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_30_3 = new import10.Wrapper_RouterLinkWithHref(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._text_31 = this.renderer.createText(this._el_30, 'Home', null);
        this._text_32 = this.renderer.createText(this._el_26, '\n				', null);
        this._el_33 = import4.createRenderElement(this.renderer, this._el_26, 'li', new import4.InlineArray2(2, 'class', 'dropdown'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n					', null);
        this._el_35 = import4.createRenderElement(this.renderer, this._el_33, 'a', new import4.InlineArray16(12, 'aria-expanded', 'false', 'aria-haspopup', 'true', 'class', 'dropdown-toggle', 'data-toggle', 'dropdown', 'href', '#', 'role', 'button'), null);
        this._text_36 = this.renderer.createText(this._el_35, 'Apps', null);
        this._el_37 = import4.createRenderElement(this.renderer, this._el_35, 'span', new import4.InlineArray2(2, 'class', 'caret'), null);
        this._text_38 = this.renderer.createText(this._el_33, '\n					', null);
        this._el_39 = import4.createRenderElement(this.renderer, this._el_33, 'ul', new import4.InlineArray2(2, 'class', 'dropdown-menu'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n						', null);
        this._el_41 = import4.createRenderElement(this.renderer, this._el_39, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._el_42 = import4.createRenderElement(this.renderer, this._el_41, 'a', import4.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_42_3 = new import10.Wrapper_RouterLinkWithHref(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._text_43 = this.renderer.createText(this._el_42, 'Memory grid', null);
        this._text_44 = this.renderer.createText(this._el_39, '\n						', null);
        this._el_45 = import4.createRenderElement(this.renderer, this._el_39, 'li', import4.EMPTY_INLINE_ARRAY, null);
        this._el_46 = import4.createRenderElement(this.renderer, this._el_45, 'a', import4.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_46_3 = new import10.Wrapper_RouterLinkWithHref(this.parentInjector.get(import11.Router), this.parentInjector.get(import12.ActivatedRoute), this.parentInjector.get(import13.LocationStrategy));
        this._text_47 = this.renderer.createText(this._el_46, 'Team', null);
        this._text_48 = this.renderer.createText(this._el_39, '\n					', null);
        this._text_49 = this.renderer.createText(this._el_33, '\n				', null);
        this._text_50 = this.renderer.createText(this._el_26, '\n			', null);
        this._text_51 = this.renderer.createText(this._el_24, '\n			', null);
        this._text_52 = this.renderer.createText(this._el_24, '\n		', null);
        this._text_53 = this.renderer.createText(this._el_2, '\n		', null);
        this._text_54 = this.renderer.createText(this._el_2, '\n	', null);
        this._text_55 = this.renderer.createText(this._el_0, '\n	', null);
        this._text_56 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = this.renderer.listen(this._el_30, 'click', this.eventHandler(this._handle_click_30_0.bind(this)));
        var disposable_1 = this.renderer.listen(this._el_42, 'click', this.eventHandler(this._handle_click_42_0.bind(this)));
        var disposable_2 = this.renderer.listen(this._el_46, 'click', this.eventHandler(this._handle_click_46_0.bind(this)));
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._text_54,
            this._text_55,
            this._text_56
        ], [
            disposable_0,
            disposable_1,
            disposable_2
        ], []);
        return null;
    };
    _View_NavComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLinkWithHref) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._RouterLinkWithHref_30_3.context;
        }
        if (((token === import14.RouterLinkWithHref) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._RouterLinkWithHref_42_3.context;
        }
        if (((token === import14.RouterLinkWithHref) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._RouterLinkWithHref_46_3.context;
        }
        return notFoundResult;
    };
    _View_NavComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_30_0_0 = this._arr_60('');
        this._RouterLinkWithHref_30_3.check_routerLink(currVal_30_0_0, throwOnChange, false);
        this._RouterLinkWithHref_30_3.detectChangesInInputProps(this, this._el_30, throwOnChange);
        var currVal_42_0_0 = this._arr_61('/memory-grid');
        this._RouterLinkWithHref_42_3.check_routerLink(currVal_42_0_0, throwOnChange, false);
        this._RouterLinkWithHref_42_3.detectChangesInInputProps(this, this._el_42, throwOnChange);
        var currVal_46_0_0 = this._arr_62('/team');
        this._RouterLinkWithHref_46_3.check_routerLink(currVal_46_0_0, throwOnChange, false);
        this._RouterLinkWithHref_46_3.detectChangesInInputProps(this, this._el_46, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this._RouterLinkWithHref_30_3.detectChangesInHostProps(this, this._el_30, throwOnChange);
        this._RouterLinkWithHref_42_3.detectChangesInHostProps(this, this._el_42, throwOnChange);
        this._RouterLinkWithHref_46_3.detectChangesInHostProps(this, this._el_46, throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_NavComponent0.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_30_3.context.ngOnDestroy();
        this._RouterLinkWithHref_42_3.context.ngOnDestroy();
        this._RouterLinkWithHref_46_3.context.ngOnDestroy();
    };
    _View_NavComponent0.prototype._handle_click_30_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_30_0 = (this._RouterLinkWithHref_30_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_30_0);
    };
    _View_NavComponent0.prototype._handle_click_42_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_42_0 = (this._RouterLinkWithHref_42_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_42_0);
    };
    _View_NavComponent0.prototype._handle_click_46_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_46_0 = (this._RouterLinkWithHref_46_3.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
        return (true && pd_46_0);
    };
    return _View_NavComponent0;
}(import1.AppView));
export function viewFactory_NavComponent0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_NavComponent === null)) {
        (renderType_NavComponent = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_NavComponent, {}));
    }
    return new _View_NavComponent0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=nav.component.ngfactory.js.map