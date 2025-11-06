import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";

export default function Page12_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>CHECK-OUT PROCEDURE</Text>
      <Text style={styles.paragraph}>
        This Check-out Procedure will be sent to Tenant by either mail or email
        to any one of the Tenant members approximately three weeks before the
        lease termination date. Tenant agrees to follow the instructions therein
        to have a smooth move-out process
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C1.</Text> Notify Landlord in advance
        of your exact moving date. Provide a forwarding address in writing for
        the contact person in your group. Landlord will only send one check with
        all Tenants’ names, unless all Tenants write an authorization for
        Landlord to pay the check only to one person. Return all keys (including
        mailbox keys) to the Landlord when you vacate the premises or leave the
        keys in the rental unit. A
        <Text style={styles.boldUnderline}> $100.00</Text> charge per lock (cost
        of mailbox lock or special locks may vary significantly) will be levied
        if all keys are not returned to the Landlord by the lease ending date.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C2.</Text> All floors must be cleaned
        free of spots. Hardwood or tile floors must be cleaned and waxed.
        Windows must be washed on the inside. If Tenant fails to clean the
        apartment, Landlord will hire a local professional to do the work and
        charge Tenant the professional’s fee. Carpeting will be professionally
        steam-cleaned through a contractor approved by Landlord, and the cost
        will be deducted from the security deposit.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C3.</Text> All furniture must be
        clean (vacuumed, dusted and polished), all draperies must be
        dry-cleaned, and blinds must be cleaned, if the furniture, draperies,
        and blinds are provided by Landlord. The receipt for dry-cleaning must
        be submitted to Landlord. All light fixtures, light switches, doors, and
        radiators must be cleaned. Smoke detectors and fire extinguishers must
        be in working condition. All light bulbs must be working, and all globes
        cleaned.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C4.</Text> Kitchen appliances,
        cupboards, and counter must be cleaned. Stove, microwave, refrigerator,
        freezer, dishwasher, windows, and exhaust fan must be thoroughly
        cleaned.{" "}
        <Text style={styles.boldUnderline}>
          DO NOT turn off or unplug refrigerator.
        </Text>{" "}
        Simply turn to warmest setting after defrosting and cleaning. Remove all
        personal effects, food and trash. Exterior of the Leased Premises must
        be clean and free of debris and lawn must be mowed and/or sidewalks free
        of snow and ice, if this applies to your lease
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C5.</Text> If the leased premises are
        heated with oil or propane, and Tenant pays for heat and heating fuel.
        The oil tank shall be filled at the beginning of the lease term by
        Landlord. Tenant shall be responsible for filling the tank at the end of
        the Lease term.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C6.</Text> All wood work and trim
        around windows, doors and floors must be washed thoroughly. Bathtub or
        shower, sink, toilet, medicine chest, and ventilation fan must be clean.
        Do not patch up nail holes yourselves without Landlord’s permission.
        Charges may be incurred by failing to obtain Landlord’s permission. Dirt
        and other marks on walls that were painted at move-in are not considered
        normal wear and tear, therefore Tenant will be charged for painting.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C7.</Text> Tenant will be charged an
        account handling fee of $50.00 per account if
        <Text style={styles.bold}> a)</Text> Tenant fails to notify the
        Telephone Company and TV cable company about the date of disconnecting
        service; <Text style={styles.bold}> b)</Text> Tenant fails to have final
        meter read on electricity, and/or gas, if applicable, at the lease
        termination or fails to inform the utility companies about your
        forwarding address; <Text style={styles.bold}> c)</Text> Tenant fails to
        pay all applicable utility charges up to the final day of the lease
        agreement; <Text style={styles.bold}> d)</Text> Tenant closes utility
        account(s) before the lease ending date. For any utility bill that
        Tenant is responsible for must remain under Tenant’s name until the
        exact lease expiration date. At no times during the lease should any
        utilities be disconnected.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C8.</Text> Before Tenant moves in,
        all rental units are professionally cleaned with a call-back service.
        The cleaning people will come back for any unclean areas found by Tenant
        within 24 hours after move-in. It is expected that the rental unit will
        be cleaned to professional standards when Tenant moves out.{" "}
        <Text style={styles.boldUnderline}>
          In case the move-out cleaning does not meet professional standards,
          Landlord reserves the right to hire professionals to re-clean the
          premises at Tenant’s cost.
        </Text>
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C9.</Text> Charges will be made
        against your security deposit if the above procedures are not followed.
        Also, all damages beyond normal wear and tear will be deducted from your
        security deposit.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>C10.</Text> If property belonging to
        other people, businesses, organizations, or the municipality, such as
        street signs, are found in the premises, Tenant will be charged the cost
        for returning these properties to the owner(s).
      </Text>

      <SignatureBox signature={tenantsArray} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    fontSize: 9.5,
    lineHeight: 1.35,
    fontFamily: "Arial",
  },
  title: {
    textAlign: "center",
    fontFamily: "ArialBold",
    textDecoration: "underline",
    fontSize: 12,
    marginBottom: 6,
  },
  paragraph: { marginBottom: 10, textAlign: "justify" },
  bold: { fontFamily: "ArialBold" },
  boldUnderline: { fontFamily: "ArialBold", textDecoration: "underline" },
  rule: { marginBottom: 15, textAlign: "justify" },
});
