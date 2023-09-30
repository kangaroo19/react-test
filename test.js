const api_1 = fetch("https://jsonplaceholder.typicode.com/users");
const api_2 = fetch("https://jsonplaceholder.typicode.com/users");
const api_3 = fetch("https://jsonplaceholder.typicode.com/users");

// 2. 프로미스 객체들을 묶어 배열로 구성
const promises = [api_1, api_2, api_3];

// 3. Promise.all() 메서드 인자로 프로미스 배열을 넣어, 모든 프로미스가 이행될 때까지 기다리고, 결과값을 출력
Promise.all(promises)
    .then((results) => {
      // results는 이행된 프로미스들의 값들을 담은 배열.
      // results의 순서는 promises의 순서와 일치.
      console.log(results); // [users1, users2, users3]
    })
    .catch((error) => {
      // 어느 하나라도 프로미스가 거부되면 오류를 출력
      console.error(error);
    });