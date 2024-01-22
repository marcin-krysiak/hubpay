import { Text, View } from "react-native";

import ThunderboltIcon from "../../assets/thunderbolt.svg";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export function ProcessingTime() {
  return (
    <View style={{ justifyContent: "center", gap: spacing.m, padding: 40 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", gap: spacing.s }}
      >
        <ThunderboltIcon width={40} height={40} />
        <Text style={{ fontSize: typography.xxl }}>
          Processing time - 1 Hour
        </Text>
      </View>
      <Text style={{ fontSize: typography.xl, color: colors.grey }}>
        *Normal working hours & public holidays apply{" "}
      </Text>
    </View>
  );
}
