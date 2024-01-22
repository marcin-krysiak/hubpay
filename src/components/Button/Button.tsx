import { Text, TouchableOpacity } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

interface Props {
  title: string;
}

export function Button({ title }: Props) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: spacing.xl,
        backgroundColor: colors.primary,
        padding: spacing.xl,
        width: "80%",
      }}
    >
      <Text
        style={{
          color: colors.white,
          fontSize: typography.xxl,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
