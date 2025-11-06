import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";
import { summaryFeesData } from "../../shared/staticData";
export default function Page14_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Summary of Fees and Charges</Text>

      <Text style={styles.subtitle}>
        Tenant charges include, but are not be limited to, the following items.
        Tenant should review the entire Lease for all Tenant charge items.
      </Text>

      <View style={styles.tableHeader}>
        <Text
          style={[
            styles.headerText,
            { width: "60%", textAlign: "justify", marginBottom: 15 },
          ]}
        >
          Description
        </Text>
        <Text style={[styles.headerText, { width: "40%", marginBottom: 15 }]}>
          Fees and Charges
        </Text>
      </View>

      <View style={styles.tableSingle}>
        {summaryFeesData.map(([desc, fee], i) => (
          <View key={i} style={[styles.row, { lineHeight: 0.5 }]} wrap={false}>
            <Text style={styles.desc}>{desc}</Text>
            <Text style={styles.fee}>{fee}</Text>
          </View>
        ))}
      </View>

      <SignatureBox signature={tenantsArray} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    fontFamily: "Arial",
    padding: 30,
    fontSize: 9,
    lineHeight: 1.25,
  },
  title: {
    textAlign: "center",
    fontFamily: "ArialBold",
    textDecoration: "underline",
    fontSize: 12,
    marginBottom: 6,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 9,
    marginBottom: 8,
    fontFamily: "ArialBold",
    textDecoration: "underline",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 4,
  },
  headerText: {
    fontSize: 9,
    fontFamily: "ArialBold",
    textDecoration: "underline",
  },
  tableSingle: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 2,
  },
  desc: {
    width: "60%",
    fontSize: 8,
  },
  fee: {
    width: "40%",
    fontSize: 8,
    textAlign: "left",
  },
});
