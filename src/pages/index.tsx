import { useEffect } from "react"

export default function Home(props) {

  console.log(props.episodes);
  

  return (
    <>
    <h1>Index</h1>
    </>
  )
}

export async function getStaticProps() {

  const url = await fetch('http://localhost:3333/episodes')
  const data = await url.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}