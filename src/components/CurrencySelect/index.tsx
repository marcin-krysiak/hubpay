import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import { getCurrencyFlag } from "../../utils/getCurrencyFlag";

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
}: Props) {
  const [currencyFlag, setCurrencyFlag] = useState("");

  useEffect(() => {
    const flagUri = getCurrencyFlag(selectedCurrency);
    setCurrencyFlag(flagUri);
  }, [selectedCurrency]);

  const pickerRef = useRef<Picker<string>>();

  function openPicker() {
    pickerRef.current.focus();
  }

  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: colors.purple,
          borderRadius: spacing.m,
          padding: spacing.l,
          gap: spacing.s,
          margin: -2,
        }}
        activeOpacity={currencies?.length ? 1 : 0.2}
        onPress={() => !!currencies?.length && openPicker()}
      >
        <Text style={{ color: colors.white, fontSize: typography.m }}>
          {label}
        </Text>
        <View
          style={{ flexDirection: "row", gap: spacing.m, alignItems: "center" }}
        >
          {!!currencyFlag && (
            <Image
              style={{ width: 30, height: 20 }}
              source={{ uri: currencyFlag }}
            />
          )}
          <Text style={{ color: colors.white, fontSize: typography.xl }}>
            {selectedCurrency.toUpperCase()}
          </Text>
          <View style={{ width: 12 }}>
            {!!currencies?.length && (
              <AntDesign name="down" size={12} color={colors.white} />
            )}
          </View>
        </View>
      </TouchableOpacity>
      {!!currencies?.length && (
        <Picker
          style={{
            position: "absolute",
            opacity: 0,
          }}
          ref={pickerRef}
          selectedValue={selectedCurrency}
          onValueChange={(currencySymbol: string) =>
            onSelectCurrency(currencySymbol)
          }
        >
          {currencies.map((currencySymbol) => (
            <Picker.Item
              label={currencySymbol.toUpperCase()}
              value={currencySymbol.toUpperCase()}
              key={`currency-picker-${currencySymbol}`}
            />
          ))}
        </Picker>
      )}
    </>
  );
}
