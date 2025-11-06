import { View, Text, StyleSheet } from "@react-pdf/renderer";
import "./pdfFont";
import { SignatureBox } from "../../common/signature/signature";

export default function Page11_Intro({ tenants }: any) {
  const tenantsArray = tenants
    .split(",")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length > 0);

  return (
    <View style={styles.page}>
      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 31.</Text> Areas around a dart
        board should be covered with a wood board so that expensive dart hole
        repairs can be avoided. No adhesives, hooks, nails, sticky tape, or
        screws may be used on any surfaces of the leased premises except for
        small diameter nails of no greater than 1/16-inch diameter. Tenant shall
        not install shelving, wallpaper, paint, or alter in any way the features
        of the leased premises. Fees for spackling and painting excessive nail
        holes may be charged to the Tenant.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 32.</Text> Tenant and visitors
        of Tenant agree not to obstruct sidewalks, corridors, passages,
        stairways, or any other such areas in or around the Leased Premises with
        goods, carriages, bikes, etc. Tenant or invitees shall not play,
        congregate, or leave children unattended in any common area. Tenant or
        invitees shall not ride bicycles anywhere within the building.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 33.</Text> Tenant shall refrain
        from making noises that could disturb any neighbor from 11pm to 8am.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 34.</Text> The use of charcoal
        grills or tiki torches is not permitted in the Leased Premises or on any
        balcony, patio or other common area of the property. If they are found
        and they will be immediately removed by the Landlord. Open fire is not
        permitted in the State College area. Violators will be responsible for
        any fee from the city authority.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 35.</Text> Tenant is required to
        obey a local code stipulation that no tapestry or combustible sheet be
        hung on the ceiling.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 36.</Text> Tenant shall not
        climb on to the roof of the building of the Leased Premises or enter any
        area clearly designated as being closed to Tenant and others such as
        mechanical rooms.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 37.</Text> Parking on Landlord’s
        premises whether included in this lease or not, is by permit only. At no
        time are motor vehicles of any type allowed on the grass, porches, or
        sidewalks at any property. Any cars violating these rules will be towed
        at car owner’s expense. A fee of{" "}
        <Text style={styles.boldUnderline}>$200.00</Text> will be assessed if
        motorcycles or mopeds are found in an apartment.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 38.</Text> Tenant agrees to
        accept, as binding, any notice which, in the judgment of the Landlord,
        may be necessary for the safety, care and/or cleanliness of the leased
        premises or building of which the leased premises is a part for the
        preservation of good order therein, and such notice when communicated in
        writing to Tenant shall form part of this lease.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 39.</Text> Notice shall be given
        to Landlord if the premises are to be unoccupied for longer than five
        (5) consecutive days unless it is due to scheduled school holidays.
        Landlord reserves the right to enter the premises without further notice
        between 8 am to 10 pm on Labor Day weekend, Thanksgiving week, the whole
        Winter Break, the whole Spring Break, and July 4 for inspection,
        maintenance, repair or construction work.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 40.</Text> Tenant agrees that
        Landlord can make repairs or restore the premises to its original state,
        of any scale, regardless of who is responsible, at any period after
        notifying tenant by any means, such as phone, mail, email.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 41.</Text> Tenant agrees to only
        allow the persons on the lease or otherwise approved by Landlord to
        dwell in the unit. Any violation of exceeding the occupancy limit set by
        the local administration is subject to fees and legal charges. Tenant
        agrees to pay all the fees associated with such violation.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 42.</Text> Tenant, guests, or
        invitees are
        <Text style={styles.bold}> NOT</Text> permitted to drink alcoholic
        beverages, smoke and engage in social gatherings in the common areas
        shared by other units, such as porches, stairways, hallways, lobby area,
        elevators, and the laundry area of all buildings.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 43.</Text> If any Tenant owed
        money shall be collected through a collection agency, Tenant agrees to
        pay all the fees of the collection agency and the amount of the owed
        money to the Landlord. Landlord.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 44.</Text> Tenant understands
        that Landlord does not hold office hours during weekends and national
        holidays. Landlord will respond for a) floods, fire, explosions, sewer
        backups or no heat situations, or b) the weekend of the lease starting
        date or termination date. Tenant agrees to use email for nonemergency
        requests or inquiries.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 45.</Text> Tenant agrees to be
        fully responsible for reading and understanding the lease.
      </Text>

      <Text style={styles.rule}>
        <Text style={styles.boldUnderline}>Rule 46.</Text> Gaming tables of any
        kind (i.e. Die Tables) are not permitted to be used or stored anywhere
        on the premises or common areas. If found, landlord reserves the right
        to remove and dispose of said tables at the landlord’s discretion
      </Text>

      <Text style={styles.finalNote}>
        <Text style={styles.bold}>
          TENANT SHALL BE RESPONSIBLE FOR ALL DAMAGE OR INJURY RESULTING FROM
          ANY VIOLATION OF THESE RULES AND REGULATIONS.
        </Text>
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
  finalNote: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 10,
    lineHeight: 1.4,
  },
});
