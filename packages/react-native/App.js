/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const scale = {
  1: {
    px: '16px',
    percentage: '100%',
  },
  2: {
    px: '18px',
    percentage: '112.5%',
  },
  3: {
    px: '24px',
    percentage: '150%',
  },
  4: {
    px: '32px',
    percentage: '200%',
  },
};

const App: () => React$Node = () => {
  const [step, setStep] = React.useState(1);
  const changeStep = (modifier) => {
    if (modifier === 'increment') {
      setStep((currentStep) => {
        const newStep = currentStep + 1;
        document.documentElement.style.setProperty(
          '--font-size',
          scale[newStep].percentage,
        );
        return newStep;
      });
    } else if (modifier === 'decrement') {
      setStep((currentStep) => {
        const newStep = currentStep - 1;
        document.documentElement.style.setProperty(
          '--font-size',
          scale[newStep].percentage,
        );
        return newStep;
      });
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Testing scaling with layout and typography.
              </Text>
              {/* <Text>Change the steps to increase/decrease the font size</Text>
              <Button
                disabled={step === 1}
                className="stepper"
                onClick={() => changeStep('decrement')}>
                -
              </Button>
              <Text className="step-count">{scale[step].px}</Text>
              <Button
                disabled={step === 4}
                className="stepper"
                onClick={() => changeStep('increment')}>
                +
              </Button>
              <Text className="p1">Text with rem font size</Text>
              <Text className="p2">Text with px font size</Text> */}
            </View>
            <View style={styles.sectionContainer}>
              <TouchableOpacity style={styles.button1}>
                <Text style={styles.button1Text}>layout pr, text pr</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.button2Text}>layout dp, text pr</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button3}>
                <Text allowFontScaling={false} style={styles.button4Text}>
                  layout dp, text dp w/ autoscale
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button4}>
                <Text allowFontScaling={false} style={styles.button3Text}>
                  layout pr, text dp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button1: {
    marginBottom: 16,
    height: 48 * PixelRatio.get(),
    backgroundColor: '#3987f0',
    borderRadius: 2,
    paddingLeft: 24 * PixelRatio.get(),
    paddingRight: 24 * PixelRatio.get(),
    paddingTop: 12 * PixelRatio.get(),
    paddingBottom: 12 * PixelRatio.get(),
  },
  button1Text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16 * PixelRatio.get(),
  },
  button2: {
    marginBottom: 16,
    minHeight: 48,
    backgroundColor: '#3987f0',
    borderRadius: 2,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  button2Text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16 * PixelRatio.get(),
  },
  button3: {
    marginBottom: 16,
    height: 48,
    backgroundColor: '#3987f0',
    borderRadius: 2,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  button3Text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  button4: {
    marginBottom: 16,
    height: 48 * PixelRatio.get(),
    backgroundColor: '#3987f0',
    borderRadius: 2,
    paddingLeft: 24 * PixelRatio.get(),
    paddingRight: 24 * PixelRatio.get(),
    paddingTop: 12 * PixelRatio.get(),
    paddingBottom: 12 * PixelRatio.get(),
  },
  button4Text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;
