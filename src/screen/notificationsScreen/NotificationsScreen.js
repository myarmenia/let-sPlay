import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity,ScrollView} from 'react-native';
import SettingsSvg from '../../assets/svg/SettingsSvg';
import CircleSvg from '../../assets/svg/CircleSvg';
import CanselSvg from '../../assets/svg/CanselSvg';
import AttachButtonSvg from '../../assets/svg/AttachButtonSvg';
import EstimateSvg from '../../assets/svg/EstimateSvg';
import ToCompleteSvg from '../../assets/svg/ToCompleteSvg';
import WatchSvg from '../../assets/svg/WatchSvg'



const NotificationsScreen = ({}) => {
  return (
    <ScrollView style={styles.container}>
    <View style={{ alignItems:'center'}}>
        <Text style={{textAlign:'center', color:'#000000', fontSize:24, fontWeight:'bold', marginTop:30}}>
        Уведомления
       </Text>
    </View>

    <View style={{marginTop:30, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <SettingsSvg/>
            <View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                    Очистить все
                </Text>
                <View style={{width:90, height:2, backgroundColor:'#657AC5'}}>

                </View>
            </View>
       </View>

<View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
    <View style={{flexDirection:'row', alignItems:'center', flex:6,marginRight:80 }}>
    <View style={{marginRight:10}}>
        <CircleSvg/>
    </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                    Игра завершена!
                    Прикрепите фото/видео игры
                </Text>
    </View>
           <View style={{flex:1, alignItems:'flex-end'}}>
           <View style={{marginBottom:10}}>
                <CanselSvg/>
           </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                        16:30
                </Text>
           </View>
</View>
<View style={{marginLeft:35, marginTop:10}}>
    <AttachButtonSvg/>
</View>


<View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
    <View style={{flexDirection:'row', alignItems:'center', flex:6,marginRight:80 }}>
    <View style={{marginRight:10}}>
        <CircleSvg/>
    </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                Игра завершена!
Оцените организатора игры
                </Text>
    </View>
           <View style={{flex:1, alignItems:'flex-end'}}>
           <View style={{marginBottom:10}}>
                <CanselSvg/>
           </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                        16:30
                </Text>
           </View>
</View>
<View style={{marginLeft:35, marginTop:10}}>
    <EstimateSvg/>
</View>
<View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
    <View style={{flexDirection:'row', alignItems:'center', flex:6,marginRight:80 }}>
    <View style={{marginRight:10}}>
        <CircleSvg/>
    </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                    Игра не состоялось. Необходимое количество игроков не набралось
                </Text>
    </View>
           <View style={{flex:1, alignItems:'flex-end'}}>
           <View style={{marginBottom:10}}>
                <CanselSvg/>
           </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                        16:30
                </Text>
           </View>
</View>

<View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
    <View style={{flexDirection:'row', alignItems:'center', flex:6,marginRight:80 }}>
    <View style={{marginRight:10}}>
        <CircleSvg/>
    </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>Пожалуйста завершите игру.
                </Text>
    </View>
           <View style={{flex:1, alignItems:'flex-end'}}>
           <View style={{marginBottom:10}}>
                <CanselSvg/>
           </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                        16:30
                </Text>
           </View>
</View>
<View style={{marginLeft:35, marginTop:10}}>
    <ToCompleteSvg/>
</View>

<View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
    <View style={{flexDirection:'row', alignItems:'center', flex:6,marginRight:80 }}>
    <View style={{marginRight:10}}>
        <CircleSvg/>
    </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>Вам поставили теги и рейтинг.
                </Text>
    </View>
           <View style={{flex:1, alignItems:'flex-end'}}>
           <View style={{marginBottom:10}}>
                <CanselSvg/>
           </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                        16:30
                </Text>
           </View>
</View>
<View style={{marginLeft:35, marginTop:10}}>
    <WatchSvg/>
</View>

<View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
    <View style={{flexDirection:'row', alignItems:'center', flex:6,marginRight:80 }}>
    <View style={{marginRight:10}}>
        <CircleSvg/>
    </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                У вас игра в 17.07.2022. Имя, место, время                </Text>
    </View>
           <View style={{flex:1, alignItems:'flex-end'}}>
           <View style={{marginBottom:10}}>
                <CanselSvg/>
           </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                        16:30
                </Text>
           </View>
</View>

<View style={{flexDirection:'row', alignItems:'center', marginTop:20, marginBottom:50}}>
    <View style={{flexDirection:'row', alignItems:'center', flex:6,marginRight:80 }}>
    <View style={{marginRight:10}}>
        <CircleSvg/>
    </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                Создание игры успешно выполнено.
Чат создан!!!                </Text>
    </View>
           <View style={{flex:1, alignItems:'flex-end'}}>
           <View style={{marginBottom:10}}>
                <CanselSvg/>
           </View>
                <Text style={{color:'#657AC5', fontSize:14, fontWeight:'bold'}}>
                        16:30
                </Text>
           </View>
</View>
       

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
      marginHorizontal:10
  },

});

export default NotificationsScreen;

