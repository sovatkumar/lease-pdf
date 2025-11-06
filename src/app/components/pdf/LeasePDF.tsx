import { Document, Page, View } from "@react-pdf/renderer";
import Page1_Intro from "./pages/Page1_Intro";
import Page2_LeaseDetails from "./pages/Page2_intro";
import LeaseSectionPDF from "./pages/Page3_into";
import Page4_Intro from "./pages/Page4_Intro";
import Page5_Intro from "./pages/Page5_Intro";
import Page6_Intro from "./pages/Page6_Intro";
import Page7_Intro from "./pages/Page7_Intro";
import Page8_Intro from "./pages/Page8_Intro";
import Page9_Intro from "./pages/Page9_Intro";
import Page10_Intro from "./pages/Page10_Intro";
import Page11_Intro from "./pages/Page11_Intro";
import Page12_Intro from "./pages/Page12_Intro";
import Page13_Intro from "./pages/Page13_Intro";
import Page14_Intro from "./pages/Page14_Intro";
import Page15_Intro from "./pages/Page15_Intro";

export default function LeasePDF(props: any) {
  return (
    <Document>
      <Page
        size={[9 * 72, 11.2 * 72]}
        orientation="portrait"
        style={{ paddingTop: 10, textAlign: "justify", fontSize: 9 }}
      >
        <View wrap>
          <Page1_Intro {...props} />
          {/* <Page2_LeaseDetails {...props} />
          <LeaseSectionPDF {...props} />
          <Page4_Intro {...props} />
          <Page5_Intro {...props} />
          <Page6_Intro {...props} />
          <Page7_Intro {...props} />
          <Page8_Intro {...props} />
          <Page9_Intro {...props} />
          <Page10_Intro {...props} />
          <Page11_Intro {...props} />
          <Page12_Intro {...props} />
          <Page13_Intro {...props} />
          <Page14_Intro {...props} />
          <Page15_Intro {...props} /> */}
        </View>
      </Page>
    </Document>
  );
}
