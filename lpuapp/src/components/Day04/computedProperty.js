let propName = 'c';

const rank = {
    a : 1, 
    b : 2,
    [propName] : 3, // syntax of computed property
};

console.log(rank.c);
