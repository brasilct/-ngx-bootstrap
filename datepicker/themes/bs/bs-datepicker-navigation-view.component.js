import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models/index';
import { calendar } from '../../../chronos/moment/calendar';
var BsDatepickerNavigationViewComponent = (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
    }
    BsDatepickerNavigationViewComponent.prototype.navTo = function (value, down) {
        debugger;
        let month = value.month.getMonth();
        let newMonth = 1;
        if (down) {         
            newMonth = BsNavigationDirection.DOWN;          
        } else {         
            newMonth = BsNavigationDirection.UP;          
        }
        
        if(month == 9){

            var data = {
                date: Date,
                label: String,
                isDisabled: Boolean,
                isHovered: Boolean
              };
                          

            value.month.setMonth(value.month.getMonth() + 1);
            
            data.date = value.month;
            data.label = 'novembro';
            data.isHovered = true;
            data.isDisabled = false;
            
            this.onSelect.emit(data);

            this.onNavigate.emit(newMonth);
            


        }
        else{       
             this.onNavigate.emit(newMonth);
        }

      };
    BsDatepickerNavigationViewComponent.prototype.view = function (viewMode) {
        debugger;

        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                          template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(calendar, true)\"><span>&lsaquo;</span>\n    </button>\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(calendar, false)\"><span>&rsaquo;</span>\n    </button>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDatepickerNavigationViewComponent.ctorParameters = function () { return []; };
    BsDatepickerNavigationViewComponent.propDecorators = {
        'calendar': [{ type: Input },],
        'onNavigate': [{ type: Output },],
        'onViewMode': [{ type: Output },],
        'onSelect': [{ type: Output },],
    };

    debugger;
    return BsDatepickerNavigationViewComponent;
}());
export { BsDatepickerNavigationViewComponent };
//# sourceMappingURL=bs-datepicker-navigation-view.component.js.map