import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";

export default function Page9_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 11.</Text> If Tenant is unable to pay the
        full rent, Landlord has the right, but is not obligated, to put an
        additional person into the leased premises to compensate for the
        deficient amount. Tenant agrees to vacate a bedroom for him/her and
        Landlord will not be held responsible for any of his/her behaviors or
        acts. This agreement can be extended and applied to additional persons
        added to the leased premises until the deficient rent is paid in full.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 12.</Text> Tenant shall be responsible
        for testing all fire warning devices such as smoke detectors and fire
        alarms within the Leased premises monthly and shall notify the Landlord
        if any device is not functional. Tenant is responsible for replacing
        batteries as needed. Tenant shall not disable, or permit to be disabled,
        any fire warning device or discharge any fire extinguisher except in
        case of a fire. Tenant is responsible for the malfunction of smoke
        detectors whether because of weak, defective, or inoperable batteries or
        otherwise. Tenant shall also be responsible for care and maintenance of
        fire extinguisher. All fire extinguishers will be charged by Landlord
        and must remain charged during tenancy and upon vacating by Tenant. If
        the fire extinguisher is discharged, Tenant must notify Landlord to
        recharge it. The cost of recharging or the replacement of the
        extinguisher will be billed to all Tenants of the unit. All fires must
        be reported to Landlord. Should Landlord find a disarmed or damaged
        smoke detector or discharged fire extinguisher, Landlord will notify the
        Centre Region Code Enforcement Officer and Tenant could be assessed a
        fee by that Government agency.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 13.</Text> Tenant agrees to only use the
        light bulbs not exceeding the maximum wattage allowed by the fixture for
        fire safety, and not to use touchier floor lamp with halogen light bulb
        in the premises.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 14.</Text> Tenant is financially
        responsible for fires and damages caused by the negligence of Tenant or
        his/her guests. Tenant shall become familiar with and observe all posted
        security regulations and all posted fire escape of evacuation routes and
        all fire exits. Questions concerning security and fire procedures should
        be directed to Landlord without delay. Tenant understands that faulty
        wiring is one of the major fire hazards and Tenant agrees not to use any
        reconnected wires, aged wires or conductors for any electric device.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 15.</Text>{" "}
        <Text style={styles.boldUnderline}>
          NO PETS OF ANY KIND SHALL BE CARRIED OR KEPT IN OR ABOUT THE LEASED
          PREMISES.
        </Text>{" "}
        If Tenant keeps or permits to be kept any said pet on the premises, then
        said Tenant agrees to pay to Landlord the sum of{" "}
        <Text style={styles.bold}>$25.00</Text> for each day or part of day that
        each pet remains on the premises plus pet-associated treatment costs no
        matter who is the owner of the animal. The Tenant further agrees that
        Landlord shall have the sole and exclusive right to determine if the
        premises need to be exterminated upon finding a pet of any kind on the
        premises.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 16.</Text> If the premises are not
        cleaned when Tenant takes possession, Tenant shall call Landlord within
        24 hours of the move-in date for call-back cleaning service. Landlord
        will not reimburse Tenant for cleaning if it is done by Tenant, while
        Tenant shall still be responsible for leaving the apartment cleaned on
        vacating the premises.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 17.</Text> Tenant is responsible for
        providing appropriate non flammable containers for trash and shall keep
        the premises in good state of preservation and cleanliness. No articles
        shall be hung from the windows or placed upon the windowsills or
        balconies or common areas. Trash cans and recycle bins have to be kept
        indoors, on the porch or in hidden areas, and must be taken out to the
        curbside no earlier than the night before the refuse pickup day and
        taken back no later than the night of the pickup day. All recyclable
        glass, metal, paper or plastic contains, such as bottles, cans, cups,
        plates and boxes, must be sorted and placed in recycle bins. Refuse
        shall be placed in garbage cans or in the dumpsters. Cigarette butts
        must be placed in a noncombustible container or ashtray. Please break
        boxes down before discarding or recycling.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 18.</Text> Landlord has the right to
        treat and correct any cleaning, refuse, recycling or littering item
        violation said above at a cost to Tenant of $30.00 per hour (with a
        $15.00 minimum charge) plus material costs at any time and at Landlord’s
        sole discretion. Notwithstanding Landlord’s action, Tenant is solely
        responsible for keeping the premises clean and free from littering and
        animal feces left by anybody except Landlord and Landlord’s associates,
        whether or not he/she is Tenant, and responsible for any violation fee
        issued by the local authority related to littering, animal feces or
        improper refuse and recycled matter disposal.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 19.</Text> Tenant shall not add, remove,
        alter, or change any locks. There shall be a{" "}
        <Text style={styles.bold}>$100.00 </Text> charge to Tenant for each
        occurrence. <Text style={styles.bold}> Absolutely no hasp </Text> shall
        be installed on any door under any circumstances as{" "}
        <Text style={styles.bold}>
          {" "}
          it is forbidden by local code ordinance.
        </Text>
        Tenant shall be charged <Text style={styles.bold}>$100.00</Text> for
        each such violation. Landlord can install a deadbolt lock upon Tenant’s
        request for a fee of $50 plus the actual cost of parts and labor to
        install. The lock installation request can be given to Landlord any
        month other than July - September.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 20.</Text> A minimum{" "}
        <Text style={styles.bold}>$100.00</Text> per lock (cost of mailbox lock
        or special locks may vary significantly) will be charged if not all keys
        are returned or mailed out to the Landlord by the Lease termination
        date. The same charge shall be applied to the loss of any key, which
        shall necessitate the change of any lock. If Tenant experiences troubles
        with keys, Tenant should report to Landlord immediately. Otherwise,
        replacement of a broken key is <Text style={styles.bold}>$20.00</Text>{" "}
        to Tenant.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.bold}>Rule 21.</Text> A lockout fee of{" "}
        <Text style={styles.bold}>$50.00</Text> will be charged between 9am to
        5pm on business days and <Text style={styles.bold}>$75.00</Text> after
        hours.
      </Text>

      <SignatureBox signature={tenantsArray} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    fontFamily: "Arial",
    paddingHorizontal: 30,
    fontSize: 9.5,
    lineHeight: 1.3,
  },
  bold: { fontFamily: "ArialBold", textDecoration: "underline" },
  boldUnderline: { fontFamily: "ArialBold", textDecoration: "underline" },
  rule: { marginBottom: 6, textAlign: "justify" },
});
