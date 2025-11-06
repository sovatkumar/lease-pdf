import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";

export default function Page5_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.subHeading}>
        <Text style={{ textDecoration: "underline", fontFamily: "ArialBold" }}>
          If Tenant Breaks This Lease the Landlord May Sue Each Tenant in Court:
        </Text>
      </Text>

      <View style={styles.bulletList}>
        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>
            To collect overdue Rent, late charges and money damages caused by
            Tenant’s breaking the agreements in the Lease.
          </Text>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>
            To evict Tenant and regain possession of the Leased Premises.
          </Text>
        </View>

        <View style={styles.bulletItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>
            To collect for unpaid Rent until the end of the Lease Term or until
            another person leases the Leased Premises as a new Tenant.
          </Text>
        </View>
      </View>

      <Text
        style={[
          styles.paragraph,
          { marginLeft: 20, lineHeight: 1.3, fontSize: 9 },
        ]}
      >
        If Landlord succeeds in any lawsuit against Tenant, Landlord can use the
        court process to take possession of Tenant’s personal property, goods,
        furniture, motor vehicles, and money in banks. Tenant agrees that, if
        successful, Landlord may receive reasonable attorney’s fees as part of a
        court order in a lawsuit against Tenant for breach, in whole or in part,
        of the agreements set forth in this Lease and any agreements
        incorporated herein.
      </Text>

      <Text
        style={{ fontFamily: "ArialBold", marginTop: 20, marginBottom: 90 }}
      >
        20.){" "}
        <Text style={{ textDecoration: "underline", fontFamily: "ArialBold" }}>
          Other Agreements between Landlord and Tenant
        </Text>
      </Text>

      <Text style={[styles.paragraph, { lineHeight: 1.3, fontSize: 9 }]}>
        Tenant and Landlord Agree that the following additional agreements set
        forth at length below or attached hereto are hereby incorporated by
        reference and made a part of this Lease:
      </Text>

      <View style={[styles.bulletList, { marginTop: 10 }]}>
        {[
          "State College Borough Point System for Nuisance Properties",
          "Rules and Regulations",
          "Check-Out Procedures",
          "Parental Guaranty",
        ].map((item, i) => (
          <View style={styles.bulletItem} key={i}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{item}</Text>
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
    marginTop: 20,
    marginHorizontal: 35,
    fontSize: 10,
    lineHeight: 1.4,
  },

  subHeading: {
    marginBottom: 4,
  },

  bulletList: {
    marginLeft: 35,
    marginTop: 4,
    lineHeight: 0.3,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 2,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.3,
  },

  paragraph: {
    fontSize: 9.5,
    marginTop: 8,
    textAlign: "justify",
  },
});
