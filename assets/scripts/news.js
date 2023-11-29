const apiUrl = "https://inshortsapi.vercel.app/news";
const category = "business";
let news_list ;

// Construct the URL with the category parameter
const url = `${apiUrl}?category=${category}`;


fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
  })
  .then(res => {
    // Process the data as needed
    let parentElement = document.getElementById("news-row");

    (res.data).forEach(newsItem => {
        // Create elements
        const newsDiv = document.createElement("div");
        newsDiv.classList.add("news", "col-md-6", "col-lg-3");

        const newsLink = document.createElement("a");
        newsLink.href = newsItem.url;
        newsLink.target = "_blank";

        const newsImg = document.createElement("img");
        newsImg.src = newsItem.imageUrl;
        newsImg.alt = newsItem.title;
        newsImg.classList.add("news-img");

        const newsDesc = document.createElement("p");
        newsDesc.classList.add("desc");
        newsDesc.textContent = newsItem.title;

        // Append elements to the parent
        newsLink.appendChild(newsImg);
        newsLink.appendChild(newsDesc);
        newsDiv.appendChild(newsLink);
        parentElement.appendChild(newsDiv);

      });

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



