import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";

export default function Page8_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Rules and Regulations</Text>
      <Text style={styles.paragraph}>
        The following Rules and Regulations are part of the Lease Agreement
        between Landlord and Tenant. As set out in Section 12 of the Lease
        Agreement, violation or breach of any of the Rules and Regulations is a
        breach of the terms and conditions of the Lease Agreement and the
        nonbreaching party shall be entitled to exercise any or all the remedies
        provided in the Lease Agreement.
      </Text>
      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 1.</Text> The rent must be paid to the
        Landlord via check or online.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 2.</Text> It is agreed by Tenant and
        Landlord that the total rent amount over the lease term is divided into
        equal monthly payments although some months have fewer days than others.
        Tenant shall pay the first partial rent payment and the last partial
        rent payment by the first of the month prior to the commencement date,
        regardless of the actual commencement date of the lease. No keys will be
        issued to the Tenant until the first rent payment has been received.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 3.</Text> Rent is due on the{" "}
        <Text style={styles.bold}>1st of the month.</Text> If the first of the
        month falls on a Sunday or holiday, then the due date will be extended
        to the following business day. If the rent is not paid by the 5th of
        each month, a late charge of $5.00 per day retroactive to the first of
        the month will be assessed. If there is any unpaid balance on Tenant
        account, it will be deducted from Tenant’s most recent rental payment
        and any deficient amount in the rent will be considered late with the
        fee accruing to the 1st day of the month. Tenant understands that the
        premises is committed and leased to Tenant for the whole lease term and
        agrees to pay the full rent regardless when Tenant possess or returns
        the keys for the premises.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 4.</Text> If Tenant shall occupy the
        leased premises prior to the beginning of the term, such occupancy shall
        be subject to the terms of this lease. Rent shall be paid for the same
        period from the date of such occupancy to the beginning of said term. If
        Tenant occupies the premises beyond the ending date of the lease
        agreement, a <Text style={styles.bold}>$200 per day</Text> holdover fee
        will be levied against Tenant for each day or part of day beyond the
        ending date.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 5.</Text> The security deposit shall be
        retained by the Landlord and administered in accordance with all
        applicable statutory requirements as security for Tenant’s faithful
        performance of all lease terms, covenants and conditions. On the second
        (2nd) anniversary, the deposit, if it exceeds $100, will be deposited in
        an interest-bearing account. One percent (1%) of the interest will be
        retained by the Landlord for bookkeeping. The balance of the interest
        will be paid to the Tenant, as required by Pennsylvania Law. The check
        will be made payable to all persons signing this lease and mailed to a
        forwarding address which must be furnished by Tenant in writing.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 6.</Text> A{" "}
        <Text style={styles.bold}>$50.00 service fee</Text> will be charged on
        all checks returned due to insufficient funds or for any other reason.
        Returned checks{" "}
        <Text style={styles.bold}>
          will not be re-deposited, unless done automatically by the bank.
        </Text>{" "}
        Tenant must cover the returned check with cash, money order or certified
        check. Late charges will continue to accrue, retroactive to the 1st of
        the month until the rent is paid in full.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 7.</Text> All maintenance or utility
        charges of Tenant must be paid or notice of any disputed charges must be
        delivered to Landlord prior to Landlord specified due date (usually
        within 10 days of the statement date). Any late payments will result in
        a charge to the Tenant of $5.00 per day from the due date.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 8.</Text>{" "}
        <Text style={styles.bold}>The subleasing fee is $100</Text> per sublet
        agreement and is charged to the original Tenant. Before subletter moves
        in, Tenant must obtain the Landlord’s permission, fill out the
        subleasing form and pay the subleasing fee. Landlord does not have a
        legal relationship with the subletter. Tenant needs to pay the rent
        directly to the Landlord and still needs to fulfill the obligations
        required on the lease during the lease term whether Tenant resides in
        the leased premises or not. Tenant must review the lease with the
        subletter. Charges incurred by the subletter are the Tenant’s
        responsibility.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 9.</Text> All furniture shall always
        remain in the unit and shall not be moved outdoors at any time. Inside
        furniture on a porch or balcony is a major fire hazard and is forbidden
        by local code. All inside furniture found outside will be immediately
        removed at the expense of the Tenant. Tenant shall not alter any part of
        the leased premises, equipment or fixtures, physically or cosmetically,
        by any means, such as painting, removing doors, storm windows, screens,
        or fixtures from their original location. Any alternations shall be
        considered a violation of this rule, and Landlord reserves the right to
        restore the premises to its original condition at Tenant’s expense.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 10.</Text> Your unit may be equipped with
        sprinkler heads. Regulations do not enable multiple shut-off valves on
        the system. If one of the heads is activated, 15 gallons of water per
        minute will flow from the sprinkler. Please be extremely careful with
        heating devices or open flames in the area of the sprinkler heads. If
        the sprinkler system goes off due to tampering with the system, the
        Tenants will be held responsible for all damage. Landlord or the Fire
        Department must be called immediately to shut off the system. Tampering
        with a fire alarm apparatus is in violation of the criminal statutes.
        Violation of this law may result in a fee and imprisonment.
      </Text>

      <SignatureBox signature={tenantsArray} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 25,
    fontSize: 8,
    fontFamily: "Arial",
    lineHeight: 1.3,
  },
  title: {
    fontSize: 12,
    fontFamily: "ArialBold",
    textAlign: "center",
    textDecoration: "underline",
    marginBottom: 8,
  },
  paragraph: {
    textAlign: "justify",
    marginBottom: 6,
  },
  bold: {
    fontFamily: "ArialBold",
    textDecoration: "underline",
  },
  rule: {
    marginBottom: 6,
    textAlign: "justify",
  },
});
