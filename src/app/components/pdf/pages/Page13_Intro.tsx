import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
export default function Page13_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);
  return (
    <View style={styles.page}>
      <Text style={styles.paragraph}>
        {"                                    "}Tenant agrees that if any member
        of the Tenant does not provide the parental guarantee within the
        designated time specified on the parental guarantee (normally within 10
        days after Tenant signs the lease), the rest of the Tenant will be
        responsible for replacement of this person. When Tenant needs to add or
        replace one or more roommates, the new roommate must be credit-checked
        and approved by Landlord. Landlord, however, will not unreasonably
        reject an applicant. If the replacement is completed before August 1 of
        the lease starting year, the leaving member(s) can be released from the
        lease. Otherwise, these leaving members will remain in the lease and
        replacing members will sublease from these leaving members. Tenant
        understands that, whether or not the new roommate(s) can be found, pass
        the credit check and be approved by Landlord, Tenant is entirely
        responsible for all the financial obligations specified on the lease.
        When additional applicant(s) is (are) going to join the joint group or
        replace some applicant(s) after the lease is signed, a
        <Text style={[styles.bold, { textDecoration: "underline" }]}>
          {"  "}
          $100.00{" "}
        </Text>{" "}
        alteration fee will be needed for each alteration regardless of the
        number of applications (or applicants) on top of other charges.
      </Text>

      <Text
        style={[styles.boldUnderline, { textAlign: "center", marginTop: 10 }]}
      >
        BY SIGNING THIS LEASE AGREEMENT, TENANT AGREES THAT THE TENANT HAS READ
        AND UNDERSTOOD ALL OF THE AGREEMENTS IN THIS LEASE. EVERY UNDERSIGNED
        PARTY ACKNOWLEDGES RECEIPT OF ONE ORIGINALLY SIGNED LEASE.
      </Text>

      <Text style={[styles.centerTitle, { marginTop: 20, marginBottom: 20 }]}>
        Tenant Signatures and Date (each to sign and date above his/her own
        name):
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

      <View style={styles.bottomSection} wrap={false}>
        <View style={styles.landlordBox}>
          <Text style={[styles.bold, { textDecoration: "underline" }]}>
            Landlord:
          </Text>
          <View style={{ marginTop: 20, fontFamily: "ArialBold" }}>
            <Text>Third Coast Properties LLC</Text>
            <Text>437 West Beaver Avenue</Text>
            <Text>State College, PA 16801</Text>
            <Text>(814)-238-6566</Text>
          </View>
        </View>

        <View style={styles.authBox}>
          <Text style={[styles.bold, { textDecoration: "underline" }]}>
            Authorized Signature:
          </Text>
          <View style={[styles.signBox, { marginTop: 8 }]}>
            <Text style={styles.signature}>Marysa Killeen</Text>
          </View>
          <View style={[styles.nameRow,styles.bold]}>
            <Text style={styles.name}>Marysa Killeen, Rental Manager</Text>
            <Text style={styles.dateLabel}>Date</Text>
          </View>
          <Text style={styles.bold}>
            Third Coast Properties LLC
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 25, fontSize: 9, lineHeight: 1.4, fontFamily: "Arial" },
  paragraph: { textAlign: "justify", marginBottom: 8 },
  bold: { fontFamily: "ArialBold" },
  boldUnderline: {
    textDecoration: "underline",
    fontFamily: "ArialBold",
    textAlign: "center",
    marginVertical: 6,
  },
  centerTitle: {
    textAlign: "center",
    marginBottom: 8,
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
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
  },
  landlordBox: { width: "48%" },
  authBox: { width: "48%" },
});
