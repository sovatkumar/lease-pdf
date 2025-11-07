import { Text, View, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingHorizontal: 30,
    fontSize: 10.5,
    lineHeight: 1.5,
    color: "#000",
    fontFamily: "Arial",
  },
  headerCompany: {
    textAlign: "center",
    textDecoration: "underline",
    fontSize: 18,
    marginBottom: 8,
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "ArialBold",
    textDecoration: "underline",
    marginBottom: 8,
  },
  headerNote: {
    textAlign: "center",
    fontSize: 9.5,
    fontFamily: "ArialBold",
    marginBottom: 12,
  },
  noticeBox: {
    border: "1pt solid #000",
    padding: 4,
    marginBottom: 12,
  },
  noticeText: { fontSize: 8.5, lineHeight: 1.4, textAlign: "center" },
  section: { marginBottom: 12 },
  sectionTitleWithUnderline: {
    fontFamily: "ArialBold",
    marginBottom: 4,
    textDecoration: "underline",
    textDecorationStyle: "solid",
    textDecorationThickness: 3,
  },
  bold: { fontFamily: "ArialBold" },
  indent: { marginLeft: 25, fontSize: 9.6 },
  rentTable: {
    marginTop: 6,
    paddingVertical: 4,
  },
  rentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 1,
  },
});

export default function Page1_Intro({
  tenants = "Marlena Ader, Halle Bell, Lindsay Harrison, Julia Howells, Annalise Resta, Emma Watson, Sadie Wiley, Natalie Christie, Jenna Michelotti",
  address = "301 S. 300 West Beaver Avenue, 150 South Burrowes Street, State College, PA 16801",
  landlordName = "Third Coast Properties LLC",
  AddressLine = "437 West Beaver Avenue",
  city = "State College",
  state = "PA",
  zip = "16801",
  phone = "(814)-238-6566",
  rent = "$120,000.00",
  startDate = "",
  endDate = "",
}: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);
  const formatDate = (date: any) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      timeZone: "Asia/Kolkata",
    });
  const start = new Date(startDate);
  const end = new Date(endDate);
  const endOfStartMonth = new Date(
    start.getFullYear(),
    start.getMonth() + 1,
    0
  );
  const startOfEndMonth = new Date(end.getFullYear(), end.getMonth(), 1);
  const firstPartialRent = "5,000.00";
  const lastPartialRent = "5,000.00";

  return (
    <View style={styles.page}>
      <Text style={styles.headerCompany}>{landlordName}</Text>
      <Text style={styles.headerTitle}>Residential Lease Agreement</Text>
      <Text style={styles.headerNote}>
        This is a residential lease agreement (the "Lease Agreement ” or
        “Lease”) It is a legally binding contract between the Landlord and
        Tenant. Tenants should read this Lease carefully.
      </Text>

      <View style={styles.noticeBox}>
        <Text style={styles.noticeText}>
          This residential lease is a joint and several lease. This means that
          all the tenants as a group and each of the tenants as an individual
          are responsible to the landlord for all the agreements of this lease
          including but not limited to the care and condition of the premises
          and any damages thereto. Landlord can sue all the tenants (jointly) or
          landlord can bring a suit against any one tenant separately
          (severally) for all the unpaid rent and for any damages to the
          property or for any other charges due under the terms of this lease
          agreement.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.bold}>
          1.){" "}
          <Text style={[styles.sectionTitleWithUnderline, { marginLeft: 15 }]}>
            Names of Landlord and Tenant
          </Text>{" "}
        </Text>
        <Text
          style={[
            styles.sectionTitleWithUnderline,
            { marginLeft: 25, marginTop: 4 },
          ]}
        >
          Landlord:
        </Text>
        <View style={styles.indent}>
          <Text>{landlordName}</Text>
          <Text>{AddressLine}</Text>
          <Text>
            {city}, {state} {zip}
          </Text>
          <Text>{phone}</Text>
        </View>
        <Text
          style={[
            styles.bold,
            styles.sectionTitleWithUnderline,
            { marginTop: 6, marginLeft: 25 },
          ]}
        >
          Tenant(s):
        </Text>
        <Text style={{ fontSize: 10.1 }}>
          {tenantsArray.join(", ")}, jointly and severally.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.bold}>
          2.){" "}
          <Text style={[styles.sectionTitleWithUnderline, { marginLeft: 15 }]}>
            Leased Premises{" "}
          </Text>{" "}
        </Text>
        <Text>
          The leased premises are the place that the Landlord agrees to lease to
          the Tenant. The leased premises are:{" "}
        </Text>
        <Text style={[styles.bold, { textDecoration: "underline" }]}>
          {address}.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.bold}>
          3.){" "}
          <Text style={[styles.sectionTitleWithUnderline, { marginLeft: 15 }]}>
            Starting and Ending Dates of Lease Agreement (“Lease Term”)
          </Text>
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "flex-start",gap:35 }}>
          <Text style={{ marginLeft: 25,width:230 }}>This Lease Term commences on</Text>
          <Text
            style={[
              styles.bold,
              {
                paddingLeft: 10,
                textDecoration: "underline",
              },
            ]}
          >
            {formatDate(startDate)}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start",gap:35 }}>
          <Text style={{ marginLeft: 25,width:230 }}>This Lease Term ends on</Text>
          <Text
            style={[
              styles.bold,
              {
                paddingLeft: 10,
                textDecoration: "underline",
              },
            ]}
          >
            {formatDate(endDate)}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.bold}>
          4.){" "}
          <Text style={[styles.sectionTitleWithUnderline, { marginLeft: 15 }]}>
            {" "}
            Rent{" "}
          </Text>{" "}
        </Text>
        <Text style={{ marginLeft: 25,marginTop:7 }}>
          The total amount of Rent is:
          <Text style={styles.bold}>${Number(rent).toLocaleString()}</Text> for
          the Lease Term (“Rent”).
        </Text>
        <Text style={{ marginLeft: 25 }}>
          The amount of Rent is: $
          {Math.round(Number(rent) / 12).toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}{" "}
          in 12 equal payments.
        </Text>
      </View>

      <View style={[styles.indent, { marginLeft: 45 }]}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>•</Text>
          <Text>
            Tenant agrees to pay each Rent payment on or before the first day of
            each month.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>•</Text>
          <Text>
            Landlord does not have to ask (Make Demand Upon) Tenant to pay the
            Rent.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>•</Text>
          <Text>
            Tenant agrees to pay Rent by first class mail, online, or in person
            to the Landlord at the place specified by Landlord.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>•</Text>
          <Text>
            Tenant agrees to pay a Late Charge of{" "}
            <Text style={[styles.bold]}>$5.00</Text> per day if Tenant does not
            pay the Rent on time.
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>•</Text>
          <Text>
            If Tenant mails the rent to Landlord, the date of payment will be
            the date the letter is postmarked.
          </Text>
        </View>
      </View>
      <View style={styles.rentTable}>
        <View style={styles.rentRow}>
          <Text>First partial month's Rent:</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 35,
            }}
          >
            <Text>{formatDate(start)}</Text>
            <Text>to</Text>
            <Text>{formatDate(endOfStartMonth)}</Text>
          </View>
          <Text>${firstPartialRent}</Text>
        </View>
        <View style={styles.rentRow}>
          <Text>Last partial month's Rent:</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 35,
            }}
          >
            <Text>{formatDate(startOfEndMonth)}</Text>
            <Text>to</Text>
            <Text>{formatDate(end)}</Text>
          </View>

          <Text>${lastPartialRent}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={[styles.sectionTitleWithUnderline]}>
          Total Rent Due on:
        </Text>
        <Text style={[styles.sectionTitleWithUnderline]}>
          {formatDate(start)}
        </Text>
        <Text style={[styles.bold]}>
          $
          {parseFloat(firstPartialRent.replace(/,/g, "")) +
            parseFloat(lastPartialRent.replace(/,/g, ""))}
        </Text>
      </View>

      <SignatureBox signature={tenantsArray} />
    </View>
  );
}
