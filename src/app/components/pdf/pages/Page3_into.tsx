import { Document, Text, View, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { responsibilityData } from "../../shared/staticData";
import { SignatureBox } from "../../common/signature/signature";

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingTop: 15,
    fontSize: 10.5,
    lineHeight: 1.5,
    fontFamily: "Arial",
  },
  sectionTitle: {
    fontFamily: "ArialBold",
    fontSize: 12,
    margin: 35,
    textDecoration: "underline",
  },
  bulletList: {
    marginLeft: 15,
    marginBottom:20,
    marginTop: 5,
    fontSize: 9,
    lineHeight:1.3
  },
  bulletItem: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bulletDot: {
    width: 8,
  },
  italic: {
    fontStyle: "italic",
  },
});

export default function LeaseSectionPDF({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={{ fontFamily: "ArialBold" }}>
        10.){" "}
        <Text style={styles.sectionTitle}>
          Responsibility for Damage to Property or Injury to People
        </Text>
      </Text>
      <View style={[styles.bulletList, { marginLeft: 35, marginTop: 8 }]}>
        {responsibilityData.map((item, i) => {
          if (!item.title) return null;
          return (
            <View style={[styles.bulletItem, { gap: 8 }]} key={i} wrap={false}>
              <Text style={styles.bulletDot}>• </Text>
              <Text>{item?.title}</Text>
            </View>
          );
        })}
      </View>
      <Text style={{ fontFamily: "ArialBold" }}>
        11.) <Text style={styles.sectionTitle}>Use of Leased Premises</Text>
      </Text>
      <View style={[styles.bulletList, { marginLeft: 35, marginTop: 8 }]}>
        {responsibilityData.map((item, i) => {
          return (
            <View key={i}>
              {item.leasedPremises?.map((text, i) => {
                return (
                  <View style={[styles.bulletItem, { gap: 8 }]} key={i}>
                    <Text style={styles.bulletDot}>• </Text>
                    {i === 4 ? (
                      <Text style={{ fontSize: 8.5 }}>
                        Tenant agrees that Tenant will not allow more than{" "}
                        <Text style={{ fontFamily: "ArialBold" }}>
                          10 (ten)
                        </Text>{" "}
                        people to occupy the Leased Premises without the written
                        permission of the Landlord.
                      </Text>
                    ) : (
                      <Text style={{ fontSize: 8.5 }}>{text}</Text>
                    )}
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>

      <Text style={{ fontFamily: "ArialBold" }}>
        12.) <Text style={styles.sectionTitle}>Rules and Regulations</Text>
      </Text>
      <View style={[styles.bulletList, { marginLeft: 35, marginTop: 8 }]}>
        {[
          "Tenant agrees to obey all rules and regulations for the Leased Premises.",
          "If Tenant violates any rules or regulations for the Leased Premises, Tenant violates this Lease.",
        ].map((text, i) => (
          <View style={[styles.bulletItem, { gap: 8 }]} key={i}>
            <Text style={styles.bulletDot}>• </Text>
            <Text>{text}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontFamily: "ArialBold" }}>
        13.){" "}
        <Text style={{ fontFamily: "ArialBold" }}>
          {" "}
          <Text style={styles.sectionTitle}>
            Landlord’s Right to Mortgage the Leased Premises (Subordination)
          </Text>
        </Text>
      </Text>
      <View style={[styles.bulletList, { marginLeft: 35, marginTop: 8 }]}>
        {[
          "Subordinate and subordination are legal terms that mean that this Lease does not have any effect upon the rights of the Landlord’s mortgage company. In other words, Tenant’s rights under this Lease are subordinate to the Landlord’s mortgage company.",
          "If Landlord does not make the mortgage payments, the mortgage company may have the right to end the Landlord’s ownership of the Leased Premises.",
          "If the mortgage company sells the Leased Premises at a mortgage foreclosure sale, the Lease may end.",
          "Tenant agrees that Landlord has the right to mortgage the Leased Premises.",
          "If Landlord has a mortgage on the Leased Premises now or if Landlord gets a mortgage in the future, Tenant agrees that this lease is subordinate to the Landlord’s mortgage",
        ].map((text, i) => (
          <View style={[styles.bulletItem, { gap: 8 }]} key={i}>
            <Text style={styles.bulletDot}>• </Text>
            <Text>{text}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontFamily: "ArialBold" }}>
        14.) <Text style={styles.sectionTitle}>Care of Leased Premises</Text>
      </Text>
      <View style={[styles.bulletList, { marginLeft: 35, marginTop: 8 }]}>
        {[
          "Tenant is responsible for and will take good care of the Leased Premises and all the property in and around the Leased Premises.",
          "Tenant agrees to pay for any damage to the Leased Premises caused by Tenant, Tenant’s family and Tenant’s guests.",
          "Tenant agrees to turn over possession of the Leased Premises to Landlord when the Lease ends.",
        ].map((text, i) => (
          <View style={[styles.bulletItem, { gap: 8 }]} key={i} wrap={false}>
            <Text style={styles.bulletDot}>• </Text>
            <Text>{text}</Text>
          </View>
        ))}
      </View>
      <Text style={{ fontFamily: "ArialBold" }}>
        15.){" "}
        <Text style={styles.sectionTitle}>
          Landlord’s Right to Enter Leased Premises
        </Text>
      </Text>
      <View style={[styles.bulletList, { marginLeft: 35, marginTop: 8 }]}>
        {[
          "Tenant agrees that Landlord and Landlord’s representatives have the right to enter the Leased Premises at reasonable times, especially during lease up",
          "Landlord and Landlord’s representatives have the right to inspect, make repairs, do maintenance and show the Leased Premises to others.",
        ].map((text, i) => (
          <View style={[styles.bulletItem, { gap: 8 }]} key={i} wrap={false}>
            <Text style={styles.bulletDot}>• </Text>
            <Text>{text}</Text>
          </View>
        ))}
      </View>
      <SignatureBox signature={tenantsArray} />
    </View>
  );
}
