import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";
import { utilityServiceData } from "../../shared/staticData";

export default function Page4_Intro({ tenants, furnishings }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.bold}>
        16.){" "}
        <Text style={styles.sectionTitle}>Utility Services and Facilities</Text>
      </Text>
      <Text style={[styles.text, { marginLeft: 10 }]}>
        Landlord and Tenant agree to pay for the charges for utilities and
        services supplied to the Leased Premises as follows:
      </Text>

      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text
            style={[
              styles.tableCell,
              styles.tableHeader,
              { fontFamily: "ArialBold", textDecoration: "underline" },
            ]}
          >
            Charge or Service
          </Text>
          <Text
            style={[
              styles.tableCell,
              styles.tableHeader,
              { fontFamily: "ArialBold", textDecoration: "underline" },
            ]}
          >
            Paid By
          </Text>
        </View>
        {utilityServiceData.map(([charge, payer], i) => (
          <View key={i} style={[styles.tableRow, { lineHeight: 0.6 }]}>
            <Text style={styles.tableCell}>{charge}</Text>
            <Text style={styles.tableCell}>{payer}</Text>
          </View>
        ))}
      </View>

      <Text style={[styles.text, { lineHeight: 1.3,marginTop:6 }]}>
        It is understood that it is the Tenant’s own responsibility to acquire
        the tools, equipment, or any related material for fulfilling the
        Tenant’s own obligations. Any bill, or ordinance violation fee (e.g.
        failure to remove snow in a timely manner) or related charges arising
        from one of the above obligations should solely be the responsibility of
        the obligated party as above specified. The Landlord has the right to
        temporarily turn off any utility or other service to the Leased Premises
        to make repairs or do maintenance.
      </Text>

      <Text style={[styles.subTitle]}>
        <Text style={styles.sectionTitle}>Parking: </Text>
        <Text style={styles.bold}>
          There are 2 on-site parking spaces included in the rent.
        </Text>
      </Text>

      <Text style={[styles.bold,{marginTop:10}]}>
        17.){" "}
        <Text style={styles.sectionTitle}>
          Furnishings Provided by Landlord Include
        </Text>
      </Text>
      <Text
        style={[
          styles.text,
          { marginLeft: 10, paddingBottom: 15, marginTop: 8 },
        ]}
      >
        {furnishings.length > 0
          ? furnishings.map((f: any) => `(${f.quantity}) ${f.item}`).join("  ")
          : "No furnishings provided."}
      </Text>

      <Text style={styles.bold}>
        18.){" "}
        <Text style={styles.sectionTitle}>
          Governmental Power of Eminent Domain
        </Text>
      </Text>
      <Text
        style={[styles.text, { lineHeight: 1.3, fontSize: 8, marginTop: 10 }]}
      >
        {"                                              "} Eminent Domain is the
        legal name for the right of the government such as the state, county or
        city to take private property for public use. The government must pay
        fair compensation to anyone who has any right in the property that is
        taken by the government. If all or any part of the Leased Premises or
        the building within which the Leased Premises is located is taken by
        eminent domain, this lease will end automatically. Landlord and Tenant
        agree to release each other from any responsibility because Leased
        Premises are taken by eminent domain and the lease has ended.
      </Text>

      <Text style={[styles.bold,{marginTop:10}]}>
        19.){" "}
        <Text style={styles.sectionTitle}>
          When Tenant Breaks Any Agreements in the Lease
        </Text>
      </Text>
      <View style={{ marginLeft: 35, marginTop: 10 }}>
        <View style={[styles.bullets, { lineHeight: 0.5 }]}>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text>• </Text>
            <Text style={styles.text}>
              When Tenant does not do something that Tenant has agreed to do
              under the provisions of this Lease and any further agreements
              referenced herein, the Tenant breaks (“breaches”) this Lease.
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text>• </Text>
            <Text style={styles.text}>
              If Tenant breaks this Lease, Tenant may lose Tenant’s Security
              Deposit
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text>• </Text>
            <Text style={styles.text}>
              If Tenant breaks this Lease, Landlord also can sue Tenant for
              other expenses and may go to court to remove (evict) Tenant from
              the Leased Premises.
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={[
          styles.bold,
          {
            marginLeft: 25,
            fontFamily: "ArialBold",
            textDecoration: "underline",
          },
        ]}
      >
        Tenant Breaks This Lease If Tenant:
      </Text>
      <View style={[styles.bullets, { marginLeft: 45, lineHeight: 0.5,marginTop:6,marginBottom:6 }]}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>• </Text>
          <Text style={styles.text}>
            Does not pay Rent or other charges to the Landlord on time
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>• </Text>
          <Text style={styles.text}>
            Vacates the Leased Premises for good without the Landlord’s
            permission before the end of the lease.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>• </Text>
          <Text style={styles.text}>
            Does not vacate the Leased Premises at the end of the Lease Term.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>• </Text>
          <Text style={styles.text}>
            Does not do all the things that the Tenant agreed to do in this
            Lease.
          </Text>
        </View>
      </View>

      <Text
        style={[styles.text, styles.justify, { lineHeight: 1.3, fontSize: 9 }]}
      >
        {"                                              "}This is a{" "}
        <Text style={{ fontFamily: "ArialBold", textDecoration: "underline" }}>
          Joint and Several
        </Text>{" "}
        lease. It means that all the Tenants as a group and each of the Tenants
        as an individual are responsible to the Landlord for all of the
        agreements of this lease. For example, if the rent is not paid, the
        Landlord can sue <Text style={styles.bold}>all</Text> the Tenant’s{" "}
        <Text style={styles.bold}>(Jointly)</Text> for any unpaid rent. Or,
        Landlord can sue any <Text style={styles.bold}>one</Text> Tenant
        separately <Text style={styles.bold}>(Severally)</Text> for all the
        unpaid rent.
      </Text>
      <View style={{ lineHeight: 1.3, fontSize: 9, marginTop: 5 }}>
        <Text>
          {"                                                 "}If Tenant breaks
          this lease, Tenant agrees to give up the right to have a Notice to
          Leave, also known as a <Text style={styles.bold}>Notice to Quit</Text>
          . This means that the Landlord may file a lawsuit in court asking for
          a court order evicting Tenant from the Leased Premises without first
          giving Tenant <Text style={styles.bold}>Notice to Quit</Text>. The
          Landlord can only evict Tenant by court order.{" "}
        </Text>
      </View>
      <View style={{ marginTop: 10, lineHeight: 1.3, fontSize: 9 }}>
        <Text>
          {"                                              "}The Landlord does
          not have the right to sue in court for eviction unless Tenant has
          broken the agreements in this lease. Even though Tenant is waiving the
          right to Notice <Text style={styles.bold}>to Quit</Text>, Tenant will
          have notice of any eviction proceeding and any opportunity to be heard
          in court and to have a judge decide the Landlord’s claim for eviction.
        </Text>
      </View>
      <SignatureBox signature={tenantsArray} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 25,paddingTop:15, fontSize: 10, lineHeight: 1.4, fontFamily: "Arial" },
  sectionTitle: {
    fontSize: 11,
    marginTop: 8,
    marginBottom: 3,
    textDecoration: "underline",
    fontFamily: "ArialBold",
  },
  subTitle: {
    fontSize: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  text: { fontSize: 9, marginBottom: 4 },
  bold: { fontFamily: "ArialBold" },
  justify: { textAlign: "justify" },
  bullets: { marginLeft: 12, marginBottom: 5 },
  table: {
    width: "60%",
    alignSelf: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderColor: "#000",
  },
  tableCell: {
    flex: 1,
    fontSize: 9,
  },
  tableHeader: {
    fontFamily:"ArialBold"
  },
});
