import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";

export default function Page10_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 22.</Text> No air conditioners
        or other window devices, window treatments, awnings, draperies, or
        umbrellas, hot tubs, wading pools, or swimming pools, waterbeds,
        interior and exterior wiring, radio or television reception devices such
        as antennas or satellite dishes, privately owned washers, dryers,
        dishwashers, refrigerators, or freezers shall be installed or used on
        Leased Premises or in the common areas around the Leased Premises
        without Landlord’s prior consent in writing. Running wires and cables of
        any kind through windows and doors is forbidden in the premises. Any
        violation will be charged
        <Text style={styles.boldUnderline}> $50.00</Text> fee per item plus cost
        of usage and the cost of recovery back to the original condition.
      </Text>

      <Text style={[styles.rule, { marginBottom: 0 }]}>
        <Text style={styles.boldUnderline}>Rule 23.</Text> All the incandescent
        light bulbs, including appliance bulbs and track bulbs, florescent
        starters, and fuses are adequately supplied by Landlord before Tenant
        moves in. They shall be furnished by Tenant with parts of the same type,
        wattage, and color if they are burned out after the Tenant moves in. The
        light bulbs in the porches, balconies, entrances, hallways or common
        areas shared by other units in the same building are Landlord’s property
        for safety purposes.
      </Text>
      <Text style={styles.rule}>
        They shall not be removed, replaced, or changed to different types or
        colors by Tenant. Tenant shall call Landlord for replacement when
        necessary. In many apartment units, mini fluorescent light bulbs have
        been used. Tenant agrees not to remove any such bulbs or replace them
        with incandescent bulbs or a different type of bulbs. Tenant will be
        charged
        <Text style={styles.boldUnderline}> $25.00</Text> plus labor and
        material for each violation or occurrence of this rule.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 24.</Text> Tenant agrees to keep
        all doors, windows and storm windows closed firmly and tightly during
        the heating season, except for short periods of time for ventilation
        during the day, and no wire of any kind is allowed to run through
        windows or doors to the exterior. Otherwise, extra heating costs may be
        charged to Tenant, and Tenant shall be responsible for all excessive
        heating costs, insufficient heat, and consequential damages.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 25.</Text> Tenant will maintain
        a minimum temperature of 60 degrees F in all heated rooms of the
        dwelling (but not higher than 75 degrees F for best comfort and energy
        saving.) Tenant is prohibited from using any device not supplied by
        Landlord which produces heat by consuming electricity or any flammable
        substance. Also, upon leaving the premises for any extended period of
        time, Tenant shall provide for daily inspection of the premises during
        cold periods. This inspection shall include checking on the heating
        system to ensure that proper heat levels are being maintained. Any
        damage caused by freezing pipes shall be the responsibility of Tenant if
        the minimum temperature is not maintained.
        <Text style={styles.boldUnderline}>
          (KEROSENE BURNERS OF ANY TYPE OR AUXILIARY HEATERS ARE PROHIBITED.)
        </Text>
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 26.</Text> Landlord will treat
        termite, carpenter ant infestation or rats that cause hazards to the
        building or the safety of human beings. If roaches are found within two
        weeks after Tenant moves in, Landlord will be responsible for the
        treatment. Any roach found two weeks after Tenant moves in, Tenant is
        responsible for the treatment cost. Landlord may, at Landlord’s sole
        discretion, treat or not treat such harmless pests as spiders, ants,
        earwigs, millipedes, birds, or any other animals which are not known to
        cause human safety hazards. In case a pest treatment is scheduled,
        Tenant agrees to give the entry right to pest control vendors and to
        follow all provided instructions in preparing the unit for the
        treatment, or a<Text style={styles.boldUnderline}> $25.00</Text> fee
        plus damages thus caused will be charged to Tenant.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 27.</Text> Landlord shall not be
        liable for loss or damage to Tenant’s personal belongings due to or
        resulting from infestation or the droppings of insects, silver fish,
        pests or any kind of creatures or any kind of animals. Tenant shall be
        solely responsible for Tenant’s own personal belongings and shall
        protect these belongings from being damaged by any influences of
        elements, adverse environments, water or streams that may leak into or
        flow from any part of said premises through any defects in the roof,
        plumbing, or from any other sources.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 28.</Text> The garbage disposal,
        toilet and drains shall not be used for any other use than that for
        which they are constructed.
        <Text style={styles.boldUnderline}>Do Not</Text> throw any food,
        sanitary napkins, tampons, rags, paper products, hair, dirt, grease,
        paint, plastic, glass or metal objects or improper articles into the
        same. Any damage resulting from misuse thereof shall be borne by the
        Tenant. The following are examples of what will be charged to Tenant:
        <Text style={styles.bold}> (a) </Text>Garbage disposals jammed because
        of improper use. <Text style={styles.bold}> (b) </Text> Broken windows,
        screens, or doors <Text style={styles.bold}> (c) </Text> Toilets clogged
        beyond 48 hours after Tenant’s move- in{" "}
        <Text style={styles.bold}> (d) </Text> Damages caused by toilet overflow{" "}
        <Text style={styles.bold}> (e) </Text>
        Broken or damaged items which did not occur as a result of normal wear
        and tear.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 29.</Text>Tenant acknowledges
        that the leased premises may be located within a building which contains
        common area shared with other rental units. If damage shall occur within
        the common areas through no fault or neglect of Landlord, and as a
        result of vandalism, Landlord shall have the right to make a special
        assessment to Tenant as additional rent, or to apply an amount of up to
        <Text style={styles.boldUnderline}> $250.00</Text> of the Tenant’s
        security deposit for damages that may occur outside the leased premises
        but within the common areas of the property where the leased premises
        are located. If Tenant knows the party who does the vandalism, Tenant
        must confront with and request a written admittance for being
        responsible from this party, or report to the police.
      </Text>
      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 30.</Text> Tenant shall be
        responsible for all actions of himself/herself and his/her invitees and
        guests. Tenant individually shall not, nor shall Tenant permit any
        person on the premises, to willfully, wantonly, negligently,
        frivolously, or dementedly destroy, deface, damage, impair, or remove
        any part of the structure or the facilities, equipment or pertinences
        thereto, or located in the common areas. Landlord reserves the right to
        repair any Tenantresponsible damage at Tenant’s cost.
      </Text>

      <SignatureBox signature={tenantsArray} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    fontSize: 9.5,
    lineHeight: 1.3,
    fontFamily: "Arial",
  },
  bold: { fontFamily: "ArialBold" },
  boldUnderline: { fontFamily: "ArialBold", textDecoration: "underline" },
  rule: { marginBottom: 10, textAlign: "justify" },
});
