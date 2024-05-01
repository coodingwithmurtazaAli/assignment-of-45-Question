var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestoVisit = ["china", "Danmark", "Brazil", "Argentina"];
console.log("oreignalorder", countriestoVisit);
//Print an array  in alphabetical  order with out modifing actiual array.
console.log("Alphabetical", __spreadArray([], countriestoVisit, true).sort());
//Show that actiual array in orignal order.
console.log("orignal order", countriestoVisit);
//Print an array in reversible order.
console.log("reversible order", __spreadArray([], countriestoVisit, true).reverse());
//Show that actiual array in orignal order.
console.log("orignal order", countriestoVisit);
//Print an orignal array in reversible order.
console.log("orignal array has been changed", countriestoVisit.reverse());
//Print an orignal array in orignal order.
console.log("Actiual array in orignal order", countriestoVisit.reverse());
//Print an array to show that it's order has been changed in alphabetical ordr.
console.log("actiual array in alphabeticalorder", countriestoVisit.sort());
//Print an array in it's orignal order.
console.log("array in orignal order", countriestoVisit.reverse());
