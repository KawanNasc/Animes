import { ScrollView, SafeAreaView, Image, Text, StyleSheet } from 'react-native';

import { useFonts, Silkscreen_400Regular } from '@expo-google-fonts/silkscreen';
import { Eater_400Regular } from '@expo-google-fonts/eater';

export default function Home() {

  let [ fontsLoaded, fontError ] = useFonts({ Silkscreen_400Regular, Eater_400Regular, })

  if ( !fontsLoaded && !fontError ) { return null; }

  return (

      <ScrollView>

        <SafeAreaView style={estilos.intro}>

          <Text style={estilos.animes}> Animes </Text>

          <Text style={estilos.descricao}> Confira os principais animes do nosso blog </Text>

        </SafeAreaView>

        <SafeAreaView style={estilos.body}>

          <SafeAreaView style={estilos.onepiece}>
        
            <Image style={estilos.img} source={require('../assets/introPiece.png')} />
            <Text style={estilos.animes}> One Piece </Text>

          </SafeAreaView>

         <SafeAreaView style={estilos.onepunch}>

          <Text style={estilos.animes}> One Punch Man </Text>
          <Image style={estilos.img} source={require('../assets/introPunch.png')} />
        
        </SafeAreaView>

        <SafeAreaView style={estilos.naruto}>

          <Text style={estilos.animes}> Naruto </Text>
          <Image style={estilos.img} source={require('../assets/introNaruto.png')} />
        
        </SafeAreaView>

      </SafeAreaView>

    </ScrollView>

  );

}

const estilos = StyleSheet.create({

  body: { flex: 1, justifyContent: "center", backgroundColor: "#000000", fontFamily: "Eater_400Regular" },

  animes: { color: "#ff1a1a", fontSize: 30, fontFamily: 'Silkscreen_400Regular', alignSelf: "center" },

  intro: { backgroundColor: "#99ff33", width: 350, alignSelf: "center", borderRadius: 30, alignItems: "center", margin: 18 },

  descricao: { fontSize: 16, margin: 10},

  onepiece: { backgroundColor: "#4dd2ff", width: 350, alignSelf: "center", borderRadius: 30, alignItems: "center", margin: 15 },

  onepunch: { backgroundColor: "#e6e600", width: 350, alignSelf: "center", borderRadius: 30, alignItems: "center", margin: 15 },

  naruto: { backgroundColor: "#ff6600", width: 350, alignSelf: "center", borderRadius: 30, alignItems: "center", margin: 15 },

  img: { width: 300, height: 100, margin: 20, alignSelf: "center" }

})