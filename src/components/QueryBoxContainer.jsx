import React, { useState } from 'react'
import { Box, Flex, GridItem, Grid, Heading, Button, Slider, SliderThumb, SliderTrack, SliderFilledTrack } from '@chakra-ui/react'
import ProgressBar from '@ramonak/react-progress-bar'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

export default function QueryBoxContainer() {

    const questions = [
        "I have ambitious aims of making a difference.",
        "My leadership journey has progressed as I anticipated.",
        "I have spent fewer than 4 years in full-time service or ministry.",
        "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way.",
        "My plans are likely to succeed."
    ];

    const [individual_progress_bar, setindividual_progress_bar] = useState(20)
    const [curr_question, setcurr_question] = useState(0)

    return (
        <Flex
            height={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                height={'90%'}
                w={'80%'}
                bg={'white'}
                borderRadius={'15'}
            >
                <Grid
                    gridTemplateColumns={'repeat(4,1fr)'}
                    gap={20}
                    w={'80%'}
                    margin={'auto'}
                    py={'50'}
                >
                    <GridItem>
                        <ProgressBar
                            completed={individual_progress_bar}
                            bgColor="#20ADB4"
                            height="8px"
                            isLabelVisible={false}
                        />
                        <Heading as={'h2'} fontWeight={'400'} color={'#20ADB4'}>
                            IDEALISTIC
                        </Heading>
                    </GridItem>
                    <GridItem>
                        <ProgressBar
                            completed={0}
                            bgColor="#20ADB4"
                            height="8px"
                            isLabelVisible={false}
                        />
                        <Heading as={'h2'} fontWeight={'400'}>
                            DISILLUSIONED
                        </Heading>
                    </GridItem>
                    <GridItem>
                        <ProgressBar
                            completed={0}
                            bgColor="#20ADB4"
                            height="8px"
                            isLabelVisible={false}
                        />
                        <Heading as={'h2'} fontWeight={'400'}>
                            CYNICAL
                        </Heading>
                    </GridItem>
                    <GridItem>
                        <ProgressBar
                            completed={0}
                            bgColor="#20ADB4"
                            height="8px"
                            isLabelVisible={false}
                        />
                        <Heading as={'h2'} fontWeight={'400'}>
                            HOPEFUL
                        </Heading>
                    </GridItem>
                </Grid>

                <Box>
                    <Heading
                        as={'h2'}
                        color={'red'}
                        fontWeight={'400'}
                    >
                        {curr_question + 1}/{questions.length}
                    </Heading>
                    <Heading
                        as={'h2'}
                        fontWeight={'400'}
                        pt={'30'}
                        color={'#903333'}
                    >
                        {
                            questions[curr_question]
                        }
                    </Heading>
                </Box>

                <Slider aria-label='slider-ex-2' colorScheme='pink' defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>

                <Flex
                    justifyContent={'space-between'}
                    width={'85%'}
                    margin={'auto'}
                >
                    <Button
                        fontSize={'1rem'}
                        background={'transparent'}
                        border={'none'}
                        fontWeight={'bold'}
                        color='#4A4A4A'
                    >
                        <HiArrowLongLeft
                            fontSize={'2.5rem'}
                            fontWeight={'100'}
                            color='#4A4A4A'
                        />
                        PREV
                    </Button>

                    <Button
                        fontSize={'1rem'}
                        background={'transparent'}
                        border={'none'}
                        fontWeight={'bold'}
                        color='#4A4A4A'
                    >
                        NEXT
                        <HiArrowLongRight
                            fontSize={'2.5rem'}
                            fontWeight={'100'}
                            color='#4A4A4A'
                        />
                    </Button>
                </Flex>

            </Box>
        </Flex>
    )
}
