import { TextInput, View } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import { formatCurrency } from "../../utils/formatCurrency";
import { CurrencySelect } from "../CurrencySelect";

interface Props {
  label: string;
  selectedCurrency: string;
  currencies?: string[];
  onSelectCurrency?: (currency: string) => void;
  value: string;
  onChangeText: (text: string) => void;
}

export function CurrencyInput({
  label,
  selectedCurrency,
  currencies,
  onSelectCurrency,
  value,
  onChangeText,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderColor: colors.secondary,
        borderRadius: spacing.m,
        borderWidth: 2,
        flexDirection: "row",
      }}
    >
      <CurrencySelect
        label={label}
        selectedCurrency={selectedCurrency}
        currencies={currencies}
        onSelectCurrency={onSelectCurrency}
      />
      <TextInput
        style={{ flex: 1, padding: spacing.l, fontSize: typography.xxxl }}
        value={value}
        keyboardType="numeric"
        autoComplete="off"
        textAlign="right"
        onChangeText={(text) => onChangeText(formatCurrency(text))}
      />
    </View>
  );
}
