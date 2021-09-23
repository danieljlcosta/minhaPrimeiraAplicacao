// Altura e sexo
let matriz = [["F","M","F","F","M","M","F","F","F","F","M","F","F","F","M"],
               [145, 150, 151, 152, 155, 160, 190, 195, 170, 171, 166, 182, 154, 177, 185]];

console.log("Grupo:");
console.log(matriz);

// Maior e menor
let aux = matriz[1].sort();
let maior = aux[aux.length - 1];
let menor = aux[0];
console.log("A maior altura e " + maior + " e a menor altura e " + menor);

// Media de altura das mulheres
count = 0;
acc = 0;
for(let i = 0; i < matriz[0].length; i++)
{
    if(matriz[0][i] == "F")
    {
        acc += matriz[1][i];
        count++;
    }
}
mediaF = acc / count;
console.log("A media das alturas das mulheres e " + mediaF);

// Numero de homens
let homens = matriz[0].filter(s => s == "M");
console.log("A quantidade de homens e " + homens.length);



// Cinema
let cinema = [[20, 18, 15, 30, 66, 45, 80, 56, 32, 25, 17, 22, 77, 90, 34],
              [3, 1, 3, 2, 3, 2, 1, 1, 1, 2, 2, 3, 2, 3, 3]];

console.log("As avaliações dadas no cinema foram:");
console.log(cinema);

// Media das idades das pessoas que deram otimo
count = 0;
acc = 0;
for(let i = 0; i < cinema[0].length; i++)
{
    if(cinema[1][i] == 3)
    {
        acc += cinema[0][i];
        count++;
    }
}
mediaO = acc / count;
console.log("A media das idades das pessoas que avaliaram como otimo foi " + mediaO.toFixed(2));

// Quantidade de pessoas que responderam regular
let regular = cinema[1].filter(a => a == 1);
console.log("A quantidade de pessoas que responderam regular foi " + regular.length);

// Porcentagem de respostas do tipo bom
let bom = cinema[1].filter(a => a == 2);
var result = bom.length / cinema[0].length
console.log("A porcentagem de pessoas que responderam bom foi " + result.toFixed(2) + "%");