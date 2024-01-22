import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button";
import { CurrencyInput } from "../../components/CurrencyInput";
import { FeesAccordion } from "../../components/FeesAccordion";
import { ProcessingTime } from "../../components/ProcessingTime";
import { getCurrencies } from "../../services/api/getCurrencies";
import { formatCurrency } from "../../utils/formatCurrency";
import { styles } from "./styles";

const BASE_CURRENCY = "eur";

export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState(BASE_CURRENCY);
  const [currencyRates, setCurrencyRates] = useState<Record<string, number>>(
    {}
  );

  const [sendValue, setSendValue] = useState("0.00");
  const [receiveValue, setReceiveValue] = useState("0.00");

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
      setReceiveValue(formatCurrency(sendMoney, conversionRate));
      setSendValue(sendMoney);
    },
    [conversionRate, selectedCurrency]
  );

  const onReceiptMoneyChange = useCallback(
    (receiptMoney: string) => {
      setReceiveValue(receiptMoney);
      setSendValue(formatCurrency(receiptMoney, 1 / conversionRate));
    },
    [conversionRate, selectedCurrency]
  );

  const onCurrencyChange = useCallback(
    (currency: string) => {
      setSelectedCurrency(currency);
      setSendValue(formatCurrency(receiveValue, 1 / currencyRates[currency]));
    },
    [conversionRate, currencyRates, receiveValue]
  );

  return (
    <ActionSheetProvider>
      <SafeAreaView style={styles.container}>
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
          value={receiveValue}
          onChangeText={onReceiptMoneyChange}
        />
        <ProcessingTime />
        <Button title="Start transfer" />
      </SafeAreaView>
    </ActionSheetProvider>
  );
}
