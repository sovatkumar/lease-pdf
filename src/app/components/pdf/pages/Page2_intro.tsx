import { Text, View, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { securityDepositeData } from "../../shared/staticData";
import { SignatureBox } from "../../common/signature/signature";

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingTop: 15,
    fontSize: 10.5,
    lineHeight: 1.5,
    color: "#000",
    fontFamily: "Arial",
  },
  section: { marginBottom: 12 },
  sectionTitle: {
    marginBottom: 4,
    fontFamily: "ArialBold",
  },
  bold: { fontFamily: "ArialBold" },
  underline: { textDecoration: "underline" },
  indent: { marginLeft: 15 },
  doubleIndent: { marginLeft: 30,marginTop:10,marginBottom:10 },
  listingClass: {
    flexDirection: "row",
    gap: 8,
  },
});

export default function Page2_LeaseDetails({ tenants, securityDeposit }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);
  return (
    <View style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          5.) <Text style={styles.underline}>Security Deposit</Text>{" "}
        </Text>
        <View style={{ marginLeft: 35 }}>
          <View style={styles.listingClass}>
            <Text>•</Text>
            <Text style={{ fontSize: 8, lineHeight: 1 }}>
              Tenant agrees to pay a security deposit of{" "}
              <Text style={[styles.bold, styles.underline]}>
                ${securityDeposit}
              </Text>
              .
            </Text>
          </View>
          {securityDepositeData.map((item, i) => {
            if (!item.title) return null;
            return (
              <View style={styles.listingClass} key={i}>
                <Text>•</Text>
                <Text style={{ fontSize: 8, lineHeight: 1.2 }}>
                  {item?.title}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle]}>
          6.){" "}
          <Text
            style={{ fontFamily: "ArialBold", textDecoration: "underline" }}
          >
            Landlord’s Duty at the Start of the Lease
          </Text>
        </Text>
        <Text style={{ fontSize: 8.5, lineHeight: 1.3 }}>
          {"                            "}Landlord agrees to give Tenant
          possession of the Leased Premises on the starting date of the Lease
          set forth in paragraph number 3 above. The lease will start even if
          Landlord cannot give Tenant possession of the Leased Premises because
          the prior Tenant is still in the Leased Premises or the leased
          premises is damaged.
          <Text
            style={[
              styles.bold,
              { fontFamily: "ArialBold", textDecoration: "underline" },
            ]}
          >
            IF LANDLORD CANNOT GIVE TENANT POSSESSION, TENANT DOES NOT HAVE TO
            PAY RENT UNTIL THE DAY LANDLORD GIVES POSSESSION OF THE LEASED
            PREMISES TO TENANT.
          </Text>
        </Text>
      </View>
      <View style={[styles.section,{marginTop:10}]}>
        <Text style={styles.sectionTitle}>
          7.){" "}
          <Text
            style={{ textDecoration: "underline", fontFamily: "ArialBold" }}
          >
            Damage to Leased Premises{" "}
          </Text>{" "}
        </Text>
        <View style={[styles.indent, { marginLeft: 35, fontSize: 9 }]}>
          {securityDepositeData.map((item, i) => {
            return (
              <View key={i}>
                {item.damagePremises?.map((items, i) => {
                  if (!items.title) return null;
                  return (
                    <View key={i}>
                      <View style={styles.listingClass}>
                        <Text>• </Text>
                        <Text>{items?.title}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}

          <View style={styles.doubleIndent}>
            <View style={styles.listingClass}>
              <Text>1. </Text>
              <Text>
                Live in the undamaged part of the Leased Premises and pay less
                Rent until the Leased Premises are repaired.
              </Text>
            </View>
            <View style={styles.listingClass}>
              <Text>2. </Text>
              <Text>End the lease and leave the Leased Premises.</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 8, fontSize: 9 }}>
          <Text>• </Text>
          <Text>
            Tenant agrees that if the Leased Premises is damaged or destroyed
            and Tenant ends the Lease, Landlord has no further responsibility to
            Tenant.
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          8.){" "}
          <Text
            style={{ textDecoration: "underline", fontFamily: "ArialBold" }}
          >
            Insurance
          </Text>
        </Text>
        <View style={[styles.indent, { marginLeft: 35 }]}>
          <View style={styles.listingClass}>
            <Text>• </Text>
            <Text>
              Landlord agrees to have insurance on the building where the Leased
              Premises is located.
            </Text>
          </View>
          <View style={styles.listingClass}>
            <Text>• </Text>
            <Text>
              Tenant’s own property is{" "}
              <Text
                style={{ fontFamily: "ArialBold", textDecoration: "underline" }}
              >
                not insured
              </Text>{" "}
              by Landlord’s insurance.
            </Text>
          </View>
          <View style={styles.listingClass}>
            <Text>• </Text>
            <Text>
              Tenant is responsible for Tenant’s own property that is in the
              Leased Premises.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          9.){" "}
          <Text
            style={{ textDecoration: "underline", fontFamily: "ArialBold" }}
          >
            Assignments or Subleases by Tenant
          </Text>
        </Text>
        <View style={{ marginLeft: 35, fontSize: 9 }}>
          {securityDepositeData?.map((item, i) => {
            return (
              <View key={i}>
                {item?.assignments?.map((items, i) => {
                  if (!items.title) return null;

                  return (
                    <View
                      style={[styles.listingClass, { lineHeight: 0.7 }]}
                      key={i}
                    >
                      <Text>• </Text>
                      <Text>{items?.title}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}

          <View style={styles.listingClass}>
            <Text>• </Text>
            <Text>
              The subleasing charge is
              <Text style={styles.bold}> $100.00</Text> per sublet and will be
              assessed against the original Tenant upon consent to the sublease
              by the Landlord.
            </Text>
          </View>
        </View>
      </View>
      <SignatureBox signature={tenantsArray} />
    </View>
  );
}
