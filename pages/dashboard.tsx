import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { project } from '../config/project'
import Header from '../components/Header'
import { Grid, GridItem } from '@chakra-ui/layout'
import { useSession } from 'next-auth/client'
import AccessDenied from '../components/AccessDenied'


export default function Page() {
    const [session, loading] = useSession()
    const [content, setContent] = useState()

    // Fetch content from protected route
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/protected')
            const json = await res.json()
            if (json.content) { setContent(json.content) }
        }
        fetchData()
    }, [session])

    // When rendering client side don't display anything until loading is complete
    if (typeof window !== 'undefined' && loading) return null

    // If no session exists, display access denied message
    if (!session) { return <AccessDenied /> }

    // If session exists, display content
    return (
        <>
            <Head>
                <title>{project.name} | Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header heading="Dashboard" />
            <Grid
                minH={["72vh", "75vh"]}
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(5, 1fr)"
                bg="back.800"
            // gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg="whiteAlpha.50" />
                <GridItem rowSpan={2} colSpan={3} bg="blackAlpha.200" />
                <GridItem rowSpan={2} colSpan={1} bg="whiteAlpha.50" />
            </Grid>


        </>
    )
}

