import { BaseLayout } from '@/components/BaseLayout'
import { InferGetServerSidePropsType } from 'next'

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.NEXT_API_URL}/api/weather`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const allWeather = await res.json()

    return {
        props: {
            allWeather,
        },
    }
}

export default function Home({
    allWeather,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log({ allWeather })

    return <BaseLayout />
}
