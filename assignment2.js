let items = [
  {
    Username: 'DaGuy',
    Passcode: '27300',
    id: 1001,
    img: './aaa.jpg',
  },
  {
    Username: 'Viet',
    Passcode: '99577',
    id: 2021,
    img: './bbbb.jpg',
  },
  {
    Username: 'Estelle',
    Passcode: '70434',
    id: 1103,
    img: './aaa.jpg',
  },
  {
    Username: 'Jay',
    Passcode: '69377',
    id: 8024,
    img: './bbbb.jpg',
  },
  {
    Username: 'Kelly',
    Passcode: '63000',
    id: 5098,
    img: './aaa.jpg',
  },
  {
    Username: 'Doradons',
    Passcode: '68377',
    id: 5626,
    img: './bbbb.jpg',
  },
  {
    Username: 'VickkyVal',
    Passcode: '94245',
    id: 6734,
    img: './aaa.jpg',
  },
  {
    Username: 'Chiddyfyne',
    Passcode: '00006',
    id: 8368,
    img: './bbbb.jpg',
  },
  {
    Username: 'VictorSam',
    Passcode: '68377',
    id: 9012,
    img: './aaa.jpg',
  },
  {
    Username: 'Prince',
    Passcode: '70610',
    id: 1217,
    img: './bbbb.jpg',
  },
  {
    Username: 'AdornJP',
    Passcode: '12911',
    id: 1111,
    img: './aaa.jpg',
  },
  {
    Username: 'ID_Man',
    Passcode: '37497',
    id: 1272,
    img: './bbbb.jpg',
  },
  {
    Username: 'James',
    Passcode: '70434',
    id: 1309,
    img: './aaa.jpg',
  },
  {
    Username: 'Wisdom',
    Passcode: '02587',
    id: 1438,
    img: './bbbb.jpg',
  },
  {
    Username: 'Skyline',
    Passcode: '00001',
    id: 1508,
    img: './aaa.jpg',
  },
  {
    Username: 'SkyHigh',
    Passcode: '99577',
    id: 1629,
    img: './bbbb.jpg',
  },
];


//Funtion to render list of students
function renderList() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  //Iteration through each student to display in a Bootstrap card component
  items.forEach((student, index) => {
    //Creating a DIV element that wil house each Bootstrap card
    const studentDiv = document.createElement('div');
    studentDiv.innerHTML = `
      <div class="card mt-4">
        <div class="card-body">
        <span>${index + 1}</span>
          <img src=${student.img} alt=${student.Username}/>
          <h3 class="card-title">Username: ${student.Username}</h3>
          <p class="card-text text-left">Passcode: ${student.Passcode}</p>
          <p class="card-text text-center user-id">User ID: ${student.id}</p>
        </div>
    </div>`;
    //putting the student DIV inside the list items using ID 'itemList'
    itemList.appendChild(studentDiv);
  });
}

// Function to remove object by ID
function removeObjectById(array, idToRemove) {
  return items.filter((obj) => obj.id !== idToRemove);
}

// Function to handle button click
document.getElementById('rmvbtn').addEventListener('click', function () {
  // ID of the object to remove
  let idToRemove = Number(prompt('Enter User ID')); 
  items = removeObjectById(items, idToRemove);
  renderList(items);
});

//Re-rendering the student's list after running all code to display effect in the DOM
renderList();
