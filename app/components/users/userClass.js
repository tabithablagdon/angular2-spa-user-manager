System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Address, UserClass;
    return {
        setters:[],
        execute: function() {
            Address = (function () {
                function Address() {
                }
                return Address;
            }());
            exports_1("Address", Address);
            UserClass = (function () {
                function UserClass() {
                    this.address = new Address();
                }
                return UserClass;
            }());
            exports_1("UserClass", UserClass);
        }
    }
});
//# sourceMappingURL=userClass.js.map