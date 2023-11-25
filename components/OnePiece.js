import { ScrollView, SafeAreaView, Image, Text, StyleSheet } from 'react-native';

import { useFonts, Silkscreen_400Regular } from '@expo-google-fonts/silkscreen';
import { KiteOne_400Regular } from '@expo-google-fonts/kite-one';
import { Eater_400Regular } from '@expo-google-fonts/eater';

export default function OnePiece() {

  let [ fontsLoaded, fontError ] = useFonts({ Silkscreen_400Regular,  KiteOne_400Regular, Eater_400Regular, })

  if ( !fontsLoaded && !fontError ) { return null; }

  return (

    <ScrollView>

      <SafeAreaView style={estilos.body}>

        <SafeAreaView>
      
          <Image style={estilos.headerImg} source={require('../assets/introPiece.png')} />
          <Text style={estilos.titulo}> One Piece </Text>

          <Text style={estilos.descricao}> One Piece (ワンピース Wan Pīsu?) é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde julho de 1997, com os capítulos compilados e publicados em 106 volumes tankōbon pela editora Shueisha até 6/2023. One Piece conta as aventuras de Monkey D. Luffy, um jovem cujo corpo ganhou as propriedades de borracha após ter comido um fruto do diabo acidentalmente. Com sua tripulação, os Piratas do Chapéu de Palha, Luffy explora a Grand Line em busca do tesouro mais procurado do mundo, o "One Piece", a fim de se tornar o próximo Rei dos Piratas. One Piece atingiu a marca de mil capítulos publicados na Weekly Shonen Jump em janeiro de 2021, se tornando um dos raros mangás a ultrapassar tal marca. </Text>

        </SafeAreaView>

         <SafeAreaView>

          <Image style={estilos.headerImg} source={require('../assets/persoPiece.png')} />

          <Text style={estilos.titulo}> História </Text>

          <Text style={estilos.descricao}> A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas. Em um esforço para organizar sua própria tripulação, os Piratas do Chapéu de Palha, Luffy resgata e faz amizade com um caçador de piratas e espadachim chamado Roronoa Zoro, e eles partem em busca do tesouro titular. Eles são acompanhados em sua jornada por Nami, uma ladra e navegadora obcecada por dinheiro; Usopp, um franco-atirador e mentiroso compulsivo; e Sanji, um cozinheiro amoroso mas cavalheiresco. </Text>

        <Text style={estilos.titulo}> Personagens: </Text>
        
        </SafeAreaView>


        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Monkey D. Luffy </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/luffy.png')} />

        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Zoro </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/zoro.png')} />
          
        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Nami </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/nami.png')} />
          
        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Sanji </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/sanji.png')} />

        </SafeAreaView>

        <SafeAreaView style={estilos.personagens}>

          <Text style={estilos.nmPers}> Usopp </Text>
          <Image style={estilos.persImgs} resizeMode="center" source={require('../assets/usopp.png')} />

        </SafeAreaView>

      </SafeAreaView>

    </ScrollView>


  );

}

const estilos = StyleSheet.create({

  body: { flex: 1, justifyContent: "center", backgroundColor: "#4dd2ff" },

  headerImg: { flex: 1, width: 350, height: 150, alignSelf: "center", borderRadius: 40 },

  titulo: { color: '#ffcc00', textAlign: "center", padding: 15, fontWeight: "bold", fontSize: 30, fontFamily: 'Silkscreen_400Regular' },

  descricao: { fontSize: 22, margin: 50, fontFamily: 'KiteOne_400Regular' },

  personagens: { backgroundColor: "#ffbb33", borderRadius: 40, borderColor: "#ffffff", borderWidth: 10, borderStyle: 'dotted', width: 300, height: 250, alignItems: "center", margin: 20, marginLeft: 45 },

  nmPers: { padding: 15, fontWeight: "bold", fontSize: 20, fontFamily: 'Eater_400Regular' },

  persImgs: { width: 200, height: 150, borderRadius: 20, }

})