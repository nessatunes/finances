import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto Luz",
    value: "390,80",
    date: "17/02/2024",
    type: 0, // despesas
  },
  {
    id: 2,
    label: "Pix Cliente",
    value: "1.390,80",
    date: "17/02/2024",
    type: 1, // receitas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Vanessa Antunes" />
      <Balance saldo="9.000,90" gastos="-390,00" />
      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
