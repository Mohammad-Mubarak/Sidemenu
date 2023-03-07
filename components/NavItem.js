import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import {
	Flex,
	Text,
	Icon,
	Link,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Hide,
} from "@chakra-ui/react";
import NavHoverBox from "../components/NavHoverBox";

export default function NavItem({
	icon,
	title,
	active,
	navSize,
	title2,
	title3,
}) {
	const showCollapsible = title2 || title3;

	return (
		<Flex
			mt={30}
			flexDir="column"
			w="100%"
			alignItems={navSize == "small" ? "center" : "flex-start"}
		>
			{!showCollapsible ? (
				<>
					<Menu placement="right">
						<Link
							backgroundColor={active && "black"}
							p={3}
							borderRadius={8}
							_hover={{
								textDecor: "none",
								backgroundColor: "#AEC8CA",
							}}
							w={navSize == "large" && "100%"}
						>
							<MenuButton w="100%">
								<Flex>
									<Icon
										as={icon}
										fontSize="xl"
										color={active ? "#82AAAD" : "gray.500"}
									/>
									<Text
										ml={5}
										display={
											navSize == "small" ? "none" : "flex"
										}
									>
										{title}
									</Text>
								</Flex>
							</MenuButton>
						</Link>
					</Menu>
				</>
			) : null}

			{showCollapsible && (
				<>
					<Accordion allowToggle>
						<AccordionItem border={"none"}>
							{({ isExpanded }) => (
								<>
									<AccordionButton
										as={Link}
										backgroundColor={active && "#AAFF00"}
										p={3}
										borderRadius={8}
										w={navSize == "large" && "100%"}
										_hover={{
											textDecor: "none",
											backgroundColor: "black",
										}}
									>
										<Flex>
											<Icon
												as={icon}
												fontSize="xl"
												color={
													active
														? "#82AAAD"
														: "gray.500"
												}
											/>
											<Text
												ml={5}
												display={
													navSize == "small"
														? "none"
														: "flex"
												}
											>
												{title}
											</Text>

											<AccordionIcon p={1} ml="auto" />
										</Flex>
									</AccordionButton>

									{/* in large site this expend  */}
									{navSize == "large" && (
										<AccordionPanel
											variant="solid"
											borderBottom={0}
										>
											{title2 && (
												<Flex
													alignItems="center"
													py={2}
												>
													<Icon
														as={
															HiOutlineChevronDoubleRight
														}
														fontSize="md"
													/>
													<Text ml={6}>{title2}</Text>
												</Flex>
											)}

											{title3 && (
												<Flex
													alignItems="center"
													py={2}
												>
													<Icon
														as={
															HiOutlineChevronDoubleRight
														}
														fontSize="md"
													/>
													<Text ml={6}>{title3}</Text>
												</Flex>
											)}
										</AccordionPanel>
									)}
								</>
							)}
						</AccordionItem>
					</Accordion>
				</>
			)}
		</Flex>
	);
}
