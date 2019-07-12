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
const cardsContainer = document.querySelector('.cards-container')

//This pulls the data and creates an articleObject
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(articlesData => {
        console.log(articlesData)
        console.log(articlesData.data.articles)
        const articlesObj = articlesData.data.articles
        console.log(articlesObj)

        // for(topicArray in articlesObj) {
        //     topicArray.forEach(article =>{
        //         createArticleCard(article)
        //     })
        // }

        const topicArray = Object.values(articlesObj)
     
        for(key in articlesObj) {
            articlesObj[key].forEach(object => {
                object.dataTab = key
            });
            console.log(articlesObj)
        }
        
        topicArray.forEach(articleArray => {
            console.log(articleArray)
            articleArray.forEach(article => {
                console.log(article)
                const articleCard = createArticleCard(article)
                cardsContainer.appendChild(articleCard)
            })
        })
    })
    .catch(error => {
        console.log("ERROR:", error)
    })


/* This function must be feed into a .forEach method that will access the article (object) within the
topicArrays (array) located inside the articlesObj (object)
*/
function createArticleCard(article) {
    console.log("article in function", article)
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = article.headline;
    authorImg.src = article.authorPhoto;
    authorName.textContent = `By ${article.authorName}`

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(authorImg);

    //stretch
    const dataAttrCard = document.createAttribute('data-tab');
    dataAttrCard.value = article.dataTab;
    console.log(dataAttrCard);

    card.setAttributeNode(dataAttrCard);

    return card;
}

/* 
1. To get artciles i need to use for/in at 'articleObj' to access array values *** keys are named
after the corresponding tabs that the articles go in*** 
2. then on the articleTopic level I need to use .forEach to access the object values within each of the arrays
these arrays are the actual articles.  Then I can pull out each of the data values.
*/

//STRETCH!

/*
Step 1: Add 
*/


