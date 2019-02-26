fetch('https://raw.githubusercontent.com/ricardogouveia3/rcrd-portfolio/master/data/portfolio.json')
.then(function(response){
  response.json().then(function(data){

    slicedProjects = data.projects.slice(0, 3);
    for (var project of slicedProjects) {
      buildPortfolioCard(project.link, project.image, project.type, project.title, project.date, project.color);
    }

  });
})
.catch(function(err){ console.error('Failed retrieving portfolio information', err); });

function buildPortfolioCard(link, img, type, title, date, color) {

  var cardFragment = document.createDocumentFragment();

  var cardContainer = document.createElement('li');
  cardContainer.classList.add('portfolio__card-grid__card-container');
  cardFragment.appendChild(cardContainer);

  var cardLink = document.createElement('a');
  cardLink.classList.add('portfolio__card-grid__card-container__card');
  cardLink.id = 'PortfolioItemLink';
  cardLink.href = link;
  cardContainer.appendChild(cardLink);

  var cardImage = document.createElement('div');
  cardImage.classList.add('portfolio__card-grid__card-container__card__img');
  cardImage.id = 'PortfolioItemImage';
  cardImage.style.backgroundImage = 'url("' + img + '")';
  cardLink.appendChild(cardImage);

  var cardInfo = document.createElement('div');
  cardInfo.classList.add('portfolio__card-grid__card-container__card__info');
  cardLink.appendChild(cardInfo);

  var cardJobType = document.createElement('span');
  cardJobType.classList.add('portfolio__card-grid__card-container__card__info__job-type');
  cardJobType.id = 'PortfolioItemType';
  cardJobType.innerText = type;
  cardJobType.style.borderColor = color;
  cardInfo.appendChild(cardJobType);

  var cardInfoTitle = document.createElement('h4');
  cardInfoTitle.classList.add('portfolio__card-grid__card-container__card__info__job-title');
  cardInfoTitle.id = 'PortfolioItemTitle';
  cardInfoTitle.innerText = title;
  cardInfo.appendChild(cardInfoTitle);

  var cardInfoDate = document.createElement('span');
  cardInfoDate.classList.add('portfolio__card-grid__card-container__card__info__job-date');
  cardInfoDate.id = 'PortfolioItemDate';
  cardInfoDate.innerText = date;
  cardInfo.appendChild(cardInfoDate);

  document.getElementById('portfolioCardGrid').appendChild(cardFragment);
}
