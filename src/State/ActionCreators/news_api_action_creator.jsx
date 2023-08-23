import axios from "axios";

export const fetchNews = (searchText) => async (dispatch) => {

    var queryData;
    if(searchText){
        queryData = {
            $query: {
              "$and": [
                  {
                      "keyword": `${searchText}`,
                      "keywordLoc": "body"
                  },
                  {
                      "keyword": `${searchText}`,
                      "keywordLoc": "title"
                  },
                  {
                    locationUri: "http://en.wikipedia.org/wiki/India"
                  },
                  {
                    sourceLocationUri: "http://en.wikipedia.org/wiki/India"
                  }
              ]
            }
          };
    } else {
          queryData = {
            $query: {
              $and: [
                {
                  locationUri: "http://en.wikipedia.org/wiki/India"
                },
                {
                  sourceLocationUri: "http://en.wikipedia.org/wiki/India"
                }
              ]
            }
          };
    }
   const requestBody = {
        query: queryData,
        resultType: "articles",
        articlesSortBy: "date",
        includeSourceLocation: true,
        includeSourceRanking: true,
        apiKey: "24c21d4e-6206-4fa1-806e-a78d88a31c3a"
      };

    axios.post("https://newsapi.ai/api/v1/article/getArticles", requestBody)
    .then(response => {
        console.log(response.data.articles.results);
        dispatch({
            type: "FETCH_NEWS",
            payload: response.data.articles.results
        })
  })

  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
    // const data = await res.json();
}
