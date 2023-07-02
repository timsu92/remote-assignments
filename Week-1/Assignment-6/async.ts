async function delayedResultPromise_async(n1: number, n2: number, delayTime: number): Promise<number> {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			resolve(n1 + n2);
		}, delayTime);
	});
}

async function main() {
	console.log(await delayedResultPromise_async(4, 5, 3000));
}

main();
