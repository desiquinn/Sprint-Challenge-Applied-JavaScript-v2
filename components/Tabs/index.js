// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabPanel = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(topic => {
        console.log(topic)
        console.log(topic.data.topics)

        const topicTitles = topic.data.topics;
        console.log(topicTitles);

        topicTitles.forEach(title => {
            console.log(title)
            const tabs = createTab(title)
            tabPanel.appendChild(tabs)
        })
        
    })
    .catch(error => {
        console.log(`ERROR: ${error}`)
    })

function createTab(topic) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;

    return tab;
}