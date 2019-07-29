const seanBeanMovies = [
  'The Martian',
  'Percy Jackson & the Olympians: The Lightning Thief',
  'Far North',
  'The Island',
  'National Treasure',
  'Troy',
  'The Lord of The Rings: The Return of the King',
  'Equilibrium',
  'The Lord of The Rings: The Two Towers',
  'The Lord of The Rings: The Fellowship of the Ring',
  'Anna Karenina',
  'Goldeneye'
];

const seanBeanShows = [
  'Sally4Ever',
  'Medici',
  'Wasted',
  'Missing',
  'Legends',
  'Game of Thrones',
  'Crusoe',
  'Clarissa',
  'The Practice',
]

console.log('# Array Argument Challenges');
console.log('### Challenge 1');

// Write a function that takes in a string, representing an appearance by Sean Bean, and logs it out to the console. Use that function to print 'Done!'.

function print(appearance) {
  console.log(appearance);
}

print('Done');


console.log('### Challenge 2');

// Write a function that prints out the latest movie appearance by Sean Bean. Keep in mind that the array is in order of newest first and oldest last, and make sure that it uses the printing function you wrote earlier. Then use the function to print out the latest movie.

function printLatestMovie() {
  print(seanBeanMovies[0]);
}

printLatestMovie();


console.log('### Challenge 3');

// Write the equivalent function for TV shows. Then use it.

function printLatestShow() {
  print(seanBeanShows[0]);
}

printLatestShow();


console.log('### Challenge 4');

// Write a function that takes a string as an argument, representing the title of a NEW Sean Bean movie, and add its it to the appropriate array. (Keep in mind again that the array is in order of newest first and oldest last! LAST REMINDER.) Use the function to add the movie "Dark River" to the list, then use it again to add "Possessor". Then use the function you wrote earlier that prints the latest movie to... do just that.

function addMovie(movie) {
  seanBeanMovies.unshift(movie);
}

addMovie('Dark River');
addMovie('Possessor');
printLatestMovie();


console.log('### Challenge 5');

// Write a function with the same structure as the one above, except for TV shows instead of movies. Use it to add the show Curfew, then use it again to add the show World on Fire. Then use the function you wrote earlier and print Sean Bean's latest TV show.

function addShow(show) {
  seanBeanShows.unshift(show);
}


addShow('Curfew');
addShow('World on Fire');
printLatestShow();


console.log('### Challenge 6');

// Write a function that takes in a list as an argument, e.g. our movie and show lists, and prints out every item individually. Use the print function you made before. Then use this new function to print out both lists.

function printList(list) {
  let i = 0;
  while (i < list.length) {
    print(list[i]);
    i = i + 1;
  }
}

printList(seanBeanMovies);
printList(seanBeanShows);


console.log('### Challenge 7');

// Write a function that takes in a list as the first parameter and a true or false boolean as a second, OPTIONAL parameter, that, if set to `true`, prints out the list alphabetically instead of chronologically.

// Because it's an optional parameter, if someone uses the function and just puts a list in (leaving the second parameter out), it should print the list chronologically.

// There's no need to write out a while loop to go through the list and print them all out individually; we've already written a function that does that! Use it!

// Another thing to keep in mind is that we DON'T want to modify the original array, and passing an array in as an argument will make any changes to our array also modify the original. So make a copy! There are several methods to doing this, but I like the simplicity of `const newList = list.slice()`.

// Once this function is written, use the new function to print the shows list alphabetically and then chronologically.

function printListIntermediate(list, alphabetical) {
  const newList = list.slice();
  if (alphabetical === true) {
    // removeTheTheFromStart(newList);
    newList.sort();
  }

  printList(newList);
}

printListIntermediate(seanBeanShows, true);
printListIntermediate(seanBeanShows);


console.log('### Challenge 8');

// Write a function that does the same as the one above, but includes a third parameter, also optional, that will reverse the way the list is printed if set to true.

// Now use the function to print the shows alphabetically, then use it again to print them chronologically in reverse.

function printListAdvanced(list, alphabetical, reverse) {
  const newList = list.slice();

  if (alphabetical === true) {
    removeTheTheFromStart(newList);
    newList.sort();
  }

  if (reverse === true) {
    newList.reverse();
  }
  
  printList(newList);
}

printListAdvanced(seanBeanShows, true);
printListAdvanced(seanBeanShows, false, true);


console.log('### Challenge 9');

// Now write a function that takes in a list and removes the 'The ' from the start of any titles that start with it, and adds ', the' to the end. So The Hobbit (were Sean Bean in it) would change to 'Hobbit, the".

// USE the fact that the array passed in WILL be mutated if you make any changes.

// When you're done, go into the previous two functions, the ones that allow you to print alphabetically, and use this function WITHIN those to adjust titles before you sort them alphabetically.

// Then use the function above to print the movies list alphabetically and in reverse. If it's the following, then print "Totally done!", and consider yourself totally done indeed.


/*
  Troy
  Possessor
  Percy Jackson & the Olympians: The Lightning Thief
  National Treasure
  Martian, the
  Lord of The Rings: The Two Towers, the
  Lord of The Rings: The Return of the King, the
  Lord of The Rings: The Fellowship of the Ring, the
  Island, the
  Goldeneye
  Far North
  Equilibrium
  Dark River
  Anna Karenina
*/


function removeTheTheFromStart(list) {
  const beginningThe = 'The ';
  let i = 0;
  
  while (i < list.length) {
    const title = list[i];
    if (title.startsWith(beginningThe)) {
      list[i] = title.slice(4) + ', the';
    }

    i = i + 1;
  }
}

printListAdvanced(seanBeanMovies, true, true);

print('Totally done!');