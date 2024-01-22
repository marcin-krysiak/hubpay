import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { styles } from "./styles";

interface Props {
  baseCurrency: string;
  selectedCurrency: string;
  conversionRate: number;
}

export function FeesAccordion({
  baseCurrency,
  selectedCurrency,
  conversionRate,
}: Readonly<Props>) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: colors.secondary,
          flex: 1,
          padding: spacing.l,
          borderRadius: spacing.m,
          gap: spacing.xl,
        }}
      >
        <View style={styles.accordionContainer}>
          <View style={styles.conversionDetails}>
            <Text style={styles.sendCurrencyValue}>1</Text>
            <Text style={styles.sendCurrencySymbol}>{baseCurrency}</Text>
            <Text style={styles.equals}>=</Text>
            <Text style={styles.receiveCurrencyValue}>{selectedCurrency}</Text>
            <Text style={styles.receiveCurrencySymbol}>
              {conversionRate.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <View style={styles.feesHeader}>
              <Text style={styles.feesText}>Fees</Text>
              <AntDesign name="down" size={20} color={colors.purple} />
            </View>
          </TouchableOpacity>
        </View>
        {expanded && (
          <View>
            <Text style={styles.feesDetailsText}>Conversion fees: 0</Text>
          </View>
        )}
      </View>
    </View>
  );
}
