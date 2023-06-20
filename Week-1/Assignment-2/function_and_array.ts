function max (numbers: number[]) {
	if(numbers.length === 0)
		return undefined;
	let maxi = numbers[0];
	for(const num of numbers){
		if(num > maxi)
			maxi = num;
	}
	return maxi;
}

function findPosition(numbers: number[], target: number){
	for(let i=0 ; i < numbers.length ; ++i){
		if(numbers[i] === target)
			return i;
	}
	return -1;
}

console.log(max([1,2,4,5]));
console.log(max([5,2,7,1,6]));

console.log(findPosition([5,2,7,1,6], 5));
console.log(findPosition([5,2,7,1,6], 7));
console.log(findPosition([5,2,7,7,7,1,6], 7));
console.log(findPosition([5,2,7,1,6],8));
