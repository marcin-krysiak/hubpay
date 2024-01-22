import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    borderRadius: spacing.m,
    padding: spacing.l,
    gap: spacing.s,
    margin: -2,
  },
  label: { color: colors.white, fontSize: typography.m },
  dropdownContainer: {
    flexDirection: "row",
    gap: spacing.m,
    alignItems: "center",
  },
  currencyText: { color: colors.white, fontSize: typography.xl },
});
