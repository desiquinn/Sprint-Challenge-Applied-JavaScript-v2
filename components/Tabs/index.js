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
    console.log(topic)

    //stretch
    const dataAttr = document.createAttribute('data-tab');
    
    if(topic === 'node.js') {
            dataAttr.value = 'node';
        } else {
            dataAttr.value = topic;
    };

    console.log(dataAttr);

    tab.setAttributeNode(dataAttr);

    tab.addEventListener('click', () => {
        console.log(`${topic} tab was clicked!`);
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach((tab) => {
            tab.classList.remove('active-tab');
        });

        const cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.style.display = 'none'
        });

        const activeCard = document.querySelectorAll(`.card[data-tab='${dataAttr.value}']`);
        console.log(activeCard)
        activeCard.forEach((card) => {
            console.log(card)
            card.style.display = 'flex'
        });

        tab.classList.add('active-tab');


    })
    return tab;
}

//STRETCH!

/*
Step 1: Add data-tab attribute to divs with tab class (make sure they have the same name at the object key of the articleObj)
Step 2: Add a click event that 1st removes the active tab class from all tabs, 2nd adds the active tab class to the clicked tab only
Step 3: Add a click event that 1st removes the display none styling from all cards, 2nd adds the disply none styling to the cards that match the same data tab name.
*/
