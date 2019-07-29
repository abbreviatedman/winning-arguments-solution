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
  'Curfew',
  'Medici',
  'Wasted',
  'Missing',
  'Legends',
  'Game of Thrones',
  'Crusoe',
  'Clarissa',
  'The Practice',
]

// push a new movie in

function addMovie(movie) {
  seanBeanMovies.unshift(movie);
}

// push a new show in

function addShow(show) {
  seanBeanShows.unshift(show);
}

// print a show or movie

function print(appearance) {
  console.log(appearance);
}

// Go through any list and print every show/movie

function printList(list) {
  let i = 0;
  while (i < list.length) {
    print(list[i]);
    i = i + 1;
  }
}

// Take a true or false for alphabetical.

function printListIntermediate(list, alphabetical) {
  const newList = list.slice();
  if (alphabetical === true) {
    removeTheTheFromStart(newList);
    newList.sort();
  }

  let i = 0;
  while (i < newList.length) {
    print(newList[i]);
    i = i + 1;
  }
}

// Take a true or false for reverse.

function printListAdvanced(list, alphabetical, reverse) {
  const newList = list.slice();

  if (alphabetical === true) {
    removeTheTheFromStart(newList);
    newList.sort();
  }

  if (reverse === true) {
    let i = newList.length - 1;
    while (i >= 0) {
      print(newList[i]);
      i = i - 1;
    }
  } else {
    let i = 0;
    while (i < newList.length) {
      print(newList[i]);
      i = i + 1;
    }
  }

  function removeTheTheFromStart(arr) {
    const beginningThe = 'The ';
    let i = 0;
    
    while (i < arr.length) {
      const title = arr[i];
      if (title.startsWith(beginningThe)) {
        arr[i] = title.slice(4) + ', the';
      }

      i = i + 1;
    }
  }

  /*
    Alternate, simpler one using `.reverse()`.

    const newList = list.slice();

    if (alphabetical === true) {
      const beginningThe = 'The ';
      const title = newList[i];
      let i = 0;
      
      while (i < newList.length) {
        if (title.startsWith(beginningThe)) {
          newList[i] = title.slice(4) + ', the';
        }

        i = i + 1;
      }

      newList.sort();
    }

    if (reverse === true) {
      newList.reverse();
    }

    let i = 0;
    while (i < newList.length) {
      print(newList[i]);
      i = i + 1;
    }
  */
}