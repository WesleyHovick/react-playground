import { BaseLayout } from '@/components/BaseLayout'
import { InferGetServerSidePropsType } from 'next'

export async function getServerSideProps() {
    let res = await fetch("http://localhost:3000/api/weather", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const allWeather = await res.json();

    return {
        props: {
            allWeather
        },
    }
}

export default function Home({
    allWeather
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log({allWeather})

    return <BaseLayout />
}
