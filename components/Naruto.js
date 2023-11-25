import { ScrollView, SafeAreaView, Image, Text, StyleSheet } from 'react-native';

import { useFonts, Silkscreen_400Regular } from '@expo-google-fonts/silkscreen';
import { KiteOne_400Regular } from '@expo-google-fonts/kite-one';
import { Eater_400Regular } from '@expo-google-fonts/eater';

export default function Naruto() {

  let [ fontsLoaded, fontError ] = useFonts({ Silkscreen_400Regular,  KiteOne_400Regular, Eater_400Regular, })

  if ( !fontsLoaded && !fontError ) { return null; }

  return (

    <ScrollView>

      <SafeAreaView style={estilos.body}>

        <SafeAreaView>
      
          <Image style={estilos.headerImg} source={require('../assets/introNaruto.png')} />
          <Text style={estilos.titulo}> Naruto </Text>

          <Text style={estilos.descricao}> Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila. A história é dividida em duas partes, a primeira parte se passa nos anos da pré-adolescência de Naruto, e a segunda parte se passa em sua adolescência. A série é baseada em dois mangás one-shots de Kishimoto: Karakuri (1995), e que por causa dele Kishimoto ganhou uma menção honrosa no prêmio Hop Step da Shueisha no ano seguinte, e Naruto (1997) </Text>

        </SafeAreaView>

         <SafeAreaView>

          <Image style={estilos.headerImg} source={require('../assets/persoNaruto.png')} />

          <Text style={estilos.titulo}> História </Text>

          <Text style={estilos.descricao}> A história principal se foca em Naruto e seu desenvolvimento quanto ninja, junto com os seus amigos. Também se centra nas interações entre estes e a influência do ambiente em suas personalidades. Conforme transcorre a série, Naruto se relaciona com Sasuke Uchiha e Sakura Haruno, com quem forma o “Time 7”, juntamente com o sensei Kakashi Hatake.[3] Cabe mencionar que Naruto confia muito neles assim como em outros personagens que irá conhecendo mais adiante. Enquanto eles aprendem novas habilidades e conhecem novas pessoas e lugares em suas missões, Naruto luta por seu sonho de se tornar o líder máximo de sua aldeia (Hokage) e ser reconhecido como alguém importante. </Text>

        <Text style={estilos.titulo}> Personagens: </Text>
        
        </SafeAreaView>


        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Naruto </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/naruto.png')} />

        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Sasuke </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/sasuke.png')} />
          
        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Sakura </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/sakura.png')} />
          
        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Kakashi </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/kakashi.png')} />

        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Orochimaru </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/orochimaru.png')} />

        </SafeAreaView>

      </SafeAreaView>

    </ScrollView>


  );

}

const estilos = StyleSheet.create({

  body: { flex: 1, justifyContent: "center", backgroundColor: "#ff6600" },

  headerImg: { flex: 1, width: 350, height: 150, alignSelf: "center", borderRadius: 40 },

  titulo: { color: '#0066cc', textAlign: "center", padding: 15, fontWeight: "bold", fontSize: 30, fontFamily: 'Silkscreen_400Regular' },

  descricao: { fontSize: 22, margin: 50, fontFamily: 'KiteOne_400Regular' },

  personagens: { backgroundColor: "#ffbb33", borderRadius: 40, borderColor: "#0066cc", borderWidth: 10, borderStyle: 'dotted', width: 300, height: 250, alignItems: "center", margin: 20, marginLeft: 45 },

  nmPers: { padding: 15, fontWeight: "bold", fontSize: 20, fontFamily: 'Eater_400Regular' },

  persImgs: { width: 200, height: 150, borderRadius: 20, }

})