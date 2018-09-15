var someData;

if(true){
    var someData="someGlobalData";//Глобальная переменная
    let localData="someGlobalData";//видимость в рамках блока в котором объявлена
    const constData="constData";//нельзя переопределить

}
someData="nikita";
const globalArray=[];
globalArray.push(1);//добавить элемент
let index =globalArray.indexOf(1);


let obj={ 
    id: 5346,
    name:'hth',
    title:'hrth'
};

obj.addField = 2345;
globalArray.push(obj);


function onButtonClick() {
    let elem = document.getElementById('content');
    elem.innerText = 'changed';
}

