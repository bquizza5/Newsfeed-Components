// // Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement = domElement;
//     // create a reference to the ".expandButton" class. 
//     this.expandButton = this.domElement.querySelector('.expandButton');
//     // Using your expandButton reference, update the text on your expandButton to say "expand"
//     this.expandButton.textContent = 'expand';
//     // Set a click handler on the expandButton reference, calling the expandArticle method.
//     this.expandButton.addEventListener('click', () => this.expandArticle())
//   }

//   expandArticle()  {
//     // Using our reference to the domElement, toggle a class to expand or hide the article.
//     this.domElement.classList.toggle('article-open')
//     if (this.expandButton.textContent === 'expand') {
//       this.expandButton.textContent = 'close';
//     } else {
//       this.expandButton.textContent = 'expand';
//     }
//   }
// }

// /* START HERE: 

// - Select all classes named ".article" and assign that value to the articles variable.


// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

// */

// let articles = document.querySelectorAll('.article');

// articles.forEach(function(article){
//   return new Article(article);
// })

const articleData = [
  {
    header: `Lambda School Students: "We're the best!"`,
    date: `Nov 5th, 2017`,
    p1: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
    moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
    watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
    Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
    jar twi'lek jinn leia jango skywalker mon.`,
    p2: `Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
    windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
    mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
    k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
    solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
    owen jinn tatooine sith organa.`,
    p3: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
    naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
    han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
    moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
  },
  {
    header: `Lambda School Students: "2We're the best!"`,
    date: `Nov 5th, 2017`,
    p1: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
    moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
    watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
    Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
    jar twi'lek jinn leia jango skywalker mon.`,
    p2: `Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
    windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
    mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
    k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
    solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
    owen jinn tatooine sith organa.`,
    p3: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
    naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
    han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
    moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
  },
  {
    header: `Lambda School Students: "We're the best!"`,
    date: `Nov 5th, 2017`,
    p1: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
    moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
    watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
    Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
    jar twi'lek jinn leia jango skywalker mon.`,
    p2: `Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
    windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
    mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
    k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
    solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
    owen jinn tatooine sith organa.`,
    p3: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
    naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
    han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
    moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
  },
  {
    header: `Lambda School Students: "We're the best!"`,
    date: `Nov 5th, 2017`,
    p1: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
    moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
    watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
    Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
    jar twi'lek jinn leia jango skywalker mon.`,
    p2: `Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2
    windu mothma. Sidious darth calamari moff. Wampa mothma sith wedge solo mara. Darth gonk maul sith moff chewbacca palpatine
    mace amidala. C-3po solo skywalker anakin yoda leia. Maul wampa bespin watto jade ewok darth jabba. Lando dantooine moff
    k-3po dantooine luke. Fisto mandalore darth wedge c-3p0 ahsoka. Secura moff palpatine fett. Anakin sith darth darth. Moff
    solo leia ben ponda jade. Binks jango aayla skywalker skywalker cade. Mustafar darth ventress anakin watto. Yavin jawa sebulba
    owen jinn tatooine sith organa.`,
    p3: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
    naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
    han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
    moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
  },
]


const articles = document.querySelector('.articles')

articleData.forEach(data => {
  articles.appendChild(createArticle(data.header, data.date, data.p1, data.p2, data.p3))
})

function createArticle(header, date, p1, p2, p3) {
  const article = document.createElement('div')
  const articleHeader = document.createElement('h2')
  const articleDate = document.createElement('p')
  const articleP1 = document.createElement('p')
  const articleP2 = document.createElement('p')
  const articleP3 = document.createElement('p')
  const articleBtnOpen = document.createElement('span')

  article.appendChild(articleHeader)
  article.appendChild(articleDate)
  article.appendChild(articleP1)
  article.appendChild(articleP2)
  article.appendChild(articleP3)
  article.appendChild(articleBtnOpen)

  article.classList.add('article')
  articleDate.classList.add('date')
  articleBtnOpen.classList.add('expandButton')

  articleHeader.textContent = header
  articleDate.textContent = date
  articleP1.textContent = p1
  articleP2.textContent = p2
  articleP3.textContent = p3
  articleBtnOpen.textContent = 'open'

  articleBtnOpen.addEventListener('click', () => {
    if (articleBtnOpen.textContent === 'close'){

      allArticles = document.querySelectorAll('.article')
      allbtn = document.querySelectorAll('.expandButton')

      allbtn.forEach(btn => {
        btn.textContent = 'open'
      })

      allArticles.forEach((article) => {
        article.classList.remove('article-open')  
      })

    } else {
      allArticles = document.querySelectorAll('.article')
      allbtn = document.querySelectorAll('.expandButton')

      allbtn.forEach(btn => {
        btn.textContent = 'open'
      })

      allArticles.forEach((article) => {
        article.classList.remove('article-open')
      })

      articleBtnOpen.textContent = 'close';
      article.classList.add('article-open')
    }  
  })
  return article
}






