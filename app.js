

let myAge = +prompt('Введите свой возраст')
if ( myAge > 0 && myAge <= 18 ) {
	alert('Вы еще молоды, вам надо учиться')
	
} else if(myAge > 18 && myAge <= 50) {
	alert('Вам нужно работать')
}
 else if(myAge > 50 && myAge <= 59) {
	alert('Вам скоро на пенсию')
}
 else if(myAge > 59 && myAge <= 100) {
	alert('Вы пенсионер')
} else{
	alert('Что-то пошло не так')
}