import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
export const styles = StyleSheet.create({
  container: { justifyContent: "center", gap: spacing.m, padding: 40 },
  processingTimeTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.s,
  },
  processingTimeText: { fontSize: typography.xxl },
  processingTimeHint: { fontSize: typography.xl, color: colors.grey },
});
