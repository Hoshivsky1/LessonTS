//!Union====================================================
function logoId(id:string | number | boolean) {
    if(typeof id === 'string') {
        console.log(id)
    } else if (typeof id === 'number'){
        console.log(id)
    }
}

function logError(err: string | string[]) {
    if(Array.isArray(err)) {
        console.log(err)
    } else {
        console.log(err);
    }
}

function logObj(obj: {a: number}  | {b: number}) {
    if('a' in obj) {
        console.log(obj.a)
    } else {
        console.log(obj.b);
    }
}

function logMlt(a:string | number, b:string | boolean) {
    if (a===b) {

    }
}

//!Literal Types===============================================
