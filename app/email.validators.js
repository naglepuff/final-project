System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EmailValidators;
    return {
        setters:[],
        execute: function() {
            EmailValidators = (function () {
                function EmailValidators() {
                }
                EmailValidators.cannotBeInvalid = function (control) {
                    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
                    // if(!control.value){
                    //     return {"Please provide a valid email": true};
                    // }
                    if (!control.value || control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
                        return { "Please provide a valid email": true };
                    }
                    return null;
                };
                return EmailValidators;
            }());
            exports_1("EmailValidators", EmailValidators);
        }
    }
});
//# sourceMappingURL=email.validators.js.map