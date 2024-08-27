
import { Box, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
// Assets
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import { DocumentIcon, PersonIcon } from 'components/icons/Icons';
import { toastMessageError } from 'components/utilities/CommonToastMessages';
import { miniCard } from 'Interface/adminDashboard';
import { useEffect, useState } from 'react';
import { MdAddTask } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { getMiniCardsDetails } from 'services/dashboardDetails';
import { RootState } from 'State Management/Store/Store';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import PieCard from 'views/admin/default/components/PieCard';
import Tasks from 'views/admin/default/components/Tasks';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex';
import CheckTable from 'views/admin/rtl/components/CheckTable';
export default function UserReports() {
	// Chakra Color Mode
	const token = useSelector((state: RootState) => state.root.user.token)

	const [miniCards, setMiniCards] = useState<miniCard>({
		total_blogs: 0,
		verified_blogs: 0,
		unverified_blogs: 0,
		total_users: 0,
		active_users: 0,
		inactive_users: 0,
	  });
	const [loadingMiniCards, setLoadingMiniCards] = useState<boolean>(false)
	const getminicardsDetials = async () => {
		setLoadingMiniCards(true)
		const response = await getMiniCardsDetails(token as string)
		if(response.success){
			setMiniCards(response.data as miniCard)
			setLoadingMiniCards(false)
		}
		else{
			toastMessageError(response.message)
			setLoadingMiniCards(false)
		}

	}

	useEffect(() => {
		getminicardsDetials()
	},[])

	const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{!loadingMiniCards && <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg='linear-gradient(90deg, rgb(67, 24, 255) 0%,rgb(67, 24, 255) 100%)'
							icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
						/>
					}
					name='Verified Blogs'
					value={miniCards.verified_blogs}
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg='linear-gradient(90deg, rgba(101,98,98, 1) 0%,  rgba(101,98,98, 1) 100%)'
							icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
						/>
					}
					name='Unverified Blogs'
					value={miniCards.unverified_blogs}
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={DocumentIcon} color={brandColor} />}
						/>
					}
					name='Total Blogs'
					value={miniCards.total_blogs}
				/>
				{/* <MiniStatistics name="Total Blogs" value={miniCards.total_blogs} />
				<MiniStatistics
					endContent={
						<Flex me='-16px' mt='10px'>
							<FormLabel htmlFor='balance'>
								<Avatar src={Usa} />
							</FormLabel>
							<Select id='balance' variant='mini' mt='5px' me='0px' defaultValue='usd'>
								<option value='usd'>USD</option>
								<option value='eur'>EUR</option>
								<option value='gba'>GBA</option>
							</Select>
						</Flex>
					}
					name='Unverified Blogs'
					value={"312"}
				/> */}
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg='linear-gradient(90deg, rgb(67, 24, 255) 0%,rgb(67, 24, 255) 100%)'
							icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
						/>
					}
					name='Active Users'
					value={miniCards.active_users}
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg='linear-gradient(90deg, rgba(101,98,98, 1) 0%,  rgba(101,98,98, 1) 100%)'
							icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
						/>
					}
					name={"Inactive Users"}
					value={miniCards.inactive_users}
				/>
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={PersonIcon} color={brandColor} />}
						/>
					}
					name={"Total Users"}
					value={miniCards.total_users}
				/>
			</SimpleGrid>}

			<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
				<TotalSpent />
				<WeeklyRevenue />
			</SimpleGrid>
			<SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
				<CheckTable tableData={tableDataCheck} />
				<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
					<DailyTraffic />
					<PieCard />
				</SimpleGrid>
			</SimpleGrid>
			<SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
				<ComplexTable tableData={tableDataComplex} />
				<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
					<Tasks />
					<MiniCalendar h='100%' minW='100%' selectRange={false} />
				</SimpleGrid>
			</SimpleGrid>
		</Box>
	);
}
