var arr=[12, 13, 40, 33, 45, 22, 94];

	document.write("Given array is "+"[12, 13, 40, 33, 45, 22, 94]"+"<br><br>");
	document.write("Divisible by 3 & 5"+"<br><br>");
	
for (let i=0; i<arr.length; i++){
	if((arr[i]%3==0)&&(arr[i]%5==0)){
		document.write(arr[i]+"<br>")
	}
}