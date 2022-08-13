"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Status;
(function (Status) {
    Status["Published"] = "published";
    Status["Draft"] = "draft";
    Status["Deleted"] = "deleted";
})(Status || (Status = {}));
function getFaqs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/faqs', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
//!Tuples Array=================================
const skill = [1, 'mAX', true, true, false];
const sk = ['font', 'color'];
//!Object =================================
let info = {
    firsname: 'Maxim',
    surname: 'Hoshivskyi',
    age: 18,
    skills: {
        dev: true,
        figma: true
    }
};
//!Types Function==============================
function getName(name, surname) {
    return name + surname;
}
