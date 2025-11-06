import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";
export default function Page15_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Notice of possible construction:</Text>
      <Text style={[styles.paragraph, { marginTop: 20 }]}>
        Tenants acknowledge the possibility of construction of a new parking
        area in the back yard. If this takes place the garage would be
        eliminated, and the parking area would be added behind where it
        currently is on the left side of the property. It will be 7 or 8 spaces
        pending State College Borough approval. Roughly 2/3 of the backyard will
        remain. 2 of these spaces will still be included in the rent.
      </Text>
      <SignatureBox signature={tenantsArray} title={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    lineHeight: 1.4,
    fontFamily: "Arial",
  },
  title: {
    fontSize: 12,
    fontFamily: "ArialBold",
    textDecoration: "underline",
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 10,
    textAlign: "justify",
    marginBottom: 22,
    lineHeight: 1.3,
  },
});
