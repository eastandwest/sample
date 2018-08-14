// export function handler(event, context, callback) {
//   console.log(event)
//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({msg: "Hello, World!"})
//   })
// }
export async function handler(event) {
  console.log(event)

  return {
    statusCode: 200,
    body: JSON.stringify({msg: "Hello, World!"})
  }
}
