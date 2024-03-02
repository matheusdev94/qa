// import React, { useEffect, useState } from "react";
// import {
//   TextInput,
//   View,
//   Text,
//   Button,
//   StyleSheet,
//   Alert,
//   Touchable,
// } from "react-native";

// import { useDispatch, useSelector } from "react-redux";
// import { addList } from "../../store/reducers/cardReducer";
// import { TouchableOpacity } from "react-native-gesture-handler";

// const List = ({ lists }) => {
//   const [cards, setCards] = useState(null);

//   const getCards = (selectedList) => {
//     const selectedListCards = lists.find((list) => list.name === selectedList);
//     setCards(selectedListCards);
//   };

//   useEffect(() => {
//     if (selectedList !== null) {
//       getCards(selectedList);
//     }
//   }, [selectedList]);
//   const [addListState, setAddListState] = useState(false);
//   return (
//     <View style={styles.listCard}>
//       <TouchableOpacity style={{}} onPress={() => setAddListState(true)}>
//         <Text>+ Lista</Text>
//       </TouchableOpacity>
//       {addListState && <AddList setAddListState={setAddListState} />}

//       {selectedList ? (
//         cards ? (
//           // <Card cardList={cards} />
//           // Alert.alert("cards?", selectedList)
//           <></>
//         ) : (
//           <Text>Carregando cards</Text>
//         )
//       ) : (
//         lists?.map((list, index) => (
//           <ListItem key={index} list={list} setSelectedList={setSelectedList} />
//         ))
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   listCard: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     top: "30px",
//   },
//   input: {
//     color: "white",
//     width: "100px",
//     height: "20px",
//     backgroundColor: "lightblue",
//   },
//   listItem: {
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "10px",
//   },
// });
// export default List;
