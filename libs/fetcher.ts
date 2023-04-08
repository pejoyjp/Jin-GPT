import axios from "axios"

const fetcher = (url:string) =>axios.get(url).then((res)=>res.data)
//const fetcher = (url:string) =>fetch(url).then((res)=>res.json())
export default fetcher

// const fetcher = (url:string) => fetch(url) 
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok'); // 可以根据需求自定义错误处理
//     }
//     return response.json(); // 解析响应为 JSON 对象
//   })
//   .catch(error => {
//     console.error('Fetch error:', error); // 处理错误
//   });

// export default fetcher