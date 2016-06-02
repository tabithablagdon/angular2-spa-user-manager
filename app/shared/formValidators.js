System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormValidators;
    return {
        setters:[],
        execute: function() {
            FormValidators = (function () {
                function FormValidators() {
                }
                FormValidators.validEmail = function (control) {
                    var emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var isValid = emailTest.test(control.value);
                    return isValid ? null : { validEmail: true };
                };
                return FormValidators;
            }());
            exports_1("FormValidators", FormValidators);
        }
    }
});
//# sourceMappingURL=formValidators.js.map