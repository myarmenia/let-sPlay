import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextInput from '../UI/inputs/CustomInput';
import BigLightColorButton from '../UI/buttons/bigButtons/BigLightColorButton';
import BigMediumColorButton from '../UI/buttons/bigButtons/BigMediumColorButton';
import BigDarkColorButton from '../UI/buttons/bigButtons/BigDarkColorButton';
import SmallLightColorButton from '../UI/buttons/smallButtons/SmallLightColorButton';
import SmallMediumColorButton from '../UI/buttons/smallButtons/SmallMediumColorButton'
import SmallDarkColorButton from '../UI/buttons/smallButtons/SmallDarkColorButton';
import CustomRadioButton from '../UI/radioButton/CustomRadioButton';
import UpcomingSvg from '../assets/svg/upcomingSvg/UpcomingSvg';
import UpcomingActiveSvg from '../assets/svg/upcomingSvg/UpcomingActiveSvg';
import HomeSvg from '../assets/svg/homeSvg/HomeSvg';
import HomeActiveSvg from '../assets/svg/homeSvg/HomeActiveSvg';
import ChatSvg from '../assets/svg/chatSvg/ChatSvg';
import ChatActiveSvg from '../assets/svg/chatSvg/ChatActiveSvg';
import CardSvg from '../assets/svg/cardSvg/CardSvg';
import CardActiveSvg from '../assets/svg/cardSvg/CardActiveSvg';
import ProfileSvg from '../assets/svg/profileSvg/ProfileSvg';
import ProfileActiveSvg from '../assets/svg/profileSvg/ProfileActiveSvg';
import NotificationSvg from '../assets/svg/notificationSvg/NotificationSvg';
import NotificationActiveSvg from '../assets/svg/notificationSvg/NotificationActiveSvg';
import InputProfileSvg from '../assets/svg/inputIconsSvg/InputProfileSvg';
import InputCallSvg from '../assets/svg/inputIconsSvg/InputCallSvg';
import InputMessageSvg from '../assets/svg/inputIconsSvg/InputMessageSvg';
import LockSvg from '../assets/svg/lockSvg/LockSvg';
import SwitchComponent from '../UI/switchComponent/SwitchComponent';
import RegistrationButtonSvg from '../assets/svg/buttonsSvg/RegistrationButtonSvg';
import LoginButton from '../UI/buttons/LoginButton';
import RegistrationButton from '../UI/buttons/RegistrationButton';
import MainScreen from '../screen/authScreen/MainScreen';
import ProfileScreen from './profileScreen/ProfileScreen';
import PlayTeamTournamentScreen from './playTeamTournamentScreen/PlayTeamTournamentScreen';
import GalleryScreen from './galleryScreen/GalleryScreen';
import NotificationsScreen from './notificationsScreen/NotificationsScreen';
import EnrollInATeamScreen from './enrollInATeamScreen/EnrollInATeamScreen';
import OrganizeGameScreen from './organizeGameScreen/OrganizeGameScreen';
import FootbakkGameScreen from './footbakkGameScreen/FootbakkGameScreen';
import CanopyGameScreen from './canopyGameScreen/CanopyGameScreen';
import ThreeHundredScreen from './threeHundredScreen/ThreeHundredScreen';
import BasketballGameScreen from './basketballGameScreen/BasketballGameScreen';
import VolleyballGameScreen from './volleyballGameScreen/VolleyballGameScreen';
import PioneerballGameScreen from './pioneerballGameScreen/PioneerballGameScreen';
import HockeyGameScreen from './hockeyGameScreen/HockeyGameScreen.js'


const TestScreen = ({}) => {
  return (
    <View style={styles.container}>
      {/* <View style={{marginHorizontal:25}}>
        <TextInput/>
      </View> */}
      <View>
        {/* <BigLightColorButton textBtn = {'Логин'}/> */}
        {/* <BigMediumColorButton textBtn = {'Логин'}/> */}
        {/* <BigDarkColorButton textBtn = {'Логин'}/> */}
        {/* <SmallLightColorButton textBtn = {'Логин'}/> */}
        {/* <SmallMediumColorButton textBtn = {'Логин'}/> */}
        {/* <SmallDarkColorButton textBtn = {'Логин'}/> */}
        {/* <CustomRadioButton/> */}
        {/* <UpcomingSvg/> */}
        {/* <UpcomingActiveSvg/> */}
        {/* <HomeSvg/> */}
        {/* <HomeActiveSvg/> */}
        {/* <ChatSvg/> */}
        {/* <ChatActiveSvg/> */}
        {/* <CardSvg/> */}
        {/* <CardActiveSvg/> */}
        {/* <ProfileSvg/> */}
        {/* <ProfileActiveSvg/> */}
        {/* <NotificationSvg/> */}
        {/* <NotificationActiveSvg/> */}
        {/* <InputProfileSvg/> */}
        {/* <InputCallSvg/> */}
        {/* <InputMessageSvg/> */}
        {/* <LockSvg/> */}
        {/* <SwitchComponent/> */}
        {/* <RegistrationButton/> */}
        {/* <LoginButton/> */}
        {/* <MainScreen/> */}
        {/* <ProfileScreen/>
        <PlayTeamTournamentScreen/>
        <GalleryScreen/>
        <NotificationsScreen/> */}
        {/* <EnrollInATeamScreen/> */}
        {/* <OrganizeGameScreen/> */}
        {/* <FootbakkGameScreen/> */}
        {/* <CanopyGameScreen/> */}
        {/* <ThreeHundredScreen/> */}
        {/* <BasketballGameScreen/> */}
        {/* <VolleyballGameScreen/> */}
        {/* <PioneerballGameScreen/> */}
        <HockeyGameScreen/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TestScreen;
