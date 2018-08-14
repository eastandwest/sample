import uuid from 'uuid/v1'

export async function handler(event) {
  console.log(event)
  const id = uuid()

  return {
    statusCode: 200,
    body: JSON.stringify({msg: id})
  }
}
