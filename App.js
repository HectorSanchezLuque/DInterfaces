/**

 * Sample React Native App

 * https://github.com/facebook/react-native

 *

 * @format

 * @flow strict-local

 */



import React from 'react';
import { Button } from 'react-native-paper';
import { Switch, Surface, Chip } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';





import {

  SafeAreaView,

  ScrollView,

  StatusBar,

  StyleSheet,

  Text,

  useColorScheme,

  View,

} from 'react-native';

import { TextInput } from 'react-native-paper';



import {

  Colors,

  DebugInstructions,

  Header,

  LearnMoreLinks,

  ReloadInstructions,

} from 'react-native/Libraries/NewAppScreen';



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 
 * LTI update could not be added via codemod */

const Section = ({ children, title }) => {

  const isDarkMode = useColorScheme() === 'dark';


  return (


    <View style={styles.sectionContainer}>

      <Text

        style={[

          styles.sectionTitle,

          {

            color: isDarkMode ? Colors.white : Colors.black,

          },

        ]}>

        {title}

      </Text>

      <Text

        style={[

          styles.sectionDescription,

          {

            color: isDarkMode ? Colors.light : Colors.dark,

          },

        ]}>

        {children}

      </Text>

    </View>

  );

};



const App = () => {

  const isDarkMode = useColorScheme() === 'dark';


  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const [date, setDate] = React.useState < Date | undefined > (undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  const backgroundStyle = {

    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };



  return (

    <SafeAreaView style={backgroundStyle}>

      <StatusBar

        barStyle={isDarkMode ? 'light-content' : 'dark-content'}

        backgroundColor={backgroundStyle.backgroundColor}

      />

      <ScrollView

        contentInsetAdjustmentBehavior="automatic"

        style={backgroundStyle}>

        <Header />

        <View

          style={{

            backgroundColor: isDarkMode ? Colors.black : Colors.white,

          }}>

          <Text style={styles.sectionDescription} font>TextInput (email)</Text>
          <TextInput style={styles.mail} backgroundColor={"white"} placeholder={"Email"}></TextInput>

          <Text style={styles.sectionDescription}>Button(amb text i icona)</Text>

          <Button icon="alien" mode="contained" onPress={() => console.log('Pressed')}>Alien</Button>
          <Button icon="alien" mode="contained" color='purple' textColor='black' onPress={() => console.log('Pressed')}>ALIEN</Button>
          <Button icon="alien" mode="text" textColor='purple' onPress={() => console.log('Pressed')}>ALIEN</Button>
          <Button icon="alien" mode="elevated" textColor='purple' onPress={() => console.log('Pressed')}>ALIEN</Button>

          <Text style={styles.sectionDescription}>Switch Necessites un descans?</Text>

          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={"red"} />


          <Text style={styles.sectionDescription}>Botó dins d'un component surface?</Text>
          <Surface style={styles.surface} elevation={4}>
            <Button icon="alien" mode="elevated" textColor='purple' color="black" onPress={() => console.log('Pressed')}>Alien</Button>
          </Surface>

          <Text style={styles.sectionDescription}>Provant Chips</Text>

          <View style={styles.chip}>
            <Chip icon="web" onPress={() => textColor = "red"}>Internet</Chip>
            <Chip icon="wifi" onPress={() => selectedColor= "red"}>Wifi</Chip>
          </View>

          <Text style={styles.sectionDescription}>Provant Calendari</Text>
          {/* <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">Seleccione una data</Button>
          <DatePickerModal
            locale="en"
            mode="single"
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            onConfirm={onConfirmSingle} /> */}

        </View>

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  sectionContainer: {

    marginTop: 32,

    paddingHorizontal: 24,

  },

  sectionTitle: {

    fontSize: 24,

    fontWeight: '600',

  },

  sectionDescription: {

    marginTop: 25,

    fontSize: 25,

    fontWeight: '700',

    marginLeft: 25,

    marginRight: 25,

    color: "black",

  },

  highlight: {

    fontWeight: '700',

  },

  mail: {
    marginTop: 5,

    fontSize: 18,

    fontWeight: '700',

    marginLeft: 25,

    marginRight: 25,

    borderStyle: 'solid',

    borderWidth: 1,
  },
  chip: {
    flexDirection: 'row',

    width: 120,

    marginLeft: 20,

    marginTop: 20,

    marginBottom: 10,
  },

});



export default App;