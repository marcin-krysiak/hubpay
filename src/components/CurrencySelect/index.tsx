import { useActionSheet } from "@expo/react-native-action-sheet";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "../../theme/colors";
import { getCurrencyFlag } from "../../utils/getCurrencyFlag";
import { styles } from "./styles";

interface Props {
  label: string;
  selectedCurrency: string;
  currencies?: string[];
  onSelectCurrency?: (currency: string) => void;
}

export function CurrencySelect({
  label,
  selectedCurrency,
  currencies,
  onSelectCurrency,
}: Readonly<Props>) {
  const [currencyFlag, setCurrencyFlag] = useState("");

  useEffect(() => {
    const flagUri = getCurrencyFlag(selectedCurrency);
    setCurrencyFlag(flagUri);
  }, [selectedCurrency]);

  const { showActionSheetWithOptions } = useActionSheet();

  function openPicker() {
    showActionSheetWithOptions(
      {
        options: currencies,
      },
      (buttonIndex) => {
        onSelectCurrency(currencies[buttonIndex]);
      }
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={!currencies?.length ? 1 : 0.2}
      onPress={() => !!currencies?.length && openPicker()}
    >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.dropdownContainer}>
        {!!currencyFlag && (
          <Image
            style={{ width: 30, height: 20 }}
            source={{ uri: currencyFlag }}
          />
        )}
        <Text style={styles.currencyText}>
          {selectedCurrency.toUpperCase()}
        </Text>
        {!!currencies?.length && (
          <AntDesign name="down" size={12} color={colors.white} />
        )}
      </View>
    </TouchableOpacity>
  );
}
