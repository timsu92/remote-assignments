function delayedResult(n1: number, n2: number, delayTime: number, callback: (result: number) => void){
	setTimeout(callback, delayTime, n1 + n2);
}
