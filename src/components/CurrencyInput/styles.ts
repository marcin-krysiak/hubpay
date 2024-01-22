import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderColor: colors.secondary,
    borderRadius: spacing.m,
    borderWidth: 2,
    flexDirection: "row",
  },
  text: { flex: 1, padding: spacing.l, fontSize: typography.xxxl },
});
