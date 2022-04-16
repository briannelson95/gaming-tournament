// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from "../../lib/sanity"

export default async function handler(req, res) {

  const documentTitle = 'Another new Document'

  const newDocument = {
    _type: 'newDocument',
    title: documentTitle,
  }

  try {
    const result = await client.create(newDocument).then((res) => {
      console.log('RESULT FROM SANITY', res)
    })

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result)
    }
  }

  catch (error) {
    console.log(error)
    return {
      headers: { 'Content-Type': 'application/json' },
      statusCode: 500,
      body: error.responseBody|| JSON.stringify({ error: 'an error has occured' })
    }
  }

  // res.status(200).json({ name: 'John Doe' })
}

