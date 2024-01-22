import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface Props {
  title: string;
}

export function Button({ title }: Readonly<Props>) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
