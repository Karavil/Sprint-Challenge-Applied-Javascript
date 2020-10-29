// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(props) {
   // Create the header div where the info will be placed
   const header = document.createElement('div');
   header.classList.add('header');

   // Create header componenets that will be appended to the header object
   const date = document.createElement('span');
   date.classList.add('date');
   date.textContent = props.date;

   // Title
   const title = document.createElement('h1');
   title.textContent = props.title;

   // Temperature
   const tempF = document.createElement('span');
   tempF.classList.add('temp');
   tempF.textContent = props.tempF;

   // Append components of the header div (date, title, temp)
   header.appendChild(date);
   header.appendChild(title);
   header.appendChild(tempF);

   // Return the header that we built above
   return header;
}

// Select where we want to put our header
const container = document.querySelector('.header-container');
const headerInfo = {
   date: 'MARCH 28, 2019',
   title: 'Lamba Times',
   tempF: '98°'
}
container.appendChild(Header(headerInfo));

