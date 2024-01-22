import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button/Button";
import { CurrencyInput } from "../../components/CurrencyInput";
import { FeesAccordion } from "../../components/FeesAccordion";
import { ProcessingTime } from "../../components/ProcessingTime";
import { getCurrencies } from "../../services/api/getCurrencies";
import { spacing } from "../../theme/spacing";
import { formatCurrency } from "../../utils/formatCurrency";

const BASE_CURRENCY = "eur";

export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState(BASE_CURRENCY);
  const [currencyRates, setCurrencyRates] = useState<Record<string, number>>(
    {}
  );

  const [sendValue, setSendValue] = useState("0.00");
  const [receiptValue, setReceiptValue] = useState("0.00");

  const currencies = useMemo(() => Object.keys(currencyRates), [currencyRates]);
  const conversionRate = useMemo(
    () =>
      selectedCurrency === BASE_CURRENCY ? 1 : currencyRates[selectedCurrency],
    [selectedCurrency, currencyRates]
  );

  useEffect(() => {
    getCurrencies("eur").then((currenciesResponse) => {
      setCurrencyRates(currenciesResponse);
    });
  }, [getCurrencies]);

  const onSendMoneyChange = useCallback(
    (sendMoney: string) => {
      setReceiptValue(formatCurrency(sendMoney, conversionRate));
      setSendValue(sendMoney);
    },
    [conversionRate, selectedCurrency]
  );

  const onReceiptMoneyChange = useCallback(
    (receiptMoney: string) => {
      setReceiptValue(receiptMoney);
      setSendValue(formatCurrency(receiptMoney, 1 / conversionRate));
    },
    [conversionRate, selectedCurrency]
  );

  const onCurrencyChange = useCallback(
    (currency: string) => {
      setSelectedCurrency(currency);
      setSendValue(formatCurrency(receiptValue, 1 / conversionRate));
    },
    [conversionRate, selectedCurrency]
  );

  return (
    <ActionSheetProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          padding: spacing.xl,
          gap: spacing.m,
        }}
      >
        <CurrencyInput
          label="You send exactly"
          selectedCurrency={BASE_CURRENCY}
          value={sendValue}
          onChangeText={onSendMoneyChange}
        />
        <FeesAccordion
          baseCurrency={BASE_CURRENCY}
          selectedCurrency={selectedCurrency}
          conversionRate={conversionRate}
        />
        <CurrencyInput
          label="Recipient gets"
          selectedCurrency={selectedCurrency}
          currencies={currencies}
          onSelectCurrency={onCurrencyChange}
          value={receiptValue}
          onChangeText={onReceiptMoneyChange}
        />
        <ProcessingTime />
        <Button title="Start transfer" />
      </SafeAreaView>
    </ActionSheetProvider>
  );
}
