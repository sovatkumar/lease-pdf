import { StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  bold: { fontFamily: "ArialBold" },

  initialsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    gap: 3,
  },
  initialBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    marginBottom: 6,
  },
  signatureBox: {
    border: "1pt solid #000",
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  initials: {
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18.7,
    lineHeight: 1,
    textAlign: "center",
    fontFamily: "mrDafoe",
  },
  nameText: {
    textAlign: "center",
    fontSize: 8,
    marginTop: 2,
  },
});

export const SignatureBox = ({ signature, title = true }: any) => {
  return (
    <View>
      {title === true && (
        <Text
          style={[
            styles.bold,
            {
              marginTop: 6,
              textDecoration: "underline",
              fontFamily: "ArialBold",
            },
          ]}
        >
          Tenant(s) to initial above own name:
        </Text>
      )}

      <View style={[styles.initialsRow]}>
        {signature.map((name: string, i: number) => {
          const parts = name.split(" ");
          const initials =
            parts.length >= 2
              ? parts[0][0].toUpperCase() + parts[1][0].toUpperCase()
              : parts[0][0].toUpperCase();
          return (
            <View key={i} wrap={false} style={styles.initialBox}>
              <View style={styles.signatureBox}>
                <Text style={styles.initials}>{initials}</Text>
              </View>
              <Text style={styles.nameText}>{name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
