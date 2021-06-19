import Head from 'next/head'
import React from 'react'
import { project } from '../config/project'
import Header from '../components/Header'
import { Stack, Container, Heading, Box, Text, Grid, GridItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const Dashboard = () => {
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

export default Dashboard
