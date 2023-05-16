import React, { useEffect, useState } from 'react'
import {
    Box,
    Flex,
    GridItem,
    Grid,
    Heading,
    Button,
    Slider,
    SliderThumb,
    SliderTrack,
    SliderFilledTrack,
    Text
} from '@chakra-ui/react'
import ProgressBar from '@ramonak/react-progress-bar'
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2'

export default function QueryBoxContainer() {

    const [questions, setquestions] = useState([
        {
            question: "I have ambitious aims of making a difference.",
            answer: null
        },
        {
            question: "My leadership journey has progressed as I anticipated.",
            answer: null
        },
        {
            question: "I have spent fewer than 4 years in full-time service or ministry.",
            answer: null
        },
        {
            question: "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way.",
            answer: null
        },
        {
            question: "My plans are likely to succeed.",
            answer: null
        }
    ]);

    const [individual_progress_bar, setindividual_progress_bar] = useState(0)
    const [option_value, setoptions] = useState("Strongly Disagree")
    const [option_progress_bar, set_option_progress_bar] = useState(0)
    const [curr_question, setcurr_question] = useState(0)

    let getOptionsProgress = (option) => {
        console.log(option)
        if (option == "Strongly Disagree") {
            set_option_progress_bar(0)
        }
        else if (option == 'Disagree') {
            set_option_progress_bar(25);
        }
        else if (option == 'Neutral') {
            set_option_progress_bar(50);
        }
        else if (option == 'Agree') {
            set_option_progress_bar(75);
        }
        else if (option == 'Strongly Agree') {
            set_option_progress_bar(100);
        }


        questions[curr_question].answer = option;

        setquestions(questions)

        console.log(questions[curr_question])

        setindividual_progress_bar(individual_progress_bar + 20);
        if (curr_question != 4) {
            setcurr_question(curr_question + 1);
        }
    }

    function renderSliderOptions() {
        const options = [
            "Strongly Disagree",
            "Disagree",
            "Neutral",
            "Agree",
            "Strongly Agree",
        ];

        return options.map((option, index) => (
            <GridItem key={index} textAlign="center">
                <Box
                    w={15}
                    h={15}
                    borderRadius="50%"
                    bg="#20ADB4"
                    mb={2}
                    mx="auto"
                    cursor={'pointer'}
                    onClick={() => { getOptionsProgress(option) }}
                />
                <Text
                    fontSize={'1.4rem'}
                    fontWeight={'400'}
                    cursor={'pointer'}
                    onClick={() => { getOptionsProgress(option) }}
                >{option}</Text>
            </GridItem>
        ));
    }

    function handleprev() {
        if (curr_question != 0) {
            setcurr_question(curr_question - 1);
            set_option_progress_bar(option_progress_bar - 25)
            setindividual_progress_bar(individual_progress_bar - 20)
        }
    }

    useEffect(() => {
        console.log(curr_question)
        console.log(option_progress_bar)
        console.log(questions)
        console.log(questions[curr_question].answer)

        if (questions[curr_question].answer == "Strongly Disagree") {
            set_option_progress_bar(0)
        }
        else if (questions[curr_question].answer == 'Disagree') {
            set_option_progress_bar(25);
        }
        else if (questions[curr_question].answer == 'Neutral') {
            set_option_progress_bar(50);
        }
        else if (questions[curr_question].answer == 'Agree') {
            set_option_progress_bar(75);
        }
        else if (questions[curr_question].answer == 'Strongly Agree') {
            set_option_progress_bar(100);
        }
    }, [curr_question])

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
                        <Heading as={'h2'} fontWeight={'400'} textAlign={'center'} color={'#20ADB4'}>
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
                        <Heading as={'h2'} fontWeight={'400'} textAlign={'center'}>
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
                        <Heading as={'h2'} fontWeight={'400'} textAlign={'center'}>
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
                        <Heading as={'h2'} fontWeight={'400'} textAlign={'center'}>
                            HOPEFUL
                        </Heading>
                    </GridItem>
                </Grid>

                <Box
                    textAlign={'center'}
                >
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
                        textAlign={'center'}
                        fontSize={'24px'}
                        w={'80%'}
                        margin={'auto'}
                    >
                        {
                            questions[curr_question].question
                        }
                    </Heading>
                </Box>

                <Box
                    w={'80%'}
                    margin={'auto'}
                    py={60}

                >
                    <Box
                        position={'relative'}
                    >
                        <ProgressBar
                            completed={option_progress_bar}
                            bgColor="#20ADB4"
                            height="5px"
                            isLabelVisible={false}
                            width='80%'
                            margin='auto'
                            className='answer_options_progress_bar'
                        />
                        <Grid gridTemplateColumns={`repeat(5, 1fr)`} gap={4} mt={8} px={4}
                            position={'relative'}
                        >
                            {renderSliderOptions()}
                        </Grid>
                    </Box>
                </Box>


                {/* Next and prev Buttons */}
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
                        cursor={'pointer'}
                        onClick={() => {
                            handleprev()
                        }}
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
                        cursor={'pointer'}
                        onClick={() => {
                            if (curr_question != 4) {
                                setcurr_question(curr_question + 1)
                                setindividual_progress_bar(individual_progress_bar + 20)
                            }
                        }}
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


// some commit 