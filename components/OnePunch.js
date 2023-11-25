import { ScrollView, SafeAreaView, Image, Text, StyleSheet } from 'react-native';

import { useFonts, Silkscreen_400Regular } from '@expo-google-fonts/silkscreen';
import { KiteOne_400Regular } from '@expo-google-fonts/kite-one';
import { Eater_400Regular } from '@expo-google-fonts/eater';

export default function OnePunch() {

  let [ fontsLoaded, fontError ] = useFonts({ Silkscreen_400Regular,  KiteOne_400Regular, Eater_400Regular, })

  if ( !fontsLoaded && !fontError ) { return null; }

  return (

    <ScrollView>

      <SafeAreaView style={estilos.body}>

        <SafeAreaView>
      
          <Image style={estilos.headerImg} source={require('../assets/introPunch.png')} />
          <Text style={estilos.titulo}> One Punch </Text>

          <Text style={estilos.descricao}> One Punch-Man (ワンパンマン Wanpanman, lit. "Homem Um-Soco") é uma série de webcomic criada pelo autor com o pseudónimo One, e é publicada desde 2009. A série rapidamente tornou-se um fenómeno viral, alcançando mais de 7,9 milhões de acessos. O nome da obra Wanpanman é uma paródia da personagem Anpanman, a palavra wanpan é uma contração de wanpanchi (one punch em língua inglesa). One Punch-Man conta a história de Saitama, um super-herói extremamente poderoso, que se entediou com a ausência dos desafios nas suas lutas contra o mal e procura encontrar um oponente digno. </Text>

        </SafeAreaView>

         <SafeAreaView>

          <Image style={estilos.headerImg} source={require('../assets/persoPunch.png')} />

          <Text style={estilos.titulo}> História </Text>

          <Text style={estilos.descricao}> Uma recriação do manga digital ilustrado por Yusuke Murata, começou a ser publicada no sítio eletrónico Young Jump Web Comics em 2012. Os capítulos são compilados em volumes de formato tankōbon e publicados pela editora Shueisha. No Brasil, o manga é publicado pela editora Panini Comics desde março de 2016, e em Portugal é publicado pela Editora Devir desde março de 2017. </Text>

        <Text style={estilos.titulo}> Personagens: </Text>
        
        </SafeAreaView>


        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Saitama </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/saitama.png')} />

        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Genos </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/genos.png')} />
          
        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Tatsumaki </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/tatsumaki.png')} />
          
        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Garou </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/garou.png')} />

        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Fubuki </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/fubuki.png')} />

        </SafeAreaView>

      </SafeAreaView>

    </ScrollView>


  );

}

const estilos = StyleSheet.create({

  body: { flex: 1, justifyContent: "center", backgroundColor: "#e6e600",  },

  headerImg: { flex: 1, width: 350, height: 150, alignSelf: "center", borderRadius: 40 },

  titulo: { color: '#ff1a1a', textAlign: "center", padding: 15, fontWeight: "bold", fontSize: 30, fontFamily: 'Silkscreen_400Regular' },

  descricao: { fontSize: 22, margin: 50, fontFamily: 'KiteOne_400Regular' },

  personagens: { backgroundColor: "#e60000", borderRadius: 40, borderColor: "#ff471a", borderWidth: 10, borderStyle: 'dotted', width: 300, height: 250, alignItems: "center", margin: 20, marginLeft: 45 },

  nmPers: { padding: 15, fontWeight: "bold", fontSize: 20, fontFamily: 'Eater_400Regular' },

  persImgs: { width: 200, height: 150, borderRadius: 20, }

})