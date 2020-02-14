// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function ArticleCard(article) {
   // Main div element
   const cardDiv = document.createElement('div')
   cardDiv.classList.add('card');

   // Div with article headline on top of the main div
   const articleHeadline = document.createElement('div');
   articleHeadline.classList.add('headline');
   articleHeadline.textContent = article.headline;

   // This div holds the author image and name
   const authorInfo = document.createElement('div');
   authorInfo.classList.add('author');

   // Image & image container with author picture
   const imgContainer = document.createElement('div');
   imgContainer.classList.add('img-container');

   const authorImage = document.createElement('img');
   authorImage.src = article.authorPhoto;

   imgContainer.appendChild(authorImage);

   // Author name at the bottom
   const authorName = document.createElement('span');
   authorName.textContent = article.authorName;

   authorInfo.appendChild(imgContainer);
   authorInfo.appendChild(authorName);

   cardDiv.appendChild(articleHeadline);
   cardDiv.appendChild(authorInfo);

   return cardDiv;
}

function appendArticles(articlesList) {
   console.log(articlesList);
   const articleCards = document.querySelector('.cards-container');
   articlesList.forEach(article => {
      articleCards.appendChild(ArticleCard(article));
   });
}


// Request all available topics, then create a topic div for each one
const ARTICLES_API = 'https://lambda-times-backend.herokuapp.com/articles';
function fetchArticles() {
   axios.get(ARTICLES_API).then(response => {
      //This is an object with keys for each article genre
      const articlesByGenre = response.data.articles;
      console.log(articlesByGenre);
      for (const genre in articlesByGenre) {
         appendArticles(articlesByGenre[genre]);
      }
   })
   .catch(function (error) {
         // handle error
         console.log(error);
   })
}

fetchArticles();