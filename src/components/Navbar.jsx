import React from 'react'
import { Box, Heading, Flex } from '@chakra-ui/react'

export default function Navbar() {
    return (
        <div >
            <Flex
                background={"white"}
                alignItems={'center'}
                justifyContent={'center'}
                py={'15'}
            >
                <Heading as={'h2'} color={'red'}>
                    ARE YOU DISILLUSIONED?
                </Heading>
            </Flex>
        </div>
    )
}
