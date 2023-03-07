import Sidebar from "../components/Sidebar";
import {
	Flex,
	Text,
	IconButton,
	Card,
	CardBody,
	Image,
	Stack,
	Heading,
	ButtonGroup,
	CardFooter,
	Divider,
	Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
	var [ImgData, setData] = useState("");
	var [cData, setDatac] = useState({});


	useEffect(() => {
		const opt = {
			method: 'GET',
			headers: {
			  'X-RapidAPI-Key': 'b6d43456b4msh4269427a507ce22p138de2jsn8c3088268dd5',
			  'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
			}
		  };

		fetch('https://any-anime.p.rapidapi.com/anime/', opt)
		.then(response => response.json())
		.then(response => setData(response.stuff[0].image))
		.catch(err => console.error(err));
  


		
		const options = {
			method: 'GET',
			headers: {
			  'X-RapidAPI-Key': 'b6d43456b4msh4269427a507ce22p138de2jsn8c3088268dd5',
			  'X-RapidAPI-Host': 'motivation-quotes-api.p.rapidapi.com'
			}
		  };
		  
		  fetch('https://motivation-quotes-api.p.rapidapi.com/api/quotes', options)
			.then(response => response.json())
			.then(response => setDatac(response[0]))
			.catch(err => console.error(err));



	}, []);

	return (
		<Flex w={"70vw"}>
			<Sidebar />
			<Flex
				pos="absolute"
				top="50%"
				left="50%"
				transform="translate(-50%, -50%)"
				maxW={"sm"}
				className="container"
			>
				<Card   className="card" maxW="sm">
					<CardBody>
						<Image
							src={ImgData}
							alt="Green double couch with wooden legs"
							borderRadius="lg"
						/>
						<Stack mt="6" spacing="3">
							<Heading size="md">Random Images On Reload</Heading>
							<Text>
							{cData.quote}
							</Text>
							<Text color="blue.600" fontSize="2xl">
								$450
							</Text>
						</Stack>
					</CardBody>
					<Divider />
					<CardFooter>
						<ButtonGroup spacing="2">
							<Button variant="solid" colorScheme="blue">
								Buy now
							</Button>
							<Button variant="ghost" colorScheme="blue">
								Add to cart
							</Button>
						</ButtonGroup>
					</CardFooter>
				</Card>
			</Flex>
		</Flex>
	);
}
