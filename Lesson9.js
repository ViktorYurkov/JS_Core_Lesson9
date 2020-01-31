function show(data) {
    console.log(data);
}

// 1
var products = ['menso','fish','hleb'];
show(products.slice((products.length-1),products.length));

// 2
var styles = new Array('Джаз','Блюз');
styles.push('Рок-н-Ролл');
show(styles);
if ((products.length-2)<0)
 show('Завдання з даним масивом неможливе');
else
 styles.splice((products.length-2),1,'Класика');
 
 show(styles);
 show(styles.slice(0,1));
 delete styles[0];
 styles.unshift('Реп');
 styles.unshift('Реггі');
 show(styles);
 
//3
function find(arr, value){
    for(i=0; i<arr.length; i++){
     if (arr[i] == value) { return i }
    }
    return -1
}
show(find([2,4,9,4,6,1], 9));

//4
function filterRange(array, a, b){
  return array.slice(a,b);
}
filterRange([1,6,3,9,4], 2, 4);

// 5
function camelize(str){
 var arrayStr = str.split('-');
 for(i=0; i<arrayStr.length; i++){
  var letter = arrayStr[i];
  arrayStr[i] = letter[0].toUpperCase()+letter.slice(1);
 }
 return arrayStr.join('');
}

show(camelize('my-short-string'));

