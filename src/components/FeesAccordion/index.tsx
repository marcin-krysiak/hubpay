import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

interface Props {
  baseCurrency: string;
  selectedCurrency: string;
  conversionRate: number;
}

export function FeesAccordion({
  baseCurrency,
  selectedCurrency,
  conversionRate,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        borderLeftWidth: 4,
        borderLeftColor: colors.grey,
        borderStyle: "dotted",
        margin: spacing.m,
        marginRight: 0,
        padding: spacing.l,
        paddingRight: 0,
      }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          flex: 1,
          padding: spacing.l,
          borderRadius: spacing.m,
          gap: spacing.xl,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              gap: spacing.s,
            }}
          >
            <Text
              style={{
                fontSize: typography.xxl,
                color: colors.grey,
                fontWeight: "bold",
              }}
            >
              1
            </Text>
            <Text style={{ fontSize: typography.xl, color: colors.grey }}>
              {baseCurrency}
            </Text>
            <Text style={{ fontSize: typography.xxl, color: colors.grey }}>
              =
            </Text>
            <Text style={{ fontSize: typography.xxl, color: colors.grey }}>
              {selectedCurrency}
            </Text>
            <Text
              style={{
                fontSize: typography.xxl,
                color: colors.grey,
                fontWeight: "bold",
              }}
            >
              {conversionRate.toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: spacing.m,
              }}
            >
              <Text style={{ fontSize: typography.xxl, color: colors.purple }}>
                Fees
              </Text>
              <AntDesign name="down" size={20} color={colors.purple} />
            </View>
          </TouchableOpacity>
        </View>
        {expanded && (
          <View>
            <Text
              style={{
                fontSize: typography.xxl,
                color: colors.grey,
                textAlign: "center",
              }}
            >
              Conversion fees: 0
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
