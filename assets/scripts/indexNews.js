
// const category = "business";

// const url = 'https://inshorts.vercel.app/news';
//business category not working

// const url =
//     "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a0bdc49cf2674d7a801743c2611abf3a";

const url = "https://demo-azure-tau.vercel.app/api/getNewsInvApi";

fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((res) => {
        console.log(res.news);
        // Process the data as needed
        let parentElement = document.getElementById("index-news-row");
        let three_news = res.news.slice(3, 6);

        three_news.forEach((newsItem) => {
            // console.log(newsItem.news_obj.source_url)
            // Create elements
            const newsDiv = document.createElement("div");
            newsDiv.classList.add("news", "col-md-6", "col-lg-3");

            const newsLink = document.createElement("a");
            newsLink.href = newsItem.news_obj.source_url;
            newsLink.target = "_blank";

            const newsImg = document.createElement("img");
            newsImg.src = newsItem.news_obj.image_url;
            newsImg.alt = newsItem.title;
            newsImg.classList.add("news-img");

            const newsDesc = document.createElement("p");
            newsDesc.classList.add("desc");
            newsDesc.textContent = newsItem.news_obj.title;

            // Append elements to the parent
            newsLink.appendChild(newsImg);
            newsLink.appendChild(newsDesc);
            newsDiv.appendChild(newsLink);
            parentElement.appendChild(newsDiv);

            console.log(parentElement);
        });

        // console.log(res.data[0]);
    })
    .catch((error) => {
        console.error("Error during fetch:", error);
    });

