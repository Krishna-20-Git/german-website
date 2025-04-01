document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.getElementById("language-toggle");
  const title = document.getElementById("title");
  const navHome = document.getElementById("nav-home");
  const navAchievements = document.getElementById("nav-achievements");
  const navAthletes = document.getElementById("nav-athletes");
  const navGallery = document.getElementById("nav-gallery");
  const navNews = document.getElementById("nav-news");
  const homeText1 = document.getElementById("home-text-1");
  const homeText2 = document.getElementById("home-text-2");
  const homeText3 = document.getElementById("home-text-3");
  const achievementsText1 = document.getElementById("achievements-text-1");
  const athletesText = document.getElementById("athletes-text");
  const footerText = document.getElementById("footer-text");
  const welcomeHeader = document.querySelector("#home h2");
  const achievementHeader = document.querySelector("#achievements h2");
  const athleteHeader = document.querySelector("#athletes h2"); 
  const winterOlympicsList = document.querySelector(".Winter-Olympics li");
  const summerOlympicsListItems = document.querySelectorAll(
    ".Summer-Olympics li"
  );
  const winterOlympicsListItems = document.querySelectorAll(
    ".Winter-Olympics li"
  );
  const achievementsList = document.querySelector(".achievements-list li");

  const athleteCards = document.querySelectorAll("#athletes-list .card");

  const goToTopBtn = document.getElementById("go-to-top-btn"); 

  let isEnglish = true;

  const englishText = {
    title: "Germany and the Olympics",
    navHome: "Home",
    navAchievements: "Achievements",
    navAthletes: "Famous Athletes",
    navGallery: "Gallery",
    navNews: "News",
    homeText1:
      "Athletes from Germany have taken part in most of the modern Olympic Games held since 1896. Germany has hosted three Olympic Games, in 1936 both the Winter and Summer Games, and the 1972 Summer Olympics. In addition, Germany had been selected to host the 1916 Summer Olympics as well as the 1940 Winter Olympics, both of which had to be cancelled due to World Wars. After these wars, Germany was banned from participating in the 1920, 1924 and 1948 Olympics.",
    homeText2:
      "While the country was divided, each of the two German states boycotted one of the Summer Games. In 1980, West Germany was one of 66 nations which did not go to Moscow in protest at the Soviet Union's invasion of Afghanistan, and in 1984 East Germany joined the Soviet Union and several others in the boycott of the Summer Games in Los Angeles. In 1990, East Germany and West Germany would reunite, with Germany once again competing as a single full sovereign state since the 1992 Olympic year.",
    homeText3:
      "The IOC currently splits German results among four codes, even though only the German Democratic Republic (GDR) from 1968 to 1988 had sent a separate team to compete against the team of the German NOC that represented Germany (GER) since 1896.",
    achievementsText1:
      "Germany has a long and successful history in the Olympic Games, consistently ranking among the top nations in terms of medal counts. Here are some key achievements and highlights:",
    athletesText:
      "Many German athletes have made their mark in Olympic history. Here are some of the most famous:",
    footerText:
      "&copy; 2025 Germany and the Olympics. All rights reserved by group 8.",
    welcomeHeader: "Welcome to Germany and the Olympics",
    achievementHeader: "Germany's Achievements in the Olympics",
    athleteHeader: " Famous German Olympians ",
    summerOlympicsListItems: [
      "Overall Performance: Germany has won over 1,000 medals in the Summer Olympics, making it one of the most successful countries in Olympic history.",
      "Top Sports: Germany has excelled in athletics, swimming, rowing, cycling, equestrian events, and team sports like football and hockey.",
      "Notable Moments: In the 2016 Rio Olympics, Germany finished 5th in the medal table with 17 gold medals. In the 2020 Tokyo Olympics (held in 2021), Germany won 10 gold medals and finished 9th overall. East Germany (GDR) was particularly dominant in the 1970s and 1980s, especially in swimming and athletics, before reunification in 1990.",
    ],
    winterOlympicsListItems: [
      "Overall Performance: Germany is one of the most successful nations in Winter Olympics history, often ranking in the top 3.",
      "Top Sports: Germany dominates in bobsleigh, luge, biathlon, speed skating, and ski jumping.",
      "Notable Moments: In the 2018 PyeongChang Winter Olympics, Germany topped the medal table with 14 gold medals. In the 2022 Beijing Winter Olympics, Germany finished 2nd with 12 gold medals.",
    ],
    achievementsList: "Over 1,700 medals in Summer and Winter Games",
    winterOlympicsList: "Winter Olympics:",
    athletes: [
      {
        name: "Michael Groß",
        description:
          "Michael Groß is a former German swimmer known for his dominance in the 1980s, earning the nickname 'The Albatross' due to his long arms and powerful strokes.",
      },
      {
        name: "Katarina Witt",
        description:
          "Katarina Witt is a former German figure skater and two-time Olympic gold medalist (1984, 1988), known for her artistic performances and technical excellence. Witt became a global icon, winning multiple World championships.",
      },
      {
        name: "Birgit Fischer",
        description:
          "Birgit Fischer is a legendary German canoeist and the most successful Olympic canoeist of all time, winning eight gold medals across six Olympic Games. She dominated sprint canoeing, excelling in both individual and team events.",
      },
    ],
  };

  const germanText = {
    title: "Deutschland und Olympia",
    navHome: "Startseite",
    navAchievements: "Leistungen",
    navAthletes: "Berühmte Athleten",
    navGallery: "Galerie",
    navNews: "Nachrichten",
    homeText1:
      "Athleten aus Deutschland haben an den meisten modernen Olympischen Spielen teilgenommen, die seit 1896 stattgefunden haben. Deutschland hat dreimal Olympische Spiele ausgerichtet, 1936 sowohl die Winter- als auch die Sommerspiele und die Olympischen Sommerspiele 1972. Darüber hinaus war Deutschland ausgewählt worden, die Olympischen Sommerspiele 1916 sowie die Olympischen Winterspiele 1940 auszurichten, die beide aufgrund der Weltkriege abgesagt werden mussten. Nach diesen Kriegen wurde Deutschland von der Teilnahme an den Olympischen Spielen 1920, 1924 und 1948 ausgeschlossen.",
    homeText2:
      "Während das Land geteilt war, boykottierte jeder der beiden deutschen Staaten eines der Sommerspiele. 1980 war Westdeutschland eine von 66 Nationen, die aus Protest gegen die Invasion Afghanistans durch die Sowjetunion nicht nach Moskau reisten, und 1984 schloss sich Ostdeutschland der Sowjetunion und mehreren anderen Nationen beim Boykott der Sommerspiele in Los Angeles an. 1990 vereinigten sich Ost- und Westdeutschland wieder, und Deutschland trat seit dem olympischen Jahr 1992 wieder als einheitlicher souveräner Staat an.",
    homeText3:
      "Das IOC teilt die deutschen Ergebnisse derzeit in vier Codes auf, obwohl nur die Deutsche Demokratische Republik (DDR) von 1968 bis 1988 ein separates Team entsandt hatte, um gegen das Team des Deutschen NOK anzutreten, das Deutschland (GER) seit 1896 vertritt.",
    achievementsText1:
      "Deutschland hat eine lange und erfolgreiche Geschichte bei den Olympischen Spielen und zählt regelmäßig zu den besten Nationen in Bezug auf die Medaillenanzahl. Hier sind einige wichtige Leistungen und Highlights:",
    athletesText:
      "Viele deutsche Athleten haben sich in der olympischen Geschichte einen Namen gemacht. Hier sind einige der berühmtesten:",
    footerText:
      "&copy; 2025 Olympische Spiele und Deutschland. Alle Rechte vorbehalten von Gruppe 8.",
    welcomeHeader: "Willkommen bei Deutschland und den Olympischen Spielen",
    achievementHeader: "Deutschlands Erfolge bei den Olympischen Spielen",
    athleteHeader: " Berühmte deutsche Olympioniken ",
    summerOlympicsListItems: [
      "Gesamtleistung: Deutschland hat über 1.000 Medaillen bei den Olympischen Sommerspielen gewonnen und ist damit eines der erfolgreichsten Länder in der olympischen Geschichte.",
      "Top-Sportarten: Deutschland hat sich in der Leichtathletik, im Schwimmen, Rudern, Radfahren, bei Reitveranstaltungen und in Mannschaftssportarten wie Fußball und Hockey hervorgetan.",
      "Bemerkenswerte Momente: Bei den Olympischen Spielen 2016 in Rio belegte Deutschland mit 17 Goldmedaillen den 5. Platz im Medaillenspiegel. Bei den Olympischen Spielen 2020 in Tokio (2021) gewann Deutschland 10 Goldmedaillen und belegte insgesamt den 9. Platz. Ostdeutschland (DDR) war in den 1970er und 1980er Jahren besonders dominant, vor allem im Schwimmen und in der Leichtathletik, vor der Wiedervereinigung im Jahr 1990.",
    ],
    winterOlympicsListItems: [
      "Gesamtleistung: Deutschland ist eine der erfolgreichsten Nationen in der Geschichte der Olympischen Winterspiele und rangiert oft in den Top 3.",
      "Top Sports: Deutschland dominiert im Bobsport, im Rennrodeln, im Biathlon, im Eisschnelllauf und im Skispringen.",
      "Bemerkenswerte Momente: Bei den Olympischen Winterspielen 2018 in PyeongChang führte Deutschland den Medaillenspiegel mit 14 Goldmedaillen an. Bei den Olympischen Winterspielen 2022 in Peking belegte Deutschland mit 12 Goldmedaillen den 2. Platz.",
    ],
    achievementsList: "Über 1.700 Medaillen bei den Sommer- und Winterspielen",
    winterOlympicsList: "Winterspiele:",
    athletes: [
      {
        name: "Michael Groß",
        description:
          "Michael Groß ist ein ehemaliger deutscher Schwimmer, der in den 1980er Jahren dominierte und den Spitznamen 'Der Albatros' aufgrund seiner langen Arme und kraftvollen Züge erhielt.",
      },
      {
        name: "Katarina Witt",
        description:
          "Katarina Witt ist eine ehemalige deutsche Eiskunstläuferin und zweifache Olympiasiegerin (1984, 1988), bekannt für ihre künstlerischen Darbietungen und technische Exzellenz. Witt wurde zu einer globalen Ikone und gewann mehrere Weltmeisterschaften.",
      },
      {
        name: "Birgit Fischer",
        description:
          "Birgit Fischer ist eine legendäre deutsche Kanutin und die erfolgreichste Olympia-Kanutin aller Zeiten. Sie gewann acht Goldmedaillen bei sechs Olympischen Spielen und dominierte das Sprint-Kanu, sowohl in Einzel- als auch in Teamwettbewerben.",
      },
    ],
  };

  function translateToGerman() {
    title.textContent = germanText.title;
    navHome.textContent = germanText.navHome;
    navAchievements.textContent = germanText.navAchievements;
    navAthletes.textContent = germanText.navAthletes;
    navGallery.textContent = germanText.navGallery;
    navNews.textContent = germanText.navNews;
    homeText1.textContent = germanText.homeText1;
    homeText2.textContent = germanText.homeText2;
    homeText3.textContent = germanText.homeText3;
    achievementsText1.textContent = germanText.achievementsText1;
    athletesText.textContent = germanText.athletesText;
    footerText.innerHTML = germanText.footerText;
    welcomeHeader.textContent = germanText.welcomeHeader;
    achievementHeader.textContent = germanText.achievementHeader;
    athleteHeader.textContent = germanText.athleteHeader; 
    achievementsList.textContent = germanText.achievementsList;
    winterOlympicsList.textContent = germanText.winterOlympicsList;

    summerOlympicsListItems.forEach((item, index) => {
      item.textContent = germanText.summerOlympicsListItems[index];
    });

    winterOlympicsListItems.forEach((item, index) => {
      item.textContent = germanText.winterOlympicsListItems[index];
    });

    athleteCards.forEach((card, index) => {
      const name = card.querySelector("h2");
      const description = card.querySelector("p");
      name.textContent = germanText.athletes[index].name;
      description.innerHTML = `<strong>${germanText.athletes[index].name}</strong> ${germanText.athletes[index].description}`;
    });

    languageToggle.textContent = "English";
    isEnglish = false;
  }

  function translateToEnglish() {
    title.textContent = englishText.title;
    navHome.textContent = englishText.navHome;
    navAchievements.textContent = englishText.navAchievements;
    navAthletes.textContent = englishText.navAthletes;
    navGallery.textContent = englishText.navGallery;
    navNews.textContent = englishText.navNews;
    homeText1.textContent = englishText.homeText1;
    homeText2.textContent = englishText.homeText2;
    homeText3.textContent = englishText.homeText3;
    achievementsText1.textContent = englishText.achievementsText1;
    athletesText.textContent = englishText.athletesText;
    footerText.innerHTML = englishText.footerText;
    welcomeHeader.textContent = englishText.welcomeHeader;
    achievementHeader.textContent = englishText.achievementHeader;
    athleteHeader.textContent = englishText.athleteHeader; 

    winterOlympicsList.textContent = englishText.winterOlympicsList;
    achievementsList.textContent = englishText.achievementsList;

    summerOlympicsListItems.forEach((item, index) => {
      item.textContent = englishText.summerOlympicsListItems[index];
    });

    winterOlympicsListItems.forEach((item, index) => {
      item.textContent = englishText.winterOlympicsListItems[index];
    });

    athleteCards.forEach((card, index) => {
      const name = card.querySelector("h2");
      const description = card.querySelector("p");
      name.textContent = englishText.athletes[index].name;
      description.innerHTML = `<strong>${englishText.athletes[index].name}</strong> ${englishText.athletes[index].description}`;
    });

    languageToggle.textContent = "Deutsch";
    isEnglish = true;
  }

  languageToggle.addEventListener("click", function () {
    if (isEnglish) {
      translateToGerman();
    } else {
      translateToEnglish();
    }
  });

  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;

  function showImage(i) {
    if (i >= images.length) index = 0;
    if (i < 0) index = images.length - 1;
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
  }

  nextBtn.addEventListener("click", function () {
    index++;
    showImage(index);
  });

  prevBtn.addEventListener("click", function () {
    index--;
    showImage(index);
  });

  setInterval(() => {
    index++;
    showImage(index);
  }, 4500);

  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  };

  goToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Select the toggle button and headings
  const imageGalleryHeading = document.querySelector("h2[style='text-align: center;']:nth-of-type(2)");
  const latestNewsHeading = document.querySelector("h2[style='text-align: center;']:nth-of-type(3)");

  // Track the current language state
  let isGerman = false;

  // Add event listener to the toggle button
  languageToggle.addEventListener("click", () => {
    isGerman = !isGerman;

    // Update the button text
    languageToggle.textContent = isGerman ? "English" : "Deutsch";

    // Update the headings
    imageGalleryHeading.textContent = isGerman ? "Bildergalerie" : "Image Gallery";
    latestNewsHeading.textContent = isGerman ? "Neueste Nachrichten" : "Latest News";
  });
});
