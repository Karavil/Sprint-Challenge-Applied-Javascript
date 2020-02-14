// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



function createTopic(topicName) {
   const topicTab = document.createElement('div');
   topicTab.classList.add('tab');
   topicTab.textContent = topicName;

   return topicTab;
}

const LAMBDA_API = 'https://lambda-times-backend.herokuapp.com/topics';
const topics = document.querySelector('.topics');

// Request all available topics, then create a topic div for each one
axios.get(LAMBDA_API)
   .then(function (response) {
      response.data.topics.forEach(topic => {
         // Create DOM element
         const newTopic = createTopic(topic);
         // Append element to div with .topics class specified above
         topics.appendChild(newTopic)
      });
   })
   .catch(function (error) {
      // handle error
      console.log(error);
   })