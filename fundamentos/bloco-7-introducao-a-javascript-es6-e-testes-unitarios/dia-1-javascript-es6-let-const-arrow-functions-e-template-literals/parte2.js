// const fatorial = num => {
//     for (let i = num -1; i > 0; i -= 1){
//         num *= i;
//     }
//     return num;
// }

// console.log(fatorial(5));

// ====================================================

// const fatorial = num => num === 1 ? 1: num * fatorial(num-1);

// console.log(fatorial(4));

// ====================================================

const longestWord = (phrase) => {
  const words = phrase.split(" ");
  let longest = words[0];
  for (let i = 1; i < words.length; i += 1) {
    words[i].length > longest.length
      ? (longest = words[i])
      : (longest = longest);
  }
  return longest;
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
);

// =====================================================
const skills = [`HTML`, `JavaScript`, `CSS`, `Flexbox`,`Mobile First`];

function funcao1(string) {
  return `test testium ${string} testare`;
}

function funcao2(string) {
  return (`${funcao1(`x`)} ${string} ${skills.sort()}`);
}

console.log(funcao2('Jurubira'));