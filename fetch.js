const list = document.getElementById("list");

function sendRequest(method, url, body) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error("Request failed!");
    }

    return resp.json();
  });
}

sendRequest("GET", "https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.id}.${item.title}`;
      list.append(li);
    });
  })
  .catch((error) => {
    console.error(error);
  });

const body = {
  title: "Title",
  body: "Some info",
  id: 1000,
};

sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", body)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
