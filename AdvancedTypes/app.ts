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
function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1{
    return 1;
}

fetchWithAuth('s', 'post');

let a: 'fwefwefwe'  = 'fwefwefwe';

let method = 'post';
//* або  const method = 'post';
fetchWithAuth('s', method as 'post');

//!Type Aliases
type httpMethod = 'post' | 'get';

function fetchWithAuths(url: string, method:httpMethod ): 1 | -1{
    return 1;
}
    //*1------------------
let user: {
    name: string,
    age: number,
    skils: string[]
} = {
    name: 'asd',
    age: 18,
    skils: ['1', '2']
}
    //*2--------------------
type User = {
    name: string,
    age: number,
    skills: string[]
} 
let user1: User = {
    name: 'asd',
    age: 18,
    skills: ['1', '2']
}
    //*3--------------------
type Role = {
    id:number,
}

type UserWithRole = User & Role;



let user2: UserWithRole = {
    name: 'asd',
    age: 18,
    skills: ['1', '2'],
    id: 12
}
    //*4--------------------
type UserWithRole2 = {
    user: User,
    role: Role,
}

let user3: UserWithRole2 = {
    user: {
        name: 'asd',
        age: 18,
        skills: ['1', '2'],
    },
    role: {
        id: 12,
    },
};

//!Iterfaces=================================================
interface Userr  {
    name: string,
    age: number,
    skills: string[]
    
    log: (id: number) => string;
} 

interface Rolee {
    roleId:number,
}

interface UserWithRolee extends Userr {
    roleId: number,
}

interface UserWithRoleee extends Userr,Rolee {
    createDate: Date,
}

let userr: UserWithRoleee = {
    name: 'Maxim',
    age: 18,
    skills: ['1', '2'],
    roleId: 12,
    createDate: new Date(),
    log(id){
        return '';
    }
};

interface UserD {
    [index: number]: Userr
}

type UserD2 = {
    [index: number]: Userr
}
    //*Альтернативне використання 
type ud2 = Record<number, Userr> 

//!Type vs Interfaces =============================================
//*Що краще в Interfaces
    //?1type так робити не може 
interface Us {
    name: string,
}

interface Us {
    age: number
}

const us: Us = {
    name: 'max',
    age: 33
}

//*Що краще в Type
    //?1 Interfaces так не може
type ID = string | number;

//!Optional =========================================================
interface User0 {
    login: string;
    password?: string;
}

const user0: User0 = {
    login: 'a@fff',
    // password: '1'
}

function mult(first: number, second?: number): number {
    if(!second) {
        return first * first;
    }
    return first * second;
}

mult(5);

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary';
    }
}

function testPas (user: UserPro) {
    const t = user.password?.type;
    const t1 = user.password ? user.password.type : undefined;
}

function test(param?: string) {
    const t = param ?? mult(5);
} 

//!Void===============================================================


