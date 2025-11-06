import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { CheckboxSvg, UnCheckBoxSvg } from "@/app/components/svg/svg";
import { ShortSignature } from "../../common/signatureWithShortName/signatureShort";

export default function Page7_Intro({
  tenants,
  leadBasedPaintPresence,
  recordAvailable,
}: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);
  const initials = tenantsArray.map(
    (n: string) =>
      n
        .split(" ")
        .map((p) => p[0]?.toUpperCase())
        .join("") || ""
  );

  return (
    <View style={styles.page}>
      <Text style={styles.title}>
        Disclosure of Information on Lead-Based Paint & Lead-Based Paint Hazards
      </Text>

      <Text style={[styles.paragraph, { textAlign: "center" }]}>
        This Addendum is made by the undersigned Lessee and Lessor and is
        incorporated into and made a part of the Lease between Lessee and Lessor
        (the “Lease”). This Addendum is referenced in the Lease and pertains to
        the following Property:
      </Text>

      <Text style={[styles.property, { marginTop: 6 }]}>
        501 & 503 West Beaver Avenue & 136 South Barnard Street, State College,
        PA 16801
      </Text>

      <Text style={styles.sectionHeading}>Lead Warning Statement</Text>

      <Text style={styles.paragraph}>
        {"                             "}Housing built before 1978 may contain
        lead-based paint. Lead from paint, paint chips, and dust can pose health
        hazards if not taken care of properly. Lead exposure is especially
        harmful to young children and pregnant women. Before renting pre-1978
        housing, landlords must disclose the presence of know lead-based paint
        and lead-based paint hazards in the dwelling. Tenants must also receive
        a federally approved pamphlet on lead poisoning prevention.
      </Text>

      <Text style={styles.sectionHeading}>Lessor’s Disclosure (initial) </Text>

      <Text style={[styles.bold, { marginTop: 10 }]}>
        (a) Presence of lead-based paint or lead-based paint hazards (check one
        below):
      </Text>
      <View style={{ marginLeft: 50 }}>
        <View style={[styles.checkboxRow, { marginTop: 10 }]}>
          {leadBasedPaintPresence === "known" ? (
            <CheckboxSvg />
          ) : (
            <UnCheckBoxSvg />
          )}

          <Text>
            Known lead-based paint and/or lead-based paint hazards are present
            in the housing (explain).
          </Text>
        </View>
        <View
          style={{
            border: "1px solid #B0B0B0",
            width: 350,
            marginTop: 5,
            marginLeft: 5,
          }}
        ></View>
        <View
          style={{
            border: "1px solid #B0B0B0",
            width: 350,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 5,
          }}
        ></View>

        <View style={[styles.checkboxRow, { marginBottom: 10 }]} wrap={false}>
          {leadBasedPaintPresence != "known" ? (
            <CheckboxSvg />
          ) : (
            <UnCheckBoxSvg />
          )}
          <Text>
            Lessor has no knowledge of lead-based paint and/or lead-based paint
            hazards in the Housing.
          </Text>
        </View>
      </View>
      <Text style={[styles.bold, { marginTop: 6 }]}>
        (b) Records and reports available to the lessor (check one below):
      </Text>
      <View style={{ marginLeft: 50, marginTop: 10 }}>
        <View style={[styles.checkboxRow]}>
          {recordAvailable === "available" ? (
            <CheckboxSvg />
          ) : (
            <UnCheckBoxSvg />
          )}
          <Text style={{ width: 500 }}>
            Lessor has provided the lessee with all available records and
            reports pertaining to lead based paint and/or lead-based paint
            hazards in the housing (list documents below).
          </Text>
        </View>

        <View
          style={{
            border: "1px solid #B0B0B0",
            width: 350,
            marginTop: 5,
            marginLeft: 5,
          }}
        ></View>
        <View
          style={{
            border: "1px solid #B0B0B0",
            width: 350,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 5,
          }}
        ></View>

        <View style={[styles.checkboxRow, { marginBottom: 10 }]}>
          {recordAvailable != "available" ? <CheckboxSvg /> : <UnCheckBoxSvg />}
          <Text>
            Lessor has no reports or records pertaining to lead-based paint
            and/or lead-based paint hazards in the housing.
          </Text>
        </View>
      </View>
      <Text style={styles.sectionHeading}>
        Lessee’s Acknowledgment (initial)
      </Text>
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Text style={[styles.paragraph]}>
            (c) Lessee has received copies of all information listed above.
          </Text>

          <ShortSignature initials={initials}/>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          gap: 6,
          marginTop: 10,
        }}
      >
        <Text style={[styles.paragraph, { flexShrink: 1, marginRight: 6 }]}>
          (d) Lessee will receive the pamphlet "Protect Your Family from Lead in
          Your Home" at Move In
        </Text>
       <ShortSignature initials={initials}/>
      </View>

      <Text style={styles.sectionHeading}>
        Agent’s Acknowledgment (initial)
      </Text>
      <Text style={styles.paragraph}>
        (e) Agent has informed the lessor of the lessor’s obligations under 42
        U.S.C. 4582(d) and is aware of his/her responsibility to ensure
        compliance.
      </Text>

      <Text style={[styles.sectionHeading, { marginTop: 10 }]}>
        Certification of Accuracy:
      </Text>
      <Text style={styles.paragraph}>
        The following parties have reviewed the information above and certify,
        to the best of their knowledge, that the information provided by the
        signatory is true and accurate
      </Text>

      <View style={styles.signGrid}>
        {tenantsArray.map((tenant: string, index: number) => (
          <View key={index} wrap={false} style={styles.signBoxContainer}>
            <View style={styles.signBox}>
              <Text style={styles.signature}>{tenant}</Text>
            </View>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{tenant}</Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text style={styles.dateLabel}>Date</Text>
                <Text>03-11-2025</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    fontFamily: "Arial",
    margin: 35,
    fontSize: 9,
    lineHeight: 1.3,
  },
  title: {
    textAlign: "center",
    fontFamily: "ArialBold",
    textDecoration: "underline",
    fontSize: 11,
    marginBottom: 8,
  },
  property: {
    fontFamily: "ArialBold",
    textDecoration: "underline",
    fontSize: 9.5,
    marginBottom: 6,
  },
  paragraph: {
    textAlign: "justify",
    marginTop: 4,
    lineHeight: 1.3,
    fontSize: 8,
  },
  sectionHeading: {
    fontFamily: "ArialBold",
    textDecoration: "underline",
    marginTop: 8,
  },
  bold: {
    fontFamily: "ArialBold",
    marginTop: 4,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 2,
    gap: 5,
  },
  initialsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
    gap: 4,
  },
  signGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  signBoxContainer: { width: "48%", marginBottom: 8 },
  signBox: {
    border: "1pt solid #000",
    height: 30,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  signature: {
    fontFamily: "mrDafoe",
    fontSize: 13,
    textAlign: "left",
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 3,
  },
  name: { fontSize: 9 },
  dateLabel: { fontSize: 9 },
});
