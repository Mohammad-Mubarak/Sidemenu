import React, { useState ,useDisclosure} from "react";
import {
	Flex,
	Text,
	IconButton,
	Divider,
	Avatar,
	Heading,
    Slide
} from "@chakra-ui/react";
import {
	FiMenu,
	FiHome,
	FiCalendar,
	FiUser,
	FiDollarSign,
	FiBriefcase,
	FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "../components/NavItem";

export default function Sidebar() {


      
     

	const [navSize, changeNavSize] = useState("large");
	return (
		<Flex
			pos="sticky"
			left="2"
			minH={"95vh"}
			onMouseEnter={() => {
				if (navSize == "small") changeNavSize("large");
			}}
			onMouseLeave={() => {
				if (navSize == "large") changeNavSize("small");
			}}
			marginTop="2.5vh"
			boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
			borderRadius={navSize == "small" ? "15px" : "30px"}
			w={navSize == "small" ? "75px" : "200px"}
			flexDir="column"
			justifyContent="space-between"
            transition={"all 0.3s ease-in-out"}
		>
			<Flex
				p="5%"
				flexDir="column"
				w="100%"
				alignItems={navSize == "small" ? "center" : "flex-start"}
				as="nav"
			>
				<IconButton
					background="none"
					mt={5}
					_hover={{ background: "none" }}
					icon={<FiMenu />}
					onClick={() => {
						if (navSize == "small") changeNavSize("large");
						else changeNavSize("small");
					}}
				/>
				<NavItem
					navSize={navSize}
					icon={FiHome}
					title="Dashboard"
					active
				/>
				<NavItem
					navSize={navSize}
					icon={FiCalendar}
					title="Calendar"
					title2={"festivals"}
					title3={"Working days"}
				/>
				<NavItem
					navSize={navSize}
					icon={FiUser}
					title="Clients"
					title2={"international"}
					title3={"local"}
				/>
				<NavItem
					navSize={navSize}
					icon={FiDollarSign}
					title="Balance"
					title2={"saving"}
					title3={"current"}
				/>
				<NavItem
					navSize={navSize}
					icon={FiBriefcase}
					title="Reports"
					title2={"today"}
					title3={"international"}
				/>

				<NavItem
					navSize={navSize}
					icon={FiSettings}
					title="Settings"
					title2="Airoplane"
					title3="Data mode"
				/>
			</Flex>

			<Flex
				p="5%"
				flexDir="column"
				w="100%"
				alignItems={navSize == "small" ? "center" : "flex-start"}
				mb={4}
			>
				<Divider display={navSize == "small" ? "none" : "flex"} />
				<Flex mt={4} align="center">
					<Avatar size="sm" src="avatar-1.jpg" />
					<Flex
						flexDir="column"

						ml={4}
						display={navSize == "small" ? "none" : "flex"}
					>
						<Heading as="h3" size="sm">
							Md Mubarak
						</Heading>
						<Text color="gray">Admin</Text>
					</Flex>
				</Flex>
			</Flex>



		</Flex>
	);
}
