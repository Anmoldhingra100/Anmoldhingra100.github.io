AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Python Developer Intern",
    cardImage: "assets/images/experience-page/xper.jpg",
    place: "Raygain Technologies",
    time: "(Jul - Sep, 2024)",
    desp: "<li>Worked with Django as a part of Internship</li><li>Worked on Django REST Framework and on REST APIs as well.</li><li>Displayed professional traits during the Internship Period</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards


document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section



document.addEventListener("DOMContentLoaded", showCards3);
