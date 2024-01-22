import { StyleSheet } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

export const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.xl,
    backgroundColor: colors.primary,
    padding: spacing.xl,
    width: "80%",
  },
  text: {
    color: colors.white,
    fontSize: typography.xxl,
    textAlign: "center",
  },
});
