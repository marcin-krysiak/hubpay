import { Text, View } from "react-native";

import ThunderboltIcon from "../../assets/thunderbolt.svg";
import { styles } from "./styles";

export function ProcessingTime() {
  return (
    <View style={styles.container}>
      <View style={styles.processingTimeTextContainer}>
        <ThunderboltIcon width={40} height={40} />
        <Text style={styles.processingTimeText}>Processing time - 1 Hour</Text>
      </View>
      <Text style={styles.processingTimeHint}>
        *Normal working hours & public holidays apply{" "}
      </Text>
    </View>
  );
}
