let date= new Date();
var now = date.toLocaleString();
	alert(now); 
        let a=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
        alert(`${date.getDate()} ${a[date.getMonth()]} ${date.getFullYear()}`)
