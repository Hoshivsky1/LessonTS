"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "f";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Success money',
    statusCode: StatusCode.SUCCESS
};
if (res.statusCode === StatusCode.SUCCESS) {
}
const res2 = 1 /* Roles.ADMIN */;
//1 = success
//2 - in proces
//3 - cancel
