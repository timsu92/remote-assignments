function delayedResultPromise_promise(n1: number, n2: number, delayTime: number): Promise<number> {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve(n1 + n2);
		}, delayTime);
	});
}

delayedResultPromise_promise(4, 5, 3000).then(console.log);
