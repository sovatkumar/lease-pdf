import { StyleSheet, Text, View } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  initialBox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  initialText: {
    fontFamily: "mrDafoe",
    fontSize: 10,
  },
});
export const ShortSignature = ({ initials }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: 8,
      }}
    >
      {initials.map((init: any, i: number) => (
        <View
          key={i}
          wrap={false}
          style={{
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            wrap={false}
            style={[
              styles.initialBox,
              {
                alignItems: "center",
                borderWidth: 1,
              },
            ]}
          >
            <Text style={[styles.initialText, { marginBottom: 2 }]}>
              {init}
            </Text>
          </View>
          <Text style={{ fontSize: 8, textAlign: "center" }}>{init}</Text>
        </View>
      ))}
    </View>
  );
};
