import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderLeftWidth: 4,
    borderLeftColor: colors.grey,
    borderStyle: "dotted",
    margin: spacing.m,
    marginRight: 0,
    padding: spacing.l,
    paddingRight: 0,
  },
  accordionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  conversionDetails: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: spacing.s,
  },
  sendCurrencyValue: {
    fontSize: typography.xxl,
    color: colors.grey,
    fontWeight: "bold",
  },
  sendCurrencySymbol: { fontSize: typography.xl, color: colors.grey },
  equals: { fontSize: typography.xxl, color: colors.grey },
  receiveCurrencyValue: { fontSize: typography.xxl, color: colors.grey },
  receiveCurrencySymbol: {
    fontSize: typography.xxl,
    color: colors.grey,
    fontWeight: "bold",
  },
  feesHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.m,
  },
  feesText: { fontSize: typography.xxl, color: colors.purple },
  feesDetailsText: {
    fontSize: typography.xxl,
    color: colors.grey,
    textAlign: "center",
  },
});
