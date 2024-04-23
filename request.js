let listValues = [];

const list = document.getElementById("list");

function sendRequest(method, url, body = null) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onload = () => {
      const resp = JSON.parse(xhr.response);

      resolve(resp);
    };

    xhr.onerror = function () {
      reject(new Error("Request failed"));
    };

    if (body !== null) {
      xhr.send(body);
    } else {
      xhr.send();
    }
  });

  return promise;
}

sendRequest("GET", "https://jsonplaceholder.typicode.com/posts/3").then(
  (data) => {
    console.log(data);
  }
);

sendRequest("GET", "https://jsonplaceholder.typicode.com/posts").then(
  (data) => {
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.id}.${item.title}`;
      list.append(li);
    });
  }
);

const body = {
  id: 5,
};

sendRequest(
  "POST",
  "https://jsonplaceholder.typicode.com/posts",
  JSON.stringify(body)
).then((resp) => {
  console.log(resp);
});

sendRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/4").then(
  (resp) => {
    console.log(resp);
  }
);
