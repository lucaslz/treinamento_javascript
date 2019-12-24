function checaIdade(idade) {
    var promise = new Promise(function (resolve, reject) {
        if (idade > 18) {
            setTimeout(function () {
                resolve(true);
            }, 4000);
        } else {
            setTimeout(function () {
                reject(false);
            }, 4000);
        }
    });

    return promise;
}

checaIdade(20).then(function() {
    console.log("Maior que 18");
}).catch(function() {
    console.log("Menor que 18");
});

checaIdade(17).then(function() {
    console.log("Maior que 18");
}).catch(function() {
    console.log("Menor que 18");
});

checaIdade(18).then(function() {
    console.log("Maior que 18");
}).catch(function() {
    console.log("Menor que 18");
});