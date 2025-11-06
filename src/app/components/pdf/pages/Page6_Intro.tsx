import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";

export default function Page6_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>
        State College Borough Point System for Nuisance Properties
      </Text>

      <Text style={[styles.paragraph, { lineHeight: 1.3, fontSize: 9 }]}>
        {"                                "} Please be advised that State
        College Borough has amended their Property Maintenance Code to{" "}
        <Text style={styles.boldUnderline}>
          “Identify and resolve neighborhood nuisance problems arising from
          repeated violations of laws and ordinances”
        </Text>{" "}
        The system in place uses a point system to track violations. Each
        violation carries a different point total, determined by the severity of
        the violation. When a property reaches a total of 5 points in a 12-month
        period, the Borough takes action against the landlord and requests that
        the landlord take action against the tenants. When the point total
        reaches 10 points in a 12-month period,{" "}
        <Text style={styles.bold}>
          the Borough automatically revokes the rental permit on the property
          and the premises must be vacated for a period of 6 months
        </Text>{" "}
        The Landlord will assess a fee to the tenant of
        <Text style={styles.bold}> $500 for each point violation</Text> received
        against the property that is the fault of the tenant. If the tenant
        continues to accumulate points against the property and puts the
        Landlord’s rental permit in jeopardy, legal action will be taken against
        all tenants of the property to reimburse the Landlord for any lost
        rental income and any and all fees associated with the violation. The
        Landlord takes this ordinance very seriously, you should as well. Below
        is a list of the violations and the points associated with them.
      </Text>

      <Text style={styles.subHeading}>1 point violations:</Text>
      <Text style={[styles.paragraph, { lineHeight: 1.3, fontSize: 9 }]}>
        Trash in the yard or on the porch (It is your responsibility to keep the
        trash picked up, even if it isn’t yours). Open burning. Indoor furniture
        outdoors. Cigarette butts discarded in the yard or on the porch (It is
        your responsibility to keep the butts picked up, even if they aren’t
        yours). Recycling bins overflowing. Dog waste in the yard (fyi- no pets
        are allowed)
      </Text>

      <Text style={styles.subHeading}>2 point violations:</Text>
      <Text style={styles.paragraph}>
        Disorderly conduct including noise and loud music. Drugs. Simple
        assault. Harassment. Disabling smoke detectors. Over occupancy. Open
        lewdness. Indecent exposure – includes public urination.
      </Text>

      <Text style={styles.subHeading}>3 point violations:</Text>
      <Text style={styles.paragraph}>
        Furnishing alcohol to a minor. Aggravated assault. Statutory sexual
        assault. Involuntary deviate sexual intercourse. Sexual assault. Rape.
        Aggravated indecent assault. Possession with intent to deliver
        controlled substances or look-alike substances.
      </Text>

      <Text style={[styles.paragraph, { marginTop: 20 }]}>
        {"                                                "}This list is
        provided to you as an information source and a guideline on how you
        should live in your new home. It is not an attempt to prevent you from
        having fun and enjoying yourself. If you have a porch at your residence,
        please remember that use of the porch and the surrounding grounds is a
        privilege. Please be sure to keep all exterior areas clear of any party
        remains. This is the most commonly levied point violation and is very
        easy to prevent. If it is getting late into the evening, please bring
        your party indoors. Be aware that all homes in State College are not
        rented to students. The house that you live in is designated a “Student
        Home” by the State College Zoning Office and your neighbors may or may
        not be students. Please make an effort to be considerate of your
        neighbors; especially those who are not students. A kind gesture or
        offer to help will go a long way in keeping goodwill between you, your
        neighbors and the State College Borough employees. This is only a
        summary of the point system. People interested in the entire ordinance
        that has the permit suspension information can find a link to it on our
        website at www.psuhouses.com Thank you for your cooperation.
      </Text>

      <Text style={[styles.paragraph, { marginTop: 10, marginLeft: 15 }]}>
        We, the undersigned, have read and agree to comply with the conditions
        listed above.
      </Text>
      <View style={styles.signGrid}>
        {tenantsArray.map((tenant: string, index: number) => (
          <View key={index} wrap={false} style={styles.signBoxContainer}>
            <View style={styles.signBox}>
              <Text style={styles.signature}>{tenant}</Text>
            </View>
            <View style={styles.signMetaRow}>
              <Text style={styles.signName}>{tenant}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerText}>
            501 & 503 West Beaver Avenue &{"\n"}
            136 South Barnard Street, State College, PA 16801
          </Text>
        </View>
        <View>
          <Text style={styles.footerText}>10/03/2025</Text>
          <Text style={[styles.footerText, { marginTop: 4 }]}>Date</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    fontFamily: "Arial",
    marginHorizontal: 35,
    marginTop: 20,
    fontSize: 9.5,
    lineHeight: 1.4,
  },

  title: {
    textAlign: "center",
    fontFamily: "ArialBold",
    textDecoration: "underline",
    fontSize: 11,
    marginBottom: 10,
  },

  paragraph: {
    textAlign: "justify",
    lineHeight: 1.3,
    fontSize: 9,
  },

  subHeading: {
    fontFamily: "ArialBold",
    textDecoration: "underline",
    marginTop: 8,
  },

  bold: {
    fontFamily: "ArialBold",
  },

  boldUnderline: {
    fontFamily: "ArialBold",
    textDecoration: "underline",
  },

  signGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 12,
    gap: 8,
  },

  signBoxContainer: {
    width: "48%",
  },

  signBox: {
    border: "1pt solid #000",
    height: 30,
    paddingHorizontal: 8,
    justifyContent: "center",
    borderRadius: 3,
  },

  signature: {
    fontFamily: "mrDafoe",
    fontSize: 14,
    textAlign: "left",
    paddingTop: 2,
  },

  signMetaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },

  signName: {
    fontSize: 9,
    fontFamily: "Arial",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },

  footerText: {
    fontSize: 9,
    lineHeight: 1.3,
  },
});
