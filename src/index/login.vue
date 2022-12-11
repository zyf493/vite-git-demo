<template>
    <card></card>
    <div>
        <el-form>
            <el-input v-model="nameNumber" placeholder="Please input" />
            <el-input v-model="password" placeholder="Please input" />
        </el-form>
        <el-button type="primary" @click="summit(password)">{{userinfo.info.name}}</el-button>
    </div>
</template>
<script setup lang="ts">
import card from "../components/HelloWorld.vue"
import { ref,reactive,watch } from 'vue';

const count=ref<number>(99)
console.log(count)
console.log(count)
console.log(count)
console.log(count)
console.log(count)

console.log(count.value++)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(count.value)
console.log(123)
console.log('我是lgx')
console.log('我是zyf')


interface rrtt<T>{
    (value:T):T
}

let ioio:rrtt<boolean>=function<T>(value:T):T{
    return value
}
ioio(false)





interface Personme{
    eat():string
}

interface poepo extends Personme{
    paly(name:string):string
}

class gogogo implements poepo{
    name:string;
    constructor(name:string){
        this.name=name
    };
    eat(): string {
        return "我是eat"
    };
    paly(name: string): string {
        return "我是paly"
    }
}

let  wqert =new gogogo("皮皮虾")
console.log(wqert.name)



interface Classme {
    name:string;
    play(name:string):string;
}

class Meto implements Classme{
    name:string;
    constructor(name:string){
        this.name=name
    }
    play(name:string):string{
        return this.name+"和"+name+"在吃香"
    };
}

let abc6=new Meto("小红")
console.log(abc6.play("小黑"))

interface Arrayme {
    [index:number]:string
}

let arr4:Arrayme=["123456","454564"]
let arr6:[number,string?]=[1]
console.log(arr6)

console.log(arr4)



interface ertrop {
    (name:string,age:number):string
}


let abc1:ertrop=function(name:string,age:number):string{
    return "23"
}

console.log(abc1("ziyongfang",18));


interface Ajaxtype {
    url:string;
    type:string;
    data?:string;
    datatype:string
}

function ajax(config:Ajaxtype){
    let xhr=new XMLHttpRequest()
    xhr.open(config.type,config.url,true)
    xhr.send(config.data)
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4||xhr.status==20){
            console.log("success");
            
        }
    }
}

let objk={
    url:"https://www.baidu.com",
    type:"get",
    data:"马",
    datatype:"json"
}
ajax(objk)


interface Fullname {
    firstname:string;
    age:number;
    password?:number
}

function iqc(nameall:Fullname){
    console.log(nameall.firstname,nameall.age)
}
let opok={
     firstname:"罗贵兴",age:26,name:"156"
}
iqc(opok)


console.log(opo([1,2,3,4,5,6]))
let abc4=ref<boolean>(true)

watch(()=>abc4.value,(val:boolean)=>{
    console.log(val)
},{immediate:true})

const nameNumber= ref<any>()
const password= ref<any>()
interface  Userinfo {
    info:any
}
const userinfo = reactive({
    info:{
        name:"罗贵兴",
        age:"18"
    }
})

let isshow :boolean=false  //buer
let str:string="大帅比"
let number:number


//11
let arrfor:string[]=["1","2","3"]
//22
let arr8:Array<number>=[1,2,3,4]

let arr5:[number,string,any]=[1,"5",true]

//枚举

enum color {red,pink=3,blue}
let copycolor =color[4]
console.log(copycolor)

//
let num:number|boolean
num=true
console.log(num)

function fun():number{
    return 123
}

const arr:Array<any>=[1,2,3,4,5]
const arr1:string[]=["1"]

const summit=(name:string)=>{
    abc4.value=false
    userinfo.info.name=name
    return 1561
}
let abc:never
let cbd=function():string{
    return "456"
}
function dbc(name:string,age?:number):string{
    return name+age
}
console.log(typeof dbc("罗贵兴",18))

function opo(abc:number[]):number{
    let num:number=0
    for(let i=0;i<abc.length;i++){
        num+=abc[i]
        console.log(abc[i])
    }
    return num
}


</script>