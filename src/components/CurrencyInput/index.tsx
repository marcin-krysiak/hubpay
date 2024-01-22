import { TextInput, View } from "react-native";

import { formatCurrency } from "../../utils/formatCurrency";
import { CurrencySelect } from "../CurrencySelect";
import { styles } from "./styles";

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
}: Readonly<Props>) {
  return (
    <View style={styles.container}>
      <CurrencySelect
        label={label}
        selectedCurrency={selectedCurrency}
        currencies={currencies}
        onSelectCurrency={onSelectCurrency}
      />
      <TextInput
        style={styles.text}
        value={value}
        keyboardType="numeric"
        autoComplete="off"
        textAlign="right"
        onChangeText={(text) => onChangeText(formatCurrency(text))}
      />
    </View>
  );
}
